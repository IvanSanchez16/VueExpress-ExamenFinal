import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    carros: []
  },
  mutations: {
    SET_CARROS(state, carros){
      state.carros = carros;
    }
  },
  actions: {
    setCarros({commit}){
      axios.get('http://localhost:3000/')
      .then( response => {
        commit('SET_CARROS', response.data);
      })
    },
    crearCarros({commit}, {params, onComplete, onError}){
      axios.post('http://localhost:3000/', params)
      .then(onComplete)
      .catch(onError)
    }
  },
  modules: {
  }
})
