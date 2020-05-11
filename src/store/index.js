import Vue from 'vue';
import Vuex from 'vuex';
import Axios from 'axios';
import utils from '../shared/utils';
import mockData from '../shared/mockData';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        currentPage: 'Orders',
        headers: ['Product', 'Size', 'Color', 'Custom Name'],
        groupByOptions: ['Product Name', 'Size', 'Color'],
        sortByOptions: ['Date Ordered', 'Customer Name'],
        sortBy: 'dateOrdered',
        sortByDir: 'down',
        groupBy: 'productName',
        orders: [],
        products: [],
        filters: [],
    },

    getters: {
        curPage: (state) => state.currentPage,
        orders: (state) => state.orders,
        products: (state) => state.products,
        filters: (state) => state.filters,
        groupByOptions: (state) => state.groupByOptions,
        sortByOptions: (state) => state.sortByOptions,
        sortBy: (state) => state.sortBy,
        sortByDir: (state) => state.sortByDir,
        groupBy: (state) => state.groupBy,
    },

    mutations: {
        changePage(state, page) {
            state.currentPage = page;
        },
    
        changeProductCompletedState(state, payload) {
            const index = state.products.indexOf(state.products.find(product => product.id === payload.id));
            state.products[index].completed = payload.val;
        },
    
        addFilter(state, filter) {
            state.filters = [...state.filters, filter];
        },
    
        removeFilter(state, index) {
            state.filters.splice(index, 1);
        },
    
        removeAllFilters(state) {
            state.filters = [];
        },
    
        changeSortBy(state, val) {
            state.sortBy = utils.convertToCamelCase(val);
        },
    
        changeGroupBy(state, index) {
            state.groupBy = index === 0 ? 'productName' : `variant${index}`;
        },
    
        updateFilters(index) {
            if (this.page === 'Orders') {
                this.selectedGroupBy = this.convertToCamelCase(this.options[index]);
            } else {
                this.selectedGroupBy = index === 0 ? 'productName' : `variant${index}`;
            }
        },
    },

    actions: {
        getOrders({state}) {
            Axios.get('http://localhost:3060/orders').then(res => {
                state.orders = res.data.orderList;
                state.products = res.data.productList;
            }).catch(err => console.log('err: ', err));
        },
    
        getMockData({state}) {
            state.orders = mockData.orderList;
            state.products = mockData.productList;
        }
    }
});


// export const strict = false
// import Axios from 'axios';
// import utils from '~/shared/utils';
// import mockData from '~/shared/mockData';

// export const state = () => ({
//     currentPage: 'Orders',
//     headers: ['Product', 'Size', 'Color', 'Custom Name'],
//     groupByOptions: ['Product Name', 'Size', 'Color'],
//     sortByOptions: ['Date Ordered', 'Customer Name'],
//     sortBy: 'dateOrdered',
//     sortByDir: 'down',
//     groupBy: 'productName',
//     orders: [],
//     products: [],
//     filters: [],
// })

// export const mutations = {
//     changePage(state, page) {
//         state.currentPage = page;
//     },

//     changeProductCompletedState(state, payload) {
//         const index = state.products.indexOf(state.products.find(product => product.id === payload.id));
//         state.products[index].completed = payload.val;
//     },

//     addFilter(state, filter) {
//         state.filters = [...state.filters, filter];
//     },

//     removeFilter(state, index) {
//         state.filters.splice(index, 1);
//     },

//     removeAllFilters(state) {
//         state.filters = [];
//     },

//     changeSortBy(state, val) {
//         state.sortBy = utils.convertToCamelCase(val);
//     },

//     changeGroupBy(state, index) {
//         state.groupBy = index === 0 ? 'productName' : `variant${index}`;
//     },

//     updateFilters(index) {
//         if (this.page === 'Orders') {
//             this.selectedGroupBy = this.convertToCamelCase(this.options[index]);
//         } else {
//             this.selectedGroupBy = index === 0 ? 'productName' : `variant${index}`;
//         }
//     },
// }

// export const getters = {
//     curPage: (state) => state.currentPage,
//     orders: (state) => state.orders,
//     products: (state) => state.products,
//     filters: (state) => state.filters,
//     groupByOptions: (state) => state.groupByOptions,
//     sortByOptions: (state) => state.sortByOptions,
//     sortBy: (state) => state.sortBy,
//     sortByDir: (state) => state.sortByDir,
//     groupBy: (state) => state.groupBy,
// }

// export const actions = {
//     getOrders({state}) {
//         Axios.get('http://localhost:3080/orders').then(res => {
//             state.orders = res.data.orderList;
//             state.products = res.data.productList;
//         }).catch(err => console.log('err: ', err));
//     },

//     getMockData({state}) {
//         state.orders = mockData.orderList;
//         state.products = mockData.productList;
//     }
// }