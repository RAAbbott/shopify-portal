<template>
    <div>
        <h2 class="pageTitle">{{page}}</h2>
        <div class="cardContainer">
            <div v-for="group in cardData" :key="group">
                <Card :data="group"/>
            </div>
        </div>
    </div>
</template>

<script>
import Card from '../components/Card.vue';

export default {
    data() {
        return {
            
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
            const grouped = this.groupBy(products, 'custom')
            const data = []
            for (const group in grouped) {
                data.push({title: group, products: grouped[group]})
            }
            return data;
        }
    },

    computed: {
        page() {
            return this.$store.state.currentPage;
        },

        cardData() {
            const orders = this.$store.state.orderList;
            if (this.page === 'Orders') {
                return orders.map(order => ({title: `${order.customerName} - ${order.customerEmail} - $${order.amount}`, products: order.products}));
            } else { 
                const products = orders.map(order=>order.products).flat();
                return this.filterProducts(products);
            }
        },

        headers() {
            return this.$store.state.tableHeaders;
        },
    }
}
</script>

<style scoped>
    .pageTitle {
        display: flex;
        flex-wrap: wrap;
        justify-content: left;
    }

    .routerView {
        display: flex;
        
    }

    .cardContainer {
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        justify-content: left;
        height: 90vh;
        width: 100%;
    }

</style>