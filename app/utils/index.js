const REGEX_EMAIL = /^[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?\.)+com$/;

const regexValidationEmail = (email) => REGEX_EMAIL.test(email);;

export default {
    regexValidationEmail,
};