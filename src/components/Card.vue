<template>
    <div class="card">
        <Table />
        <!-- <Notes /> -->
    </div>
</template>

<script>
import Table from './Table.vue';

export default {
    components: {
        Table
    },
    data() {
        return {
            productHeaders: [],
            orderHeaders: []
        }
    },

    // methods: {

    // },

    // computed: {
    //     cardClass() {
    //         return true;
    //     }
    // }
}
</script>

<style scoped>
    .card {
        width: 600px;
        height: auto;
        /* height: 250px; */
        margin-top: 20px;
        margin-bottom: 80px;
        margin-right: 50px;
        border: 0.5px solid rgba(0,0,0,0.1);
        border-radius: 10px;
        box-shadow: -1px 3px 8px #aaaaaa;
    }
</style>