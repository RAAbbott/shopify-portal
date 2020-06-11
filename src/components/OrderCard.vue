<template>
    <div class="card">
        <span class="cardTitle">
            <span>{{title}}</span>
            <span>Complete Order<input type="checkbox" @click="markOrderForCompletion($event)" :checked="isMarkedForCompletion()"></span>
        </span>
        <Table :products="this.products"/>
        <OrderNotes :notes="this.order.note"/>
    </div>
</template>

<script>
import Table from './Table.vue';
import OrderNotes from './OrderNotes.vue';

export default {
    props: ['order', 'products'],

    components: {
        Table,
        OrderNotes
    },

    data() {
        return {
        }
    },

    methods: {
        markOrderForCompletion(e) {
            this.$store.commit('updateReadyOrders', {id: this.order.id, val: e.target.checked});
            this.$store.dispatch('isMarkedForCompletion', 'param');
        },

        isMarkedForCompletion() {
            const markedOrders = this.$store.getters.ordersReadyToComplete;
            const orderId = this.order.id;

            console.log('is Marked? ', markedOrders.find(order => order === orderId));

            return markedOrders.find(order => order === orderId);
        }
    },

    computed: {
        title() {
            return `${this.order.customerName} - ${this.order.dateOrdered} - ${this.products.length} Products`
        }
    }
}
</script>

<style scoped>
    .cardTitle {
        display: flex;
        justify-content: space-between;
        margin: 10px 20px 0 20px;
        font-size: 14px;
        font-weight: bold;
    }

    .card {
        width: 600px;
        height: auto;
        margin-top: 20px;
        margin-bottom: 80px;
        margin-right: 50px;
        border: 0.5px solid rgba(0,0,0,0.1);
        border-radius: 10px;
        box-shadow: -1px 3px 8px #aaaaaa;
    }

    .orderCompleted {
        background-color: rgb(200, 233, 200);
        opacity: .9;
    }
</style>