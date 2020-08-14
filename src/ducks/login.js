import { createReducer } from 'redux-act'
import * as app from './app'
import { message } from 'antd'
import { notification } from 'antd'
export const REDUCER = 'login'
export const SIGNUP = 'signup'
export const submit = ({ username, password }: { username: string, password: string }) => (
  dispatch: Function,
  getState: Function,
) => {
  dispatch(app.addSubmitForm(REDUCER))

  let isLoggined = app.login(username, password, dispatch)

  if (isLoggined) {
    dispatch(app.deleteSubmitForm(REDUCER))
  } else {
    dispatch(app.deleteSubmitForm(REDUCER))
    message.error('Invalid username or password')
  }
}

export const signup = ({
  username,
  password,
  useremail,
  lastname,
  firstname,
}: {
  username: string,
  password: string,
  useremail: string,
  confirmpassword: string,
  lastname: string,
  firstname: string,
}) => (dispatch: Function, getState: Function) => {
  dispatch(app.addSubmitForm(SIGNUP))

  let isSignup = app.signup(username, password, useremail, firstname, lastname, dispatch)

  if (isSignup) {
    dispatch(app.deleteSubmitForm(SIGNUP))
  } else {
    dispatch(app.deleteSubmitForm(SIGNUP))
    message.error('Invalid username or password')
  }
}

export const createclient = ({ clientid, name }: { clientid: string, name: string }) => (
  dispatch: Function,
  getState: Function,
) => {
  let iscreated = app.createclient(clientid, name)
  if (!iscreated.error) {
    message.error('iscreated.error_description')
  }
}
const initialState = {}
export default createReducer({}, initialState)
