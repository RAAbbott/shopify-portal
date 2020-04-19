import Vue from 'vue';
import Vuex from 'vuex';
import Axios from 'axios';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        currentPage: 'Orders',
        headers: ['Product', 'Size', 'Color', 'Custom'],
        productFilterName: 'Size',
        completedProducts: [],
        completedOrders: [],
        orderList: [],
        // orderList: [
        //     {id: 1, customerName: 'Alex Abbott', customerEmail: 'test@test.com', amount: '68.30', products: [
        //         {productId: 1, productName: 'Free As A Bird', option1: '6 Months', option2: 'Natural', custom: '-', orderId: 1},
        //         {productId: 2, productName: 'Free As A Bird', productSize: '6 Months', productColor: 'Natural', custom: '-', orderId: 1},
        //         {productId: 3, productName: 'Custom Name Onesie', productSize: '6 Months', productColor: 'Natural', custom: 'Archer', orderId: 1},
        //         {productId: 3, productName: 'Custom Name Onesie', productSize: '6 Months', productColor: 'Natural', custom: 'Archer', orderId: 1},
        //         {productId: 3, productName: 'Custom Name Onesie', productSize: '6 Months', productColor: 'Natural', custom: 'Archer', orderId: 1},
        //         {productId: 3, productName: 'Custom Name Onesie', productSize: '6 Months', productColor: 'Natural', custom: 'Archer', orderId: 1},
        //     ]},
        //     {id: 2, customerName: 'Alex Abbott', customerEmail: 'test@test.com', amount: '34.30', products: [
        //         {productId: 1, productName: 'All of God\'s Grace', productSize: 'Newborn', productColor: 'Grey', custom: '-', orderId: 2},
        //         {productId: 2, productName: 'Take Me To DisneyLand', productSize: '6 Months', productColor: 'Natural', custom: '-', orderId: 2},
        //         {productId: 3, productName: 'Custom Name Onesie', productSize: '12 Months', productColor: 'Natural', custom: 'Salem', orderId: 2},
        //     ]},
        //     {id: 3, customerName: 'Alex Abbott', customerEmail: 'test@test.com', amount: '109.20', products: [
        //         {productId: 1, productName: 'Be Kind - Flower', productSize: 'Newborn', productColor: 'Grey', custom: '-', orderId: 3},
        //         {productId: 2, productName: 'Be Kind - Flower', productSize: '6 Months', productColor: 'Natural', custom: '-', orderId: 3},
        //         {productId: 3, productName: 'Made With Love', productSize: '6 Months', productColor: 'Natural', custom: '-', orderId: 3},
        //     ]},
        //     {id: 4, customerName: 'Alex Abbott', customerEmail: 'test@test.com', amount: '3.50', products: [
        //         {productId: 1, productName: 'Be Kind', productSize: '6 Months', productColor: 'Grey', custom: '-'},
        //         {productId: 2, productName: 'Be Kind - Flower', productSize: '6 Months', productColor: 'Natural', custom: '-', orderId: 4},
        //         {productId: 3, productName: 'Made With Love', productSize: '6 Months', productColor: 'Natural', custom: '-', orderId: 4},
        //         {productId: 3, productName: 'Made With Love', productSize: '6 Months', productColor: 'Natural', custom: '-', orderId: 4},
        //         {productId: 3, productName: 'Made With Love', productSize: '6 Months', productColor: 'Natural', custom: '-', orderId: 4},
        //     ]},
        //     {id: 5, customerName: 'Alex Abbott', customerEmail: 'test@test.com', amount: '54.43', products: [
        //         {productId: 1, productName: 'Mama\'s Sunshine', productSize: 'Newborn', productColor: 'Grey', custom: '-', orderId: 5},
        //         {productId: 2, productName: 'Be Kind - Flower', productSize: '6 Months', productColor: 'Natural', custom: '-', orderId: 5},
        //         {productId: 3, productName: 'Custom Name Onesie', productSize: '12 Months', productColor: 'Natural', custom: 'Baby Baby', orderId: 5},
        //     ]},
        // ]
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
                console.log(res);
                state.orderList = res.data
            });
        }
    }
});