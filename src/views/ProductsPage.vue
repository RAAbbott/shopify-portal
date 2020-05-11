<template>
    <div>
        <PageHeader :itemLength="products.length"/>
        <div class="cardContainer">
            <div v-for="(data,i) in filteredProducts" :key="i"> 
                <ProductCard :data="data" :order="getOrderForProducts(data)"/>
            </div>
        </div>
    </div>
</template>

<script>
import ProductCard from '../components/ProductCard.vue';
import PageHeader from '../components/PageHeader.vue';
import utils from '../shared/utils';

export default {
    data() {
        return {
        }
    },

    components: {
        ProductCard,
        PageHeader
    },

    methods: {
        getOrderForProducts(data) {
            return this.orders.find(order => order.id === data.products[0].orderId);
        },

        filterBy(data) {
            const modData = data.map(obj => {
                this.filters.forEach(filter => {
                    obj.products = obj.products.filter(product => JSON.stringify(Object.values(product)).toLowerCase().includes(filter.toLowerCase()))
                });
                return obj;
            });

            return modData.filter(obj => {
                return this.filters.every(filter => filter.includes('e:') ? !JSON.stringify(Object.values(obj)).toLowerCase().includes(filter.slice(2).toLowerCase()) : JSON.stringify(Object.values(obj)).toLowerCase().includes(filter.toLowerCase()));
            });
        }
    },

    computed: {
        filteredProducts() {
            return this.filterBy(utils.groupProducts(this.products, this.$store.getters.groupBy));
        },

        products() {
            return this.$store.getters.products;
        },

        headers() {
            return this.$store.getters.headers;
        },

        options() {
            return this.$store.getters.groupByOptions;
        },

        orders() {
            return this.$store.getters.orders;
        },

        filters() {
            return this.$store.getters.filters;
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