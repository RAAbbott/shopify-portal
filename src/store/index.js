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
            Axios.get('http://localhost:3060/orders').then(res => {
                console.log(res.data);
                state.orders = res.data.orderList;
                state.products = res.data.productList;
            });
        }
    }
});