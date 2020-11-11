import React, { useReducer } from 'react';
import AlertContext from './alertContext';
import AlertReducer from './alertReducer';
import { SET_ALERT, REMOVE_ALERT } from '../types';

const AlertState = ({ children }) => {
  const initialState = null;

  const [state, dispatch] = useReducer(AlertReducer, initialState);

  const setAlert = (msg, type) => {
    const alertTimeout = 3000;
    dispatch({ type: SET_ALERT, payload: { msg, type } });
    setTimeout(() => dispatch({ type: REMOVE_ALERT }), alertTimeout);
  };

  return (
    <AlertContext.Provider
      value={{
        alert: state,
        setAlert
      }}
    >
      {children}
    </AlertContext.Provider>
  );
};

export default AlertState;
