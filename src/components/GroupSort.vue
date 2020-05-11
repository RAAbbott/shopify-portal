<template>
    <div class="filters">
        <span>{{filterText}} </span>
        <div class="row">
            <div class="cell" :class="{selected : indexSelected === i}" v-for="(option, i) in options" :key="i" @click="toggleSelected(i)">
                {{option}}
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            indexSelected: 0,
        }
    },

    computed: {
        filterText() {
            return this.isOrderPage ? 'Sort By:' : 'Group By:';
        },

        options() {
            return this.isOrderPage ? this.$store.getters.sortByOptions : this.$store.getters.groupByOptions;
        },

        isOrderPage() {
            return this.$store.getters.curPage === 'Orders';
        }
    },

    methods: {
        toggleSelected(index) {
            this.indexSelected = index;
            this.$store.commit(`${this.isOrderPage ? 'changeSortBy' : 'changeGroupBy'}`, this.isOrderPage ? this.options[index] : index);
        }
    }
}
</script>

<style scoped>
    .filters {
        display: flex;
        flex-direction: row;
        /* margin-left: 350px; */
        align-items: center;
    }

    .row {
        width: 300px;
        height: 25px;
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        justify-content: center;
        align-items: center;
        flex-shrink: 0;
        border: .5px solid rgba(0,0,0,0.1);
        border-radius: 10px;
        box-shadow: -1px 1px 3px #cacaca;
        margin-left: 20px;
    }

    .cell {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 150px;
        height: 22px;
        font-size: 12px;
        color: #5D5D5D;
        font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
        cursor: pointer;
        border-right-style: solid;
        border-right-color: rgba(0,0,0,0.3);
        border-right-width: .4px;
        border-left-style: solid;
        border-left-color: rgba(0,0,0,0.3);
        border-left-width: .4px;
        opacity: 0.3;
    }

    .cell.selected {
        opacity: 1;
    }

    .cell:last-child {
        border-right: none;
    }

    .cell:first-child {
        border-left: none;
    }
</style>