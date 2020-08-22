import BaseService from '@Services/base.service';
import { AUTHENTICATE_CONTROLLER, AUTHENTICATE_COMMAND } from '@Utilities/constants/commands.constants';

export default class LoginService extends BaseService {
    async login(username, password) {
        const data = {
            controller: AUTHENTICATE_CONTROLLER,
            command: AUTHENTICATE_COMMAND,
            data: {
                Email: username,
                Password: password,
            },
        };
        return this.postCommand(data);
    }
};