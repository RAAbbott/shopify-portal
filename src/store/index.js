import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        currentPage: 'Orders',
        orderTableHeaders: ['Product', 'Size', 'Color', 'Custom']
    },

    getters: {
        curPage(state) {
            return state.currentPage;
        }
    },

    mutations: {
        changePage(state, page) {
            state.currentPage = page;
        }
    }
});