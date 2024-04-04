import { createVuetify } from "vuetify";
import { aliases, mdi } from 'vuetify/iconsets/mdi'
import '@mdi/font/css/materialdesignicons.css' // Ensure you are using css-loader
import * as components from "vuetify/components"
import * as directives from "vuetify/directives"


const theme = {
  dark: true,
  colors: {
    background: '#022C43',
    surface: '#FFD700',
    primary: '#053F5E',
    'primary-darken-1': '#FFFFFF',
    secondary: '#115173',
    'secondary-darken-1': '#FFFFFF',
    error: '#B00020',
    info: '#2196F3',
    success: '#4CAF50',
    warning: '#FB8C00',
  }
}


export default defineNuxtPlugin((nuxt) => {
  const vuetify = createVuetify({
    ssr: true,
    components,
    directives,
    theme: {
      defaultTheme: 'theme',
      themes: {
        theme,
      }
    },  
    icons: {
      defaultSet: 'mdi',
      aliases,
      sets: {
        mdi,
      }
    },
  });

  nuxt.vueApp.use(vuetify);
});