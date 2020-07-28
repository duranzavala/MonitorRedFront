import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';

import MonitorRedReducers from '@Redux/reducers';

export default createStore(MonitorRedReducers, applyMiddleware(thunk));
