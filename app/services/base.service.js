import axios from 'axios';

import {
    BASE_URL,
    GLOBAL_ERROR_MESSAGE,
    REQUEST_METHODS,
} from '@Utilities/constants/data.constants';
import SessionStorageController from '@Controllers/session.storage.controller';

class BaseService {
    async postCommand(data) {
        return this.CustomCommand(REQUEST_METHODS.POST, data);
    }

    async CustomCommand(method, { controller, command, data }, customToken) {
        const token = customToken || (await this.getToken());
        try {
            const response = await fetch(`${BASE_URL}/${controller}/${command}`, {
                method,
                headers: {
                    Accept: '*/*',
                    'x-access-token': token,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            }).then(async (value) => {
                const json = await value.json();
                console.log('>>>>>> json:', json);

                return {
                    success: true,
                    status: value.status,
                    result: json,
                }
            }).catch((error) => ({
                success: false,
                code: error,
                message: `${GLOBAL_ERROR_MESSAGE}: ${error.message}`,
            }));

            if (response.status === 200) {
                return response.result;
            }

            const { result } = response;

            let resultError = {
                code: result.status,
                message: this.formatErrorMessage(result.detail),
                responseStatus: result.title,
                success: false,
            };

            return resultError;
        } catch (error) {
            return {
                success: false,
                code: error.code,
                message: `${GLOBAL_ERROR_MESSAGE}: ${error}`,
            };
        }
    }

    async getToken() {
        const sessionStorageController = new SessionStorageController();

        try {
            const tokenData = await sessionStorageController.load('token');
            return Promise.resolve({ hasToken: !(tokenData !== null || tokenData !== undefined), tokenData });
        } catch (error) {
            return Promise.resolve({ hasToken: false });
        }
    }

    formatErrorMessage = (message) => message.join(', ');
};

export default BaseService;