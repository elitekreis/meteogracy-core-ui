import axios from 'axios'
const apiUrl = 'http://localhost:4000'

export const signup = ({ username, password, useremail, firstname, lastname }) =>
  axios.post(apiUrl + '/api/v1.0/auth/register', {
    user: {
      username,
      password,
      useremail,
      firstname,
      lastname,
    },
  })

export const login = ({ username, password }) =>
  axios.post(apiUrl + '/api/v1.0/auth/login', {
    username,
    password,
  })

export const logout = (accesstocken, refreshtocken) =>
  axios.post(apiUrl + '/api/v1.0/auth/logout', {
    accesstocken: accesstocken,
    refreshtocken: refreshtocken,
  })

export const getclient = () => axios.post(apiUrl + '/api/v1.0/auth/getclient', {})

export const createclient = (clientid, name) =>
  axios.post(apiUrl + '/api/v1.0/auth/createclient', { clientid, name })
// export const checkLoginStatus = () => axios.get('/api/v1.0/auth/check');
// export const logout = () => axios.post('/api/v1.0/auth/logout');
