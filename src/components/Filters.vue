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
            this.$emit('filterValue', this.value);
            this.value = '';
        }
    }
}
</script>

<style scoped>
    .label {
        margin-right: 30px;
    }

    .filter {
        border: 0.5px solid rgba(0,0,0,0.1);
        border-radius: 10px;
        box-shadow: -1px 3px 5px #aaaaaa93;
        padding: 10px;
        font-size: 13px;
        width: 300px;
    }

    .filter:focus {
        outline: none;
    }
</style>