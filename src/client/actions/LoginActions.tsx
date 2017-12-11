import firebase from "firebase";
import { Actions } from "react-native-router-flux";
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
} from "../types";

import AWS, { userPool } from "../AWS";

export const userUpdate = ({ prop, value }) => {
  return {
    type: USER_UPDATE,
    payload: {
      prop,
      value
    }
  };
};

export const userCreate = ({ name, email, password }) => {
  return dispatch => {
    dispatch({ type: USER_CREATE });

    let attributeList = [];
    let attributeName = new AWS.CognitoIdentityServiceProvider.CognitoUserAttribute(
      {
        Name: "name",
        Value: name
      }
    );
    attributeList.push(attributeName);

    userPool.signUp(email, password, attributeList, null, function(
      err,
      result
    ) {
      if (err) {
        userCreateFail(dispatch, err);
        return;
      }
      console.log(result);
      dispatch({ type: USER_CREATE_SUCCESS });
      Actions.conform({ type: "reset" });
    });
  };
};

const userCreateFail = (dispatch, error) => {
  dispatch({ type: USER_CREATE_FAIL, payload: error.message });
};

export const conformUser = ({ confirmation }) => {
  return dispatch => {
    dispatch({ type: LOGIN_CREATE });

    const userData = { Username: "biswa@techlift.in", Pool: userPool };
    const cognitoUser = new AWS.CognitoIdentityServiceProvider.CognitoUser(
      userData
    );

    cognitoUser.confirmRegistration(confirmation, true, (err, result) => {
      if (err) {
        console.log("Error at confirmRegistration ", err);
        loginUserFail(dispatch, "Username or Password Worng");
        return;
      }
      console.log("result", result);
      Actions.dash({ type: "reset" });
    });
  };
};

export const loginUpdate = ({ prop, value }) => {
  return {
    type: LOGIN_UPDATE,
    payload: {
      prop,
      value
    }
  };
};

export const loginUser = ({ email, password }) => {
  return dispatch => {
    dispatch({ type: LOGIN_CREATE });
    const authenticationData = { Username: email, Password: password };
    const authenticationDetails = new AWS.CognitoIdentityServiceProvider.AuthenticationDetails(
      authenticationData
    );
    const userData = { Username: email, Pool: userPool };
    const cognitoUser = new AWS.CognitoIdentityServiceProvider.CognitoUser(
      userData
    );

    cognitoUser.authenticateUser(authenticationDetails, {
      onSuccess: result => {
        loginUserSuccess(dispatch, result);
        console.log(userPool.getCurrentUser());
        console.log(result);
        Actions.dash({ type: "reset" });
      },
      onFailure: err => {
        console.log(err);
        loginUserFail(dispatch, "Username or Password Worng");
      }
    });
  };
};

const loginUserFail = (dispatch, error) => {
  dispatch({ type: LOGIN_FAIL, payload: error });
};

const loginUserSuccess = (dispatch, user) => {
  dispatch({ type: LOGIN_FETCH_SUCCESS, payload: user });
};

export const logOut = () => {
  return dispatch => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        loginUserSuccess(dispatch, null);
        Actions.login({ type: "reset" });
      })
      .catch(error => loginUserFail(dispatch, error.message));
  };
};

export const usersFetch = () => {
  return dispatch => {
    firebase
      .database()
      .ref(`/users`)
      .on("value", snapshot => {
        dispatch({
          type: USER_FETCH_SUCCESS,
          payload: snapshot.val()
        });
      });
  };
};

export const userFetchById = uid => {
  return dispatch => {
    dispatch({ type: USER_FETCH_SINGLE, payload: uid });
  };
};
