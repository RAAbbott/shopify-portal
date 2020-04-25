<template>
    <div class="card">
        <span class="cardTitle">
            <span>{{this.data.title}}</span>
            <span>{{this.data.products.length}} Products</span>
        </span>
        <Table :data="this.data"/>
        <OrderNotes v-if="this.type === 'Orders'" :notes="data.note"/>
    </div>
</template>

<script>
import Table from './Table.vue';
import OrderNotes from './OrderNotes.vue';

export default {
    props: ['data', 'type'],

    components: {
        Table,
        OrderNotes
    },

    data() {
        return {
        }
    },

    computed: {

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