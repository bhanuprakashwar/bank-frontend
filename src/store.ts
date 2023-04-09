import { defineStore } from 'pinia'

export const useStore = defineStore({
  id: 'app',
  state: () => ({
    apiToken: ""
  }),
  actions: {
    setApikey(apiToken: string) {
        this.apiToken = apiToken
    },
  },
  getters: {
    isAuthenticated(): boolean {
      return this.apiToken !== '';
    }
  }
})
