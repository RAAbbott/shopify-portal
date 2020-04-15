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
    }
    // data() {

    // },

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
        height: 250px;
        border: 0.5px solid rgba(0,0,0,0.1);
        border-radius: 10px;
        box-shadow: -1px 3px 8px #aaaaaa;
    }
</style>