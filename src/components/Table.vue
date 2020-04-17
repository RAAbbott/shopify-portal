<template>
    <div>
        <h6>Alex Abbott - a.abbott2596@gmail.com - $64.02</h6>
        <div class="table">
            <div class="body">
                <div class="row header">
                    <div class="cell">{{headers[0]}}</div>
                    <div class="cell">{{headers[1]}}</div>
                    <div class="cell">{{headers[2]}}</div>
                    <div class="cell">{{headers[3]}}</div>
                </div>
                <div class="row" v-for="product in orders" :key="product.id">
                    <div class="cell">{{product.productName}}</div>
                    <div class="cell"> {{product.productSize}}</div>
                    <div class="cell">{{product.productColor}}</div>
                    <div class="cell">{{product.custom || '-'}}</div>
                </div>
            </div>
        </div>
    </div>
    
</template>

<script>
export default {
    data() {
        return {
            headers: this.$store.state[`${this.$store.state.currentPage.toLowerCase()}TableHeaders`],
            orders: this.$store.state.orderList
        }
    }
}
</script>

<style scoped>
    h6 {
        display: flex;
        justify-content: left;
        margin: 10px 0 0 20px;
        font-size: 14px;
        flex-shrink: 0;
    }
    .table {
        width: 600px;
        /* margin-top: 200px; */
        /* background-color: red; */
    }

    .body {
        width: 600px;
        height: auto;
        /* display: flex;
        flex-direction: column;
        flex-wrap: nowrap;
        justify-content: center;
        align-items: center; */
        overflow-y: auto;
        flex-shrink: 0;
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
        overflow-y: auto;
        /* margin-right: 20px; */
        /* background-color: rgb(200, 233, 200) 'COMPLETE' color */
    }

    .row:last-child {
        margin-bottom: 15px;
    }

    .header {
        margin-bottom: 15px;
    }

    .cell {
        width: 140px;
        font-size: 12px;
        color: #5D5D5D;
        font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
        height: 15px !important;
        /* background-color: green; */
        /* margin: 10px; */
    }

    .header .cell {
        font-weight: bold;
    }
</style>