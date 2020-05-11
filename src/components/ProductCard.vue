<template>
    <div class="card">
        <span class="cardTitle">
            <span>{{title}}</span>
            <span>{{this.data.products.length}} Products</span>
        </span>
        <Table :products="this.data.products"/>
    </div>
</template>

<script>
import Table from './Table.vue';

export default {
    props: ['order', 'data'],

    components: {
        Table,
    },

    data() {
        return {
        }
    },

    computed: {
        title() {
            return this.data.title;
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