import Storage from 'react-native-storage';
import AsyncStorage from '@react-native-community/async-storage';
import Constants from '@Utilities/constants/session.constants';

export default class SessionStorageController {
    constructor() {
        this.sessionsStorage = new Storage({
            size: Constants.ASYNC_STORAGE_DEFAULT.MAXIMUM_CAPACITY,
            storageBackend: AsyncStorage,
            defaultExpires: null,
            enableCache: true,
        });
    }

    save = async (type, data) => this.sessionsStorage.save({
        key: type,
        data,
    });

    load = async (type) => this.sessionsStorage.load({
        key: type,
        syncInBackground: false,
        autoSync: false,
    });
}
