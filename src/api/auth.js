import api from './api.js'

export function csrfCoookie(creds) {
  return api.get('/sanctum/csrf-cookie', creds)
}
export function login(creds) {
  return api.post('/login', creds)
}

export function register(creds) {
  return api.post('/register', creds, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  })
}

export function fetchUser() {
  return api.get('api/user')
}

export function logout() {
  return api.post('logout')
}
