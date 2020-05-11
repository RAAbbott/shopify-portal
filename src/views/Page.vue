<template>
    <div>
        <!-- <div class="pageHeader">
            <span class="leftSide">
                <span class="pageTitle">{{page}}</span>
                <span class="quantity">{{page === 'Orders' ? cardData.length : totalProducts}} {{page}}</span>
            </span>
            <Filters class="filters" @filterValue="updateFilter"/>
            <span v-for="filter in filters" :key="filter">{{filter}} </span>
        </div>
        <div class="viewFilters">
            <GroupSort class="groupSort" :page="page" :options="options" @filter="updateFilters"/>
        </div>
        <div class="cardContainer">
            <div v-for="group in cardData" :key="group">
                <Card :data="group" :type="page"/>
            </div>
        </div> -->
    </div>
</template>

<script>
// import Card from '../components/Card.vue';
// import GroupSort from '../components/GroupSort.vue';
// import Filters from '../components/Filters.vue';
// import OrdersPage from './OrdersPage.vue';
// import ProductsPage from './ProductsPage.vue';

// export default {
//     data() {
//         return {
//             totalProducts: 0,
//             options: [],
//             selectedGroupBy: 'productName',
//             selectedSortBy: 'customerName',
//             filters: [],
//         }
//     },

//     components: {
//         Card,
//         GroupSort,
//         Filters,
//         OrdersPage,
//         ProductsPage
//     },

//     methods: {
//         groupBy(xs, key) {
//             return xs.reduce(function(rv, x) {
//                 (rv[x[key]] = rv[x[key]] || []).push(x);
//                 return rv;
//             }, {});
//         },

//         groupProducts(products) {
//             const grouped = this.groupBy(products, this.selectedGroupBy)
//             const data = []
//             for (const group in grouped) {
//                 data.push({title: group, products: grouped[group]})
//             }
//             return data.sort((a, b) => (a.title > b.title) ? 1 : -1);
//         },

//         sortOrders(products) {
//             return products.sort((a,b) => a[this.selectedGroupBy] > b[this.selectedGroupBy] ? 1 : -1);
//         },

//         setNumberOfProducts(val) {
//             this.totalProducts = val
//         },

//         setOptions(val) {
//             this.options = val;
//         },

//         convertToCamelCase(str) {
//             const combined = str.split(' ').join('');
//             return `${combined.charAt(0).toLowerCase()}${combined.slice(1)}`;
//         },

//         updateFilters(index) {
//             if (this.page === 'Orders') {
//                 this.selectedGroupBy = this.convertToCamelCase(this.options[index]);
//             } else {
//                 this.selectedGroupBy = index === 0 ? 'productName' : `variant${index}`;
//             }
//         },

//         updateFilter(val) {
//             this.filters.push(val);
//         },

//         filterBy(data) {
//             if (this.page === 'Orders') {
//                 return data.filter(obj => {
//                     return this.filters.every(filter => filter.includes('e:') ? !JSON.stringify(obj).toLowerCase().includes(filter.slice(2).toLowerCase()) : JSON.stringify(obj).toLowerCase().includes(filter.toLowerCase()));
//                 });
//             } else {
//                 const modData = data.map(obj => {
//                     this.filters.forEach(filter => {
//                         obj.products = obj.products.filter(product => JSON.stringify(product).toLowerCase().includes(filter.toLowerCase()))
//                     });
//                     return obj;
//                 });

//                 return modData.filter(obj => {
//                     return this.filters.every(filter => filter.includes('e:') ? !JSON.stringify(obj).toLowerCase().includes(filter.slice(2).toLowerCase()) : JSON.stringify(obj).toLowerCase().includes(filter.toLowerCase()));
//                 });
//             }
//         }
//     },

//     computed: {
//         page() {
//             return this.$store.state.currentPage;
//         },

//         cardData() {
//             const orders = this.$store.state.orders;
//             const products = this.$store.state.products;
//             console.log(this.$store.state.orders);
//             console.log(orders);
//             if (this.page === 'Orders') {
//                 this.setOptions(['Date Ordered', 'Customer Name', 'Customer Email', 'Amount']);
//                 const sorted = this.sortOrders(orders.map(order => ({title: `${order.customerName} - ${order.customerEmail} - $${order.amount} - ${order.dateOrdered}`, customerName: order.customerName, customerEmail: order.customerEmail, amount: order.amount, dateOrdered: order.dateOrdered, products: products.filter(product => product.orderId === order.id), note: order.note})));
//                 return this.filterBy(sorted) || []; 
//             } else if (this.page === 'Products') { 
//                 this.setOptions(['Product Name', orders[0].products[0].option1, orders[0].products[0].option2, orders[0].products[0].option3]);
//                 this.setNumberOfProducts(products.length);
//                 const grouped = this.groupProducts(products);
//                 console.log(grouped);
//                 return this.filterBy(grouped);
//             } else {
//                 console.log('Other Page');
//                 return [];
//             }
//         },

//         headers() {
//             return this.$store.state.tableHeaders;
//         },
//     },

//     created() {
//         this.$store.dispatch('getOrders');
//     }
// }
</script>

<style scoped>
    /* .pageHeader {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-between;
        align-items: center;
        margin-top: 15px;
        margin-bottom: 15px;
    }

    .pageTitle {
        font-weight: bold;
        font-size: 30px;
    }

    .quantity {
        margin-left: 40px;
    }

    .cardContainer {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: left;
        height: 100%;
        width: 100%;
        overflow: auto;
    }

    .viewFilters {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
    }

    .filters {
        margin-bottom: 20px;
    } */

</style>