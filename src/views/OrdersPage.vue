<template>
    <div>
        <PageHeader :itemLength="orders.length"/>
        <div class="cardContainer">
            <div v-for="order in orders" :key="order.id"> 
                <OrderCard :order="order" :products="productsForOrder(order)"/>
            </div>
        </div>
    </div>
</template>

<script>
import OrderCard from '../components/OrderCard.vue';
import PageHeader from '../components/PageHeader.vue'

export default {
    data() {
        return {
            options: ['Date Ordered', 'Customer Name'],
            selectedSortByDir: 'down'
        }
    },

    components: {
        OrderCard,
        PageHeader
    },

    methods: {
        productsForOrder(order) {
            const ids = order.products;
            const products = this.products.slice();
            return products.filter(product => ids.find(id => id == product.id));
        },

        sortOrders(orders) {
            return orders.sort((a,b) => a[this.selectedSortBy] > b[this.selectedSortBy] ? 1 : -1);
        },

        sortProducts(order) {
            return order.sort((a,b) => a > b ? 1 : -1);
        },

        getFilteredData(orders) {
            return orders.filter(order => {
                const modOrder = Object.assign({}, order);
                modOrder.products = this.productsForOrder(order).map(product => Object.values(product));
                return this.filters.every(filter => filter.includes('e:') ? !JSON.stringify(Object.values(modOrder)).toLowerCase().includes(filter.slice(2).toLowerCase()) : JSON.stringify(Object.values(modOrder)).toLowerCase().includes(filter.toLowerCase()));
            });
        },
    },

    computed: {
        orders() {
            const orders = this.$store.getters.orders;
            return this.sortOrders(this.getFilteredData(orders)) || []; 
        },

        products() {
            return this.$store.getters.products;
        },

        filters() {
            return this.$store.getters.filters;
        },

        selectedSortBy() {
            return this.$store.getters.sortBy;
        }
    },
}
</script>

<style scoped>
    .cardContainer {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: left;
        height: 100%;
        width: 100%;
        overflow: auto;
    }
</style>