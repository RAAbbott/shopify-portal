import Vue from 'vue';
import Vuex from 'vuex';
// import Axios from 'axios';
import utils from '../shared/utils';
import mockData from '../shared/mockData';
import { EventBus as bus } from '../shared/eventBus';

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

        changeOrderCompletedState(state, orderIds) {
            const storedCompleted = [];
            state.orders.forEach(order => {
                order.completed = orderIds.includes(order.id) || storedCompleted.includes(order.id);
                if (order.completed && !storedCompleted.includes(order.id)) {
                    storedCompleted.push(order.id);
                }
            });

            // localStorage.setItem('completedOrders', JSON.stringify(storedCompleted));
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
        },
    },

    actions: {
        getOrders({state}) {
            // This function usually hits the backend in order to get the data from the user's shopify store. For purposes of this demo,
            // I'm just using some local data stored in the front end so the functionality can still be mimicked.
            
            // const localStorageData = (state) => {
            //     if (localStorage.getItem('completedProducts')) {
            //         state.products.forEach(product => product.completed = JSON.parse(localStorage.getItem('completedProducts')).includes(product.id));
            //     } else {
            //         localStorage.setItem('completedProducts', JSON.stringify(state.products.filter(product => product.completed).map(product => product.id)));
            //     }

            //     if (localStorage.getItem('markedOrders')) {
            //         state.ordersReadyToComplete = JSON.parse(localStorage.getItem('markedOrders'));
            //     } else {
            //         localStorage.setItem('markedOrders', JSON.stringify(state.ordersReadyToComplete));
            //     }

            //     state.orders.forEach(order => {
            //         order.completed = order.tags.includes('EOM-READY');
            //     });

            //     localStorage.setItem('completedOrders', JSON.stringify(state.orders.filter(order => order.completed).map(order => order.id)));
            // }

            state.orders = mockData.orderList;
            state.products = mockData.productList;

            // Axios.get('http://localhost:3060/orders').then(res => {
            //     state.orders = res.data.orderList;
            //     state.products = res.data.productList;
            //     localStorageData(state);
            // }).catch(err => console.log('err: ', err));
        },
    
        getMockData({state}) {
            state.orders = mockData.orderList;
            state.products = mockData.productList;
        },

        completeOrders({state, commit}) {
            // This would make a call to the backend and complete the orders on the shopify store.

            commit('changeOrderCompletedState', state.ordersReadyToComplete);
            state.ordersReadyToComplete = [];
            bus.$emit('showSnackbar', true);

            // Axios.post('http://localhost:3060/completeOrders', {orderIds: state.ordersReadyToComplete}).then(response => {
            //     console.log(response);
            //     commit('changeOrderCompletedState', state.ordersReadyToComplete);
            //     state.ordersReadyToComplete = [];
            //     localStorage.setItem('markedOrders', JSON.stringify([]));
            //     bus.$emit('showSnackbar', true);
            // }).catch(err => {
            //     console.log(err);
            //     bus.$emit('showSnackbar', false);
            // });
        }
    }
});