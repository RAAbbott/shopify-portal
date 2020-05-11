<template>
    <span>
        <label class="label" for="filterInput">Filter:</label>
        <input v-model="value" name="filterInput" id="filterInput" class="filterInput" @keyup.enter="addFilter"/>
        <button v-if="filters.length" class="clearAllFiltersButton" @click="removeAllFilters">Clear All</button>
        <div class="filterContainer">
            <span class="filter" v-for="(filter,i) in filters" :key="filter">{{filter}} <span class="removeFilter" @click="removeFilter(i)">x</span></span>
        </div>
    </span>
</template>

<script>
export default {
    data() {
        return {
            value: '',
            filterSelection: 'Include'
        }
    },
    methods: {
        addFilter() {
            this.$store.commit('addFilter', this.value);
            this.value = '';
        },

        removeFilter(index) {
            this.$store.commit('removeFilter', index);
        },

        removeAllFilters() {
            this.$store.commit('removeAllFilters');
        }
    },

    computed: {
        filters() {
            return this.$store.getters.filters;
        }
    }
}
</script>

<style scoped>
    .label {
        margin-right: 10px;
    }

    .filter {
        border: 0.5px solid rgba(0,0,0,0.1);
        border-radius: 10px;
        box-shadow: -1px 3px 5px #aaaaaa93;
        padding: 5px 10px;
        margin-right: 10px;
        font-size: 13px;
    }

    .filterInput {
        border: 0.5px solid rgba(0,0,0,0.1);
        border-radius: 10px;
        box-shadow: -1px 3px 5px #aaaaaa93;
        padding: 10px;
        font-size: 13px;
        width: 300px;
        margin-right: 10px;
    }

    .filterContainer {
        margin-top: 20px;
        display: flex;
        justify-content: left;
    }

    .filterInput:focus {
        outline: none;
    }

    .removeFilter {
        font-size: 12px;
        margin-left: 8px;
        border: 0.5px solid rgba(0,0,0,0.1);
        border-radius: 5px;
        box-shadow: -1px 1px 5px #c7c7c7d2;
        padding: 0 5px;
        cursor: pointer;
    }

    .clearAllFiltersButton {
        border: 0.5px solid rgba(0,0,0,0.1);
        border-radius: 10px;
        box-shadow: -1px 3px 5px #aaaaaa93;
        padding: 10px;
        font-size: 13px;
        cursor: pointer;
    }

    .clearAllFiltersButton:focus {
        outline: none;
    }

</style>