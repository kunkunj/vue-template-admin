import { defineStore } from 'pinia'

export const useThemeStore = defineStore('theme', {
  state: () => ({
    theme: '',
  }),
  actions: {
    setTheme(theme) {
      const app = document.getElementById('app')
      app.setAttribute('data-theme', theme)
      this.theme = theme
    },
  },
})