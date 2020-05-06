<template>
    <div class="row" :class="{completed : completed}" @click="toggleCompleted()">
        <div class="cell">{{this.product.productName}}</div>
        <div class="cell"> {{this.product.variant1}}</div>
        <div class="cell">{{this.product.variant2}}</div>
        <div class="cell">{{this.product.custom}}</div>
    </div>
</template>

<script>
export default {
    props: ['product'],
    
    data() {
        return {
            completed: this.product.completed,
        }
    },

    methods: {
        toggleCompleted() {
            this.completed = !this.completed;
        }
    }
}
</script>

<style scoped>
    .row {
        width: 560px;
        height: 30px;
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        justify-content: center;
        align-items: center;
        flex-shrink: 0;
        border: .5px solid rgba(0,0,0,0.1);
        border-radius: 10px;
        margin-top: 5px;
        box-shadow: -1px 1px 3px #cacaca;
        margin-left: 20px;
        cursor: pointer;
    }

    .row:last-child {
        margin-bottom: 15px;
    }

    .row.completed {
        background-color: rgb(200, 233, 200);
        opacity: .9;
    }

    .cell {
        width: 140px;
        font-size: 12px;
        color: #5D5D5D;
        font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
        min-height: 15px;
        height: auto;  
        padding-left: 5px;
    }
</style>