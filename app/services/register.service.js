import BaseService from '@Services/base.service';
import { CONTROLLERS, COMMANDS, } from '@Utilities/constants/commands.constants';

export default class RegisterService extends BaseService {
    async register(email, password, firstName, lastName) {
        const data = {
            controller: CONTROLLERS.USER_CONTROLLER,
            command: COMMANDS.SIGNUP_COMMAND,
            data: {
                Email: email,
                FirstName: firstName,
                LastName: lastName,
                Password: password,
                Role: 1,
            },
        };
        return this.postCommand(data);
    }
};