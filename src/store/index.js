import Vue from 'vue';
import Vuex from 'vuex';
import Axios from 'axios';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        currentPage: 'Orders',
        headers: ['Product', 'Size', 'Color', 'Custom Name'],
        productFilterName: 'Size',
        orders: [],
        products: []
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
    },

    actions: {
        getOrders({state}) {
            Axios.get('https://a0a5f65f.ngrok.io/orders').then(res => {
                console.log(res.data);
                state.orders = res.data;
                // state.orders = res.data.orders;
                // state.products = res.data.products;
            });
        }
    }
});