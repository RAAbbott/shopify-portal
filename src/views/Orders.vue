<template>
    <div class="ordersContainer">
        <div v-for="item in items" :key="item">
           <OrderCard class="card"/>   
        </div>
    </div>
</template>

<script>
import OrderCard from '../components/OrderCard.vue';

export default {
    data() {
        return {
            items: ['hello', 'there', 'three', 'h', 'h', 'h']
        }
    },

    components: {
        OrderCard
    },

    methods: {

    },

    computed: {

    }
}
</script>

<style scoped>
    .ordersContainer {
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
    }

    .card {
        margin-top: 20px;
        margin-bottom: 80px;
        margin-right: 50px;
    }
</style>