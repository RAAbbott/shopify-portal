<template>
    <div class="bar">
        <div class="container">
            <span class="nameItem" v-for="order in selectedOrders" :key="order.id">{{order.name}}</span>
        </div>
        <span class="completeButton" @click="completeOrders()">Complete Orders</span>
    </div>
</template>

<script>
export default {
    methods: {
        completeOrders() {
            this.$store.dispatch('completeOrders');
        }
    },

    computed: {
        selectedOrders() {
            const ids = this.$store.getters.ordersReadyToComplete;
            const orders = this.$store.getters.orders;
            return orders.map(order => ({id: order.id, name: order.customerName})).filter(order => Array.from(ids).includes(order.id));
        }
    }
}
</script>

<style scoped>
    .bar {
        /* Firefox */
        width: -moz-calc(100% - 210px);
        /* WebKit */
        width: -webkit-calc(100% - 210px);
        /* Opera */
        width: -o-calc(100% - 210px);
        /* Standard */
        width: calc(100% - 210px);
        height: 120px;
        background-color: #363E90;
        position: fixed;
        bottom: 0;
        left: 213px;
        z-index: 1000;
        border-top-style: solid;
        border-top-width: .5px;
        border-top-color: rgba(0,0,0,0.2);
        box-shadow: 0 3px 8px #727272;
        /* display: flex; */
        /* justify-content: space-between; */
        overflow: hidden;
    }

    .container {
        display: flex;
        flex-flow: row;
        flex-wrap: wrap;
        /* Firefox */
        width: -moz-calc(100% - 220px);
        /* WebKit */
        width: -webkit-calc(100% - 220px);
        /* Opera */
        width: -o-calc(100% - 220px);
        /* Standard */
        width: calc(100% - 350px);
        height: 120px;
        overflow-y: scroll;
    }

    .header span.title {
        font-size: 30px;
        font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
        color: white;
        position: fixed;
        left: 40px;
        top: 10px
    }

    .nameItem {
        border: 0.5px solid rgba(0,0,0,0.1);
        border-radius: 10px;
        box-shadow: -1px 3px 5px #aaaaaa93;
        padding: 8px;
        font-size: 13px;
        background-color: white;
        margin: 8px;
        height: 16px;
    }

    .completeButton {
        position: fixed;
        right: 0;
        bottom: 45px;
        margin-right: 80px;
        border: 0.5px solid rgba(0,0,0,0.1);
        border-radius: 10px;
        box-shadow: -1px 3px 5px #aaaaaa93;
        padding: 8px;
        font-size: 13px;
        cursor: pointer;
        background-color: rgb(200, 233, 200);
    }
</style>