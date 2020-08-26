import BaseService from '@Services/base.service';
import { CONTROLLERS, COMMANDS, } from '@Utilities/constants/commands.constants';

export default class LoginService extends BaseService {
    async login(username, password) {
        const data = {
            controller: CONTROLLERS.AUTHENTICATE_CONTROLLER,
            command: COMMANDS.SIGNIN_COMMAND,
            data: {
                Email: username,
                Password: password,
            },
        };
        return this.postCommand(data);
    }
};