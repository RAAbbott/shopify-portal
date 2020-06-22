<template>
    <div class="card" :class="completed">
        <span class="cardTitle">
            <!-- <span>{{title}} <span class="showMoreButton">Show More</span></span> -->
            <span>{{title}}</span>
            <span><span :class="orderStatus">{{this.orderStatus}}</span> | <span class="unfulfilled">Unfulfilled</span></span>
        </span>
        <Table :products="this.products"/>
        <OrderNotes :notes="this.order.note"/>
        <span class="cardFooter">
            <span>{{this.products.length}} Product(s)</span>
            <span title="This checkbox is disabled for orders that have already been completed" :class="{'disabledText': orderComplete}">Mark For Completion<input type="checkbox" @click="markOrderForCompletion($event)" :checked="isMarkedForCompletion()" :disabled="orderComplete"></span>
        </span>
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
        },

        isMarkedForCompletion() {
            const markedOrders = this.$store.getters.ordersReadyToComplete;
            const orderId = this.order.id;

            return markedOrders.find(order => order === orderId);
        }
    },

    computed: {
        orderComplete() {
            return this.$store.getters.orders.find(order => order.id === this.order.id).completed
        },
        
        title() {
            return `${this.order.customerName} - ${this.order.dateOrdered}`
        },

        completed() {
            return {'orderCompleted' : this.orderComplete};
        },

        orderStatus() {
            return this.orderComplete ? 'complete' : 'incomplete';
        }
    }
}
</script>

<style scoped>
    .moreInfo {
        float: left;
        margin: 0 20px 0 20px;
        font-size: 14px;
        font-weight: bold;
    }

    .cardTitle {
        display: flex;
        justify-content: space-between;
        margin: 10px 20px 0 20px;
        font-size: 14px;
        font-weight: bold;
    }

    .disabledText {
        opacity: .4;
    }

    .cardFooter {
        display: flex;
        justify-content: space-between;
        margin: 10px 20px 10px 20px;
        font-size: 14px;
        /* font-weight: bold; */
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
        /* background-color: rgba(200, 233, 200, 0.178); */
        opacity: .9;
    }

    input {
        margin-left: 5px;
    }

    .incomplete {
        color: rgb(167, 167, 10);
        text-transform: capitalize;
    }

    .complete {
        color: rgba(16, 150, 16, 0.671);
        text-transform: capitalize;
    }

    .unfulfilled {
        color: rgb(167, 167, 10);
        text-transform: capitalize;
    }

    .fulfilled {
        color: rgba(16, 150, 16, 0.671);
        text-transform: capitalize;
    }

    .button {
        /* float: right; */
        /* margin: 15px 80px 0 0; */
        border: 0.5px solid rgba(0,0,0,0.1);
        border-radius: 10px;
        box-shadow: -1px 3px 5px #aaaaaa93;
        padding: 6px;
        font-size: 13px;
        cursor: pointer;
        background-color: white;
    }

    .showMoreButton {
        position: relative;
        margin-left: 5px;
        bottom: 1.5px;
        border: 0.5px solid rgba(0,0,0,0.1);
        border-radius: 10px;
        box-shadow: -1px 2px 2px #aaaaaa93;
        padding: 2px;
        font-size: 8px;
        cursor: pointer;
        background-color: white;
    }
</style>