export function changeDomains(newDomains) {
    return {
        type: 'CHANGE_DOMAINS',
        payload: newDomains,
    };
}

export function changeSelectedDay(newDay) {
    return {
        type: 'CHANGE_SELECTED_DAY',
        payload: newDay,
    };
}
