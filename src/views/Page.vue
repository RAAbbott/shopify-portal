<template>
    <div>
        <h2 class="pageTitle">{{page}}</h2>
        <span class="quantity">{{page === 'Orders' ? cardData.length : totalProducts}} {{page}}</span>
        <div class="cardContainer">
            <div v-for="group in cardData" :key="group">
                <Card :data="group" :type="page"/>
            </div>
        </div>
    </div>
</template>

<script>
import Card from '../components/Card.vue';

export default {
    data() {
        return {
            totalProducts: 0,
        }
    },

    components: {
        Card,
    },

    methods: {
        groupBy(xs, key) {
            return xs.reduce(function(rv, x) {
                (rv[x[key]] = rv[x[key]] || []).push(x);
                return rv;
            }, {});
        },

        filterProducts(products) {
            const grouped = this.groupBy(products, 'productName')
            const data = []
            for (const group in grouped) {
                data.push({title: group, products: grouped[group]})
            }
            return data;
        },

        setNumberOfProducts(val) {
            this.totalProducts = val
        }
    },

    computed: {
        page() {
            return this.$store.state.currentPage;
        },

        cardData() {
            const orders = this.$store.state.orderList;
            console.log(orders[0]);
            if (this.page === 'Orders') {
                return orders.map(order => ({title: `${order.customerName} - ${order.customerEmail} - $${order.amount}`, products: order.products, note: order.note}));
            } else if (this.page === 'Products') { 
                const products = orders.map(order=>order.products).flat();
                this.setNumberOfProducts(products.length);
                return this.filterProducts(products);
            } else {
                console.log('Other Page');
                return [];
            }
        },

        headers() {
            return this.$store.state.tableHeaders;
        },
    },

    created() {
        this.$store.dispatch('getOrders');
    }
}
</script>

<style scoped>
    .pageTitle {
        display: flex;
        flex-wrap: wrap;
        justify-content: left;
    }

    .quantity {
        display: flex;
        flex-wrap: wrap;
        justify-content: left;
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

</style>