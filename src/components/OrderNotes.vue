<template>
    <div class="orderNotes">
        <span class="orderNotesTitle">Order Notes</span>
        <div class="orderNotesBody">{{this.notes}}</div>
    </div>
</template>

<script>
export default {
    props: ['notes']
}
</script>

<style scoped>
    .orderNotes {
        margin-top: 10px;
    }

    .orderNotesTitle {
        display: flex;
        justify-content: left;
        margin-left: 20px;
        font-size: 13px;
        margin-bottom: 5px;
    }

    .orderNotesBody {
        margin-left: 20px;
        margin-bottom: 15px;
        min-height: 40px;
        height: auto;
        max-width: 560px;
        border: 0.5px solid rgba(0,0,0,0.1);
        border-radius: 10px;
        box-shadow: -1px 3px 8px #aaaaaa59;
        font-size: 12px;
        padding-left: 6px;
        padding-top: 2px;
        text-align: left;
    }
</style>