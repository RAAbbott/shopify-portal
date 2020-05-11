<template>
    <div class="sidebar">
        <a v-for="page in pages" :key="page" href="#" @click="changePage(page)" :class="{active: currentPage === page}">{{page}}</a>
        <a class="sync" @click="sync">Sync</a>
    </div>
</template>

<script>
export default {
    data() {
        return {
            pages: ['Orders', 'Products']
        }
    },

    methods: {
        changePage(page) {
            this.$store.commit('changePage', page);
        },

        sync() {
            this.$emit('sync');
        }
    },

    computed: {
        currentPage() {
            return this.$store.getters.curPage;
        }
    }
}
</script>

<style scoped>
    .sidebar {
        height: 100%;
        width: 210px;
        position: fixed;
        z-index: 1;
        top: 0;
        left: 0;
        overflow: none;
        padding-top: 20px;
        margin-top: 60px;
        border-right-style: solid;
        border-right-width: .5px;
        border-right-color: rgba(0,0,0,0.1);
        box-shadow: 2px 2px 8px #aaaaaa;
        background-color: white;
    }

    .sidebar a {
        width: 10px;
        margin-top: 10px;
        margin-bottom: 10px;
        margin-left: 20px;
        padding-top: 10px;
        padding-bottom: 10px;
        padding-right: 120px;
        padding-left: 20px;
        text-decoration: none;
        font-size: 14px;
        color: #5D5D5D;
        display: block;
        font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
    }

    .sidebar a:first-child {
        margin-top: 40px;
    }

    .sidebar a:hover {
        border-style: solid;
        border-width: .5px;
        border-color: rgba(0,0,0,0.1);
        border-radius: 10px;
        box-shadow: -1px 3px 8px #c9c7c7;
    }

    .active {
        border-style: solid;
        border-width: .5px;
        border-color: rgba(0,0,0,0.1);
        border-radius: 10px;
        box-shadow: -1px 3px 8px #aaaaaa;
    }

    .sync {
        cursor: pointer;
    }
</style>