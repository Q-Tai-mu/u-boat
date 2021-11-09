import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        view: "Film"
    },
    getters: {
        getView: state => {
            return state.view
        }
    },
    mutations: {
        SET_VIEW: (state, payload) => {
            state.view = payload;
        }
    }
})