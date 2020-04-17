<template>
    <div>
        <h2 class="pageTitle">{{page}}</h2>
        <div class="cardContainer">
            <div v-for="order in orders" :key="order.id">
                <Card />   
            </div>
        </div>     
    </div>
</template>

<script>
import Card from '../components/Card.vue';

export default {
    data() {
        return {
            orders: this.$store.state.orderList
        }
    },
    components: {
        Card,
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
        
    }

    .cardContainer {
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        justify-content: left;
        height: 900px;
        width: 100%;
    }

</style>