import Utils from '@Utilities';
import RegisterService from '@Services/register.service';

const isValidFirstName = (firstName) => firstName.length > 0;

const isValidPassword = (password, confirmPassword) => (
    password.length >= 8 && confirmPassword.length >= 8
    && password === confirmPassword
);

const isValidEmail = (email) => Utils.regexValidationEmail(email);

const validateFields = ({ firstName, password, confirmPassword, email }) => {
    const response = { isSuccess: true, errors: [] };

    if (!isValidFirstName(firstName)) {
        response.errors.push('firstname');
    }
    if (!isValidEmail(email)) {
        response.errors.push('email');
    } 
    if (!isValidPassword(password, confirmPassword)) {
        response.errors.push('passwords');
    }
    
    if (response.errors.length > 0) {
        response.isSuccess = false;
    }

    return response;
};

const registerUser = async (email, password, firstName, lastName) => {
    let result = { success: false, message: '' };
    
    try {
        const registerService = new RegisterService();
        return registerService.register(email, password, firstName, lastName);
    } catch (error) { result.message = error }

    return result;
};

export default {
    registerUser,
    validateFields,
};