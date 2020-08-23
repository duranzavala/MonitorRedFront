import Utils from '@Utilities';

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

const registerUser = (username, password) => {
    return false
};

export default {
    registerUser,
    validateFields,
};