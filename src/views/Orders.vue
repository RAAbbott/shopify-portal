<template>
    <div class="ordersContainer">
        <div v-for="item in items" :key="item">
           <Card class="card"/>   
        </div>
    </div>
</template>

<script>
import Card from '../components/Card.vue';

export default {
    data() {
        return {
            items: ['hello', 'there', 'three', 'h', 'h', 'h']
        }
    },

    components: {
        Card
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