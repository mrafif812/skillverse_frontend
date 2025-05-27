import { defineStore } from 'pinia'
import { login, register, fetchUser, csrfCoookie, logout } from '@/api/auth'

const useAuthStore = defineStore('auth', {
  state: () => ({
    user: null,
  }),

  actions: {
    async login(creds) {
      try {
        await csrfCoookie()
        await login(creds)
        await this.fetchUser()
      } catch(error) {
        console.log('Loginn errors: ' + error);
        return error;
      }
    },

    async register(creds) {
      try {
        await register(creds);
        let response = await this.fetchUser();
        return response;
      } catch(error) {
        console.log('Error while registering user '+ error);
        return error;
      }
    },

    async logout() {
      try {
        await logout()
        this.user = null;
      } catch (error) {
        console.log('error logging out the user: ' + error)
      }
    },

    async fetchUser() {
      try {
        const response = await fetchUser()
        this.user = response.data
        console.log(response)
        return response;
      } catch (error) {
        console.log('error fetching user: ' + error)
        this.user = null;
        return error;
      }
    },

  },
})

export default useAuthStore
