import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        currentPage: 'Orders',
        ordersTableHeaders: ['Product', 'Size', 'Color', 'Custom'],
        orderList: [
            {id: 1, productName: 'Free As A Bird', productSize: '6 Months', productColor: 'Natural', custom: ''},
            {id: 2, productName: 'All Of God\'s Grace', productSize: '6 Months', productColor: 'Natural', custom: ''},
            {id: 3, productName: 'Custom Name Onesie', productSize: '6 Months', productColor: 'Natural', custom: 'Archert'},
            {id: 4, productName: 'Free As A Bird', productSize: '6 Months', productColor: 'Natural', custom: ''},
            {id: 5, productName: 'Free As A Bird', productSize: '6 Months', productColor: 'Natural', custom: ''},
            {id: 6, productName: 'Free As A Bird', productSize: '6 Months', productColor: 'Natural', custom: ''},
        ]
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