<template>
    <span>
        <label class="label" for="filterInput">Filter:</label>
        <input v-model="value" name="filterInput" id="filterInput" class="filter" @keyup.enter="filterOrders"/>
    </span>
</template>

<script>
export default {
    data() {
        return {
            value: '',
        }
    },
    methods: {
        filterOrders() {
            console.log(this.value);
        }
    }
}
</script>

<style scoped>
    .label {
        margin-right: 40px;
    }

    .filter {
       
    }
</style>