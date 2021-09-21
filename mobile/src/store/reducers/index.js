import {combineReducers} from 'redux';

import domainsReducer from './domains.js';

export default combineReducers({
    domains: domainsReducer,
});
