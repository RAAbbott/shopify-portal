<template>
    <div>
        <div class="pageHeader">
            <span class="pageTitle">{{page}}</span>
            <span class="quantity">{{this.itemLength}} {{page}}</span>
            <GroupSort class="groupSort" @filter="updateFilters"/>
        </div>
        <Filters class="filters"/>
    </div>
</template>

<script>
import GroupSort from '../components/GroupSort.vue';
import Filters from '../components/Filters.vue';

export default {
    props: ['itemLength'],
    data() {
        return {
        }
    },

    components: {
        GroupSort,
        Filters,
    },

    methods: {
        setOptions(val) {
            this.options = val;
        },

        convertToCamelCase(str) {
            const combined = str.split(' ').join('');
            return `${combined.charAt(0).toLowerCase()}${combined.slice(1)}`;
        },

        updateFilters(index) {
            if (this.page === 'Orders') {
                this.selectedGroupBy = this.convertToCamelCase(this.options[index]);
            } else {
                this.selectedGroupBy = index === 0 ? 'productName' : `variant${index}`;
            }
        },
    },

    computed: {
        page() {
            return this.$store.getters.curPage;
        },
    },
}
</script>

<style scoped>
    .pageHeader {
        display: flex;
        flex-direction: row;
        flex-wrap: none;
        justify-content: left;
        align-items: center;
        margin-bottom: 60px;
    }

    .pageTitle {
        font-weight: bold;
        font-size: 30px;
    }

    .quantity {
        margin-left: 40px;
    }

    .cardContainer {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: left;
        height: 100%;
        width: 100%;
        overflow: auto;
    }

    .viewFilters {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
    }

    .filters {
       float: left;
    }

    .groupSort {
        margin-left: 150px;
    }

</style>