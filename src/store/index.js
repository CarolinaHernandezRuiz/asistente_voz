import Vue from 'vue'
import Vuex from 'vuex'
import firebase from '@/config/firebase'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    drawer: false,
    eventDrawer:true,
    config: {
      generalConfig: {
        socialLinks:{}
      },
      keysandsecurity: {},
      footerConfig: {},
    },
    items: [{
        text: 'Inicio',
        to: '/',
        icon: 'mdi-Inicio',
        meta: {
          showToolbar: true,
          showBottomNav: true
        },
      },
      {
        text: 'Caracteristicas',
        to: '/events',
        icon: 'mdi-assistant',
        meta: {
          showToolbar: true,
          showBottomNav: true
        },
      },
      {
        text: 'Funciones',
        to: '/team',
        icon: 'mdi-account-settings',
        meta: {
          showToolbar: true,
          showBottomNav: true
        },
      },
      {
        text: 'Creadores',
        to: '/speakers',
        icon: 'mdi-assistant',
        meta: {
          showToolbar: true,
          showBottomNav: false
        },
      },
      {
        text: 'Sobre Nosotros',
        to: '/about',
        icon: 'mdi-comment-alert',
        meta: {
          showToolbar: true,
          showBottomNav: true
        },
      },
      {
        text: 'Contactos',
        to: '/contact',
        icon: 'mdi-contacts',
        meta: {
          showToolbar: true,
          showBottomNav: true
        },
      },
      
      {
        text: 'Aplicaciones',
        to: '/blogs',
        icon: 'mdi-blogger',
        meta: {
          showToolbar: true,
          showBottomNav: false
        },
      }
    ]
  },
  getters: {
    links: (state) => {
      return state.items
    }
  },
  mutations: {
    setDrawer: (state, payload) => (state.drawer = payload),
    toggleDrawer: state => (state.drawer = !state.drawer),
    setEventDrawer: (state, payload) => (state.eventDrawer = payload),
    toggleEventDrawer: state => (state.eventDrawer = !state.eventDrawer),
    setGeneralConfig: (state, payload) => (state.config.generalConfig = payload),
    setKeysAndSecutityConfig: (state, payload) => (state.config.keysandsecurity = payload),
    setFooterConfig: (state, payload) => (state.config.footerConfig = payload),
  },
  modules: {},
  actions: {}

})