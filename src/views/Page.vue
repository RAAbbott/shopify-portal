<template>
    <div>
        <h2 class="pageTitle">{{page}}</h2>
        <div class="routerView">
            <Orders />      
        </div>
        
    </div>
</template>

<script>
// import OrderCard from '../components/OrderCard.vue';
import Orders from '../views/Orders.vue';

export default {
    components: {
        // OrderCard,
        Orders
    },

    computed: {
        page() {
            return this.$store.state.currentPage;
        }
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
        justify-content: left;
        height: 800px;
        width: 100%;
    }

</style>