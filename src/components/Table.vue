<template>
    <!-- <table>
        <tr>
            <th>Header</th>
            <th>Header</th>
            <th>Header</th>
            <th>Header</th>
        </tr>
        <tr>
            <td>Cell</td>
            <td>Cell</td>
            <td>Cell</td>
            <td>Cell</td>
        </tr>
        <tr>
            <td>Cell</td>
            <td>Cell</td>
            <td>Cell</td>
            <td>Cell</td>
        </tr>
        <tr>
            <td>Cell</td>
            <td>Cell</td>
            <td>Cell</td>
            <td>Cell</td>
        </tr>
    </table> -->
    <div>
        <h6>Alex Abbott - a.abbott2596@gmail.com - $64.02</h6>
        <div class="table">
            <div class="body">
                <div class="row header">
                    <div class="cell">Product</div>
                    <div class="cell">Size</div>
                    <div class="cell">Color</div>
                    <div class="cell">Custom</div>
                </div>
                <div class="row">
                    <div class="cell">Custom Name Onesie</div>
                    <div class="cell"> Newborn</div>
                    <div class="cell">Natural</div>
                    <div class="cell">Archer</div>
                </div>
                <div class="row">
                    <div class="cell"></div>
                    <div class="cell"></div>
                    <div class="cell"></div>
                    <div class="cell"></div>
                </div>
            </div>
        </div>
    </div>
    
</template>

<script>
export default {
    
}
</script>

<style scoped>
    h6 {
        display: flex;
        justify-content: left;
        margin: 10px 0 0 20px;
        font-size: 13px;
    }
    .table {
        width: 600px;
        margin-top: -30px;
        /* background-color: red; */
    }

    .body {
        width: 600px;
        height: 200px;
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        /* background-color: blue; */
    }

    .row {
        width: 560px;
        height: 30px;
        /* background-color: red; */
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        justify-content: center;
        align-items: center;
        border: .5px solid rgba(0,0,0,0.1);
        border-radius: 10px;
        margin-top: 5px;
        box-shadow: -1px 1px 3px #cacaca;
        background-color: rgb(200, 233, 200) /* 'COMPLETE' color */
    }

    .header {
        margin-bottom: 10px;
    }

    .cell {
        width: 140px;
        font-size: 12px;
        color: #5D5D5D;
        font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
        /* height: 20px; */
        /* background-color: green; */
        /* margin: 10px; */
    }

    .header .cell {
        font-weight: bold;
    }
</style>