<template>
    <div class="header">
        <span class="title">Easy Order Manager</span>
        <span class="mockButton" @click="getMockData">Use Mock Data</span>
    </div>
</template>

<script>
export default {
    methods: {
        getMockData() {
            this.$store.dispatch('getMockData');
        },
    }
}
</script>

<style scoped>
    .header {
        width: 100%;
        height: 60px;
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

    .header span.title {
        font-size: 30px;
        font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
        color: white;
        position: fixed;
        left: 40px;
        top: 10px
    }

    .mockButton, .completeButton {
        float: right;
        margin: 15px 80px 0 0;
        border: 0.5px solid rgba(0,0,0,0.1);
        border-radius: 10px;
        box-shadow: -1px 3px 5px #aaaaaa93;
        padding: 8px;
        font-size: 13px;
        cursor: pointer;
        background-color: white;
    }
</style>