import {
  setAuthDetails,
  getAuthDetails,
  deleteAuthDetails
} from "../utils/store";
/**
 * Constants
 */

export const SET_USER_DETAILS = "auth/SET_USER_DETAILS";
export const USER_NOT_FOUND = "auth/USER_NOT_FOUND";
export const REMOVE_USER_DETAILS = "auth/REMOVE_USER_DETAILS";
export const LOGIN_ERROR = "auth/LOGIN_ERROR";

/**
 * Action Creators
 */
export function checkAuthStatus() {
  return async (dispatch, getState) => {
    try {
      const user = await getAuthDetails();
      console.log(user);
      const userDetails = !!user ? JSON.parse(user) : null;
      if (!!userDetails && userDetails.isLoggedIn) {
        dispatch({
          type: SET_USER_DETAILS,
          data: JSON.parse(user)
        });
      } else {
        dispatch({
          type: USER_NOT_FOUND,
          data: null
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
}

export function checkForLogin(data) {
  return async (dispatch, getState) => {
    try {
      const user = await getAuthDetails();
      const userDetails = !!user ? JSON.parse(user) : null;
      if (
        !!userDetails &&
        userDetails.username &&
        userDetails.username.toLowerCase() === data.username.toLowerCase() &&
        userDetails.password.toLowerCase() === data.password.toLowerCase()
      ) {
        console.log("asjadgsjkd");

        dispatch({
          type: SET_USER_DETAILS,
          data: JSON.parse(user)
        });
      } else {
        dispatch({
          type: LOGIN_ERROR,
          error: "credentials doesn't match"
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
}

export function setUserDetails(data) {
  return async (dispatch, getState) => {
    try {
      data.isLoggedIn = true;
      await setAuthDetails(JSON.stringify(data));
      dispatch({
        type: SET_USER_DETAILS,
        data
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function removeUserDetails() {
  return async (dispatch, getState) => {
    try {
      await deleteAuthDetails();
      dispatch({
        type: REMOVE_USER_DETAILS
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function logOut() {
  return async (dispatch, getState) => {
    try {
      const user = await getAuthDetails();
      let userDetails = !!user ? JSON.parse(user) : null;
      userDetails.isLoggedIn =false;
      dispatch({
        type: REMOVE_USER_DETAILS
      });
    } catch (error) {
      console.log(error);
    }
  };
}

/**
 * Reducer
 */
const initialState = {
  isLoggedIn: false,
  userDetails: null,
  error: null
};

export default function products(state = initialState, action) {
  switch (action.type) {
    case SET_USER_DETAILS: {
      return { ...state, isLoggedIn: true, userDetails: action.data };
    }

    case USER_NOT_FOUND: {
      return { ...state, isLoggedIn: false, userDetails: null };
    }

    case REMOVE_USER_DETAILS: {
      return { ...state, isLoggedIn: false, userDetails: null };
    }

    case LOGIN_ERROR: {
      return { ...state, isLoggedIn: false, userDetails: null, error: action.error };
    }


    default:
      return state;
  }
}
