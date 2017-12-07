import firebase from 'firebase'
// import {AsyncStorage} from 'react-native'
import {Actions} from 'react-native-router-flux'
import {
    USER_UPDATE,
    USER_CREATE,
    USER_CREATE_FAIL,
    USER_CREATE_SUCCESS,
    LOGIN_UPDATE,
    LOGIN_CREATE,
    LOGIN_FAIL,
    LOGIN_FETCH_SUCCESS,
    USER_FETCH_SUCCESS,
    USER_FETCH_SINGLE
} from '../types'

export const userUpdate = ({prop, value}) => {
    return {
        type: USER_UPDATE,
        payload: {
            prop,
            value
        }
    }
}

export const userCreate = ({name, email, password}) => {
    return (dispatch) => {
        dispatch({type: USER_CREATE})
        firebase
            .auth()
            .createUserWithEmailAndPassword(email, password)
            .then((authData) => {
                firebase
                    .database()
                    .ref(`/users`)
                    .push({name: name, email: authData.email, uid: authData.uid})
                    .then(() => {
                        dispatch({type: USER_CREATE_SUCCESS})
                        Actions.login({type: 'reset'})
                    })
            })
            .catch(error => userCreateFail(dispatch, error))
    }
}

const userCreateFail = (dispatch, error) => {
    dispatch({type: USER_CREATE_FAIL, payload: error.message})
}

export const loginUpdate = ({prop, value}) => {
    return {
        type: LOGIN_UPDATE,
        payload: {
            prop,
            value
        }
    }
}

export const loginUser = ({email, password}) => {
    return (dispatch) => {
        dispatch({type: LOGIN_CREATE})
        firebase
            .auth()
            .signInWithEmailAndPassword(email, password)
            .then(user => {
                loginUserSuccess(dispatch, user)
                Actions.dash({type: 'reset'})
            })
            .catch(error => loginUserFail(dispatch, error.message))
    }
}

const loginUserFail = (dispatch, error) => {
    dispatch({type: LOGIN_FAIL, payload: error})
}

const loginUserSuccess = (dispatch, user) => {
    dispatch({type: LOGIN_FETCH_SUCCESS, payload: user})
}

export const logOut = () => {
    return (dispatch) => {
        firebase
            .auth()
            .signOut()
            .then(() => {
                loginUserSuccess(dispatch, null)
                Actions.login({type: 'reset'})
            })
            .catch(error => loginUserFail(dispatch, error.message))
    }
}

export const usersFetch = () => {
    return (dispatch) => {
        firebase
            .database()
            .ref(`/users`)
            .on('value', snapshot => {
                dispatch({
                    type: USER_FETCH_SUCCESS,
                    payload: snapshot.val()
                })
            })
    }
}

export const userFetchById = (uid) => {
    return (dispatch) => {
        dispatch({type: USER_FETCH_SINGLE, payload: uid})
    }
}