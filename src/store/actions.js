export const setCheckBoxes = (checkbox) => ({ type: 'SET_CHECKBOXES', checkbox });
export const loadMessage = (value) => ({ type: 'LOAD_MESSAGE', value });
export const setLoading = (flag) => ({ type: 'SET_LOADING', flag });
export const addPages = () => ({ type: 'ADD_PAGES' });
export const setFilterMode = (mode) => ({ type: 'SET_FILTER_MODE', mode });
export const searchIdLoad = (searchId) => ({ type: 'SEARCH_ID_LOAD', searchId });
export const loadTickets = (tickets) => ({ type: 'LOAD_TICKETS', tickets });

export const setSuccess = (flag) => ({ type: 'SET_SUCCESS', flag });
