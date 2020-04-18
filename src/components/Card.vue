<template>
    <div class="card">
        <span class="cardTitle">{{this.data.title}}</span>
        <!-- <span class="cardTitle">{{this.data.group}}</span> -->
        <Table :data="this.data"/>
    </div>
</template>

<script>
import Table from './Table.vue';

export default {
    props: ['data'],

    components: {
        Table
    },

    data() {
        return {
        }
    },
}
</script>

<style scoped>
    .cardTitle {
        display: flex;
        justify-content: left;
        margin: 10px 0 0 20px;
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
</style>