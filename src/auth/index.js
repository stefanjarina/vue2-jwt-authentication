import { router } from '../index';
import axios from 'axios'

const API_URL = 'http://localhost:3001/'
const LOGIN_URL = API_URL + 'sessions/create'
const SIGNUP_URL = API_URL + 'users/'

export default {
  user: {
    authenticated: false
  },

  login_or_signup(action, context, creds, redirect) {
    let url = ''
    switch(action) {
      case 'login':
          url = LOGIN_URL;
          break;
      case 'signup':
          url = SIGNUP_URL;
          break;
      default:
          url = LOGIN_URL;
    }
    axios.post(url, creds)
      .then((response) => {
        localStorage.setItem('id_token', response.data.id_token)

        this.user.authenticated = true

        if(redirect) {
          router.push(redirect)
        }
      }).catch((err) => {
        context.error = err.response.data
      })
  },

  logout() {
    localStorage.removeItem('id_token')
    this.user.authenticated = false
  },

  checkAuth() {
    var jwt = localStorage.getItem('id_token')
    if(jwt) {
      this.user.authenticated = true
    } else {
      this.user.authenticated = false
    }
  },

  getAuthHeader() {
    return {
      'Authorization': 'Bearer ' + localStorage.getItem('id_token')
    }
  }
}
