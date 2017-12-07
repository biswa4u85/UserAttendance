import { USER_UPDATE, USER_CREATE, USER_CREATE_FAIL, USER_CREATE_SUCCESS, LOGIN_UPDATE, LOGIN_CREATE, LOGIN_FAIL, LOGIN_SAVE_SUCCESS, LOGIN_FETCH_SUCCESS, USER_FETCH_SUCCESS, USER_FETCH_SINGLE } from '../types';
const INITIAL_STATE = {
    name: '',
    email: '',
    password: '',
    user: undefined,
    users: [],
    error: '',
    loading: false
};
export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case USER_UPDATE:
            return Object.assign({}, state, { error: '', [action.payload.prop]: action.payload.value });
        case USER_CREATE:
            return Object.assign({}, state, { loading: true, error: '' });
        case USER_CREATE_FAIL:
            return Object.assign({}, state, { loading: false, error: action.payload });
        case USER_CREATE_SUCCESS:
            return Object.assign({}, state, INITIAL_STATE);
        case LOGIN_UPDATE:
            return Object.assign({}, state, { [action.payload.prop]: action.payload.value });
        case LOGIN_CREATE:
            return Object.assign({}, state, { loading: true, error: '' });
        case LOGIN_FAIL:
            return Object.assign({}, state, { loading: false, error: action.payload });
        case LOGIN_SAVE_SUCCESS:
            return INITIAL_STATE;
        case LOGIN_FETCH_SUCCESS:
            return Object.assign({}, state, INITIAL_STATE, { user: action.payload });
        case USER_FETCH_SUCCESS:
            return Object.assign({}, state, { users: action.payload });
        case USER_FETCH_SINGLE:
            return Object.assign({}, state, { user: state.users[action.payload] });
        default:
            return state;
    }
};
//# sourceMappingURL=AuthReducer.js.map