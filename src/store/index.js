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
        ordersReadyToComplete: []
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
        ordersReadyToComplete: (state) => state.ordersReadyToComplete,
    },

    mutations: {
        changePage(state, page) {
            state.currentPage = page;
        },
    
        changeProductCompletedState(state, payload) {
            const completedProducts = JSON.parse(localStorage.getItem('completedProducts'));
            const index = state.products.indexOf(state.products.find(product => product.id === payload.id));
            state.products[index].completed = payload.val;
            if (payload.val) {
                localStorage.setItem('completedProducts', JSON.stringify([...completedProducts, state.products[index].id]));
            } else {
                completedProducts.splice(completedProducts.indexOf(state.products[index].id), 1);
                localStorage.setItem('completedProducts', JSON.stringify(completedProducts));
            }
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

        updateReadyOrders(state, data) {
            const id = data.id;
            const arr = state.ordersReadyToComplete;
            if (data.val) {
                state.ordersReadyToComplete.push(id);
            } else {
                state.ordersReadyToComplete.splice(arr.indexOf(id), 1);
            }

            localStorage.setItem('markedOrders', JSON.stringify(state.ordersReadyToComplete));
        }
    },

    actions: {
        getOrders({state}) {
            const localStorageData = (state) => {
                if (localStorage.getItem('completedProducts')) {
                    state.products.forEach(product => product.completed = JSON.parse(localStorage.getItem('completedProducts')).includes(product.id));
                } else {
                    localStorage.setItem('completedProducts', JSON.stringify(state.products.filter(product => product.completed).map(product => product.id)));
                }

                if (localStorage.getItem('markedOrders')) {
                    state.ordersReadyToComplete = JSON.parse(localStorage.getItem('markedOrders'));
                } else {
                    localStorage.setItem('markedOrders', JSON.stringify(state.ordersReadyToComplete));
                }
            }

            Axios.get('http://localhost:3060/orders').then(res => {
                state.orders = res.data.orderList;
                state.products = res.data.productList;
                localStorageData(state);
            }).catch(err => console.log('err: ', err));
        },
    
        getMockData({state}) {
            state.orders = mockData.orderList;
            state.products = mockData.productList;
        },

        completeOrders({state}) {
            Axios.post('http://localhost:3060/completeOrders', {orderIds: state.ordersReadyToComplete}).then(() => state.ordersReadyToComplete = []).catch(err => console.log(err));
        }
    }
});