import {days, allDomains} from '../../mook/data/dataMook.js';

const INITIAL_STATE = {
    data: {
        domains: allDomains,
        days: days,
        selectedDay: 'Monday',
    },
};

export default function reducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'CHANGE_DOMAINS':
            return {...state, data: {...state.data, domains: action.payload}};
        case 'CHANGE_SELECTED_DAY':
            return {
                ...state,
                data: {...state.data, selectedDay: action.payload},
            };
        default:
            return state;
    }
}
