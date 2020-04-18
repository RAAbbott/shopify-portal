<template>
    <div class="header">
        <span>Shopify Portal</span>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
    .header {
        width: 100vw;
        height: 10vh;
        background-color: #363E90;
        position: fixed;
        top: 0;
        left: 0;
        z-index: 2;
        border-bottom-style: solid;
        border-bottom-width: .5px;
        border-bottom-color: rgba(0,0,0,0.1);
        box-shadow: 0px 3px 4px #aaaaaa;
    }

    .header span {
        font-size: 30px;
        font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
        color: white;
        position: fixed;
        left: 40px;
        top: 30px
    }
</style>