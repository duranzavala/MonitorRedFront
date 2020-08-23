import Utils from '@Utilities';
import LoginService from '@Services/login.service';
import SessionStorageController from '@Controllers/session.storage.controller';

const isValidEmail = (email) => Utils.regexValidationEmail(email);

const validateFields = (email, password) => {
    const response = { isSuccess: true, errors: [] };

    if (!isValidEmail(email)) {
        response.errors.push('email address');
    }
    if (password.length < 8) {
        response.errors.push('password');
    }

    if (response.errors.length > 0) {
        response.isSuccess = false;
    }

    return response;
};

const saveToken = async (token) => {
    const sessionStorageController = new SessionStorageController();

    try {
        await sessionStorageController.save('token', token);
    } catch (error) { console.log('>>>>> error: ', error); }
};

const login = async (username, password) => {
    let result = false;
    
    try {
        const loginService = new LoginService();
        const { success, data: token } = await loginService.login(username, password);

        if (success) {
            await saveToken(token);
            return true;
        }
    } catch (error) { console.log('>>>>> error: ', error); }

    return result;
}

export default {
    login,
    validateFields,
};