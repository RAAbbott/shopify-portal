<template>
    <div>
        <div class="table">
            <div class="body">
                <div class="row header">
                    <div class="cell" v-for="(header, i) in headers" :key="i">{{header}}</div>
                </div>
                <div class="row" v-for="product in products" :key="product.id">
                    <div class="cell">{{product.productName}}</div>
                    <div class="cell"> {{product.productSize}}</div>
                    <div class="cell">{{product.productColor}}</div>
                    <div class="cell">{{product.custom}}</div>
                </div>
            </div>
        </div>
    </div>
    
</template>

<script>
export default {
    props: ['data'],
    data() {
        return {
            headers: this.$store.state.headers,
            products: this.data.products
        }
    },

    computed() {

    }
}
</script>

<style scoped>
    .table {
        width: 600px;
    }

    .body {
        width: 600px;
        height: auto;
    }

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
        /* background-color: rgb(200, 233, 200) 'COMPLETE' color */
    }

    .row:last-child {
        margin-bottom: 15px;
    }

    .header {
        margin-bottom: 15px;
        margin-top: 10px;
    }

    .cell {
        width: 140px;
        font-size: 12px;
        color: #5D5D5D;
        font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
        height: 15px !important;
    }

    .header .cell {
        font-weight: bold;
    }
</style>