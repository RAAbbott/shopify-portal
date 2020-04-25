<template>
    <div>
        <div class="pageHeader">
            <span class="pageTitle">{{page}}</span>
            <span class="quantity">{{page === 'Orders' ? cardData.length : totalProducts}} {{page}}</span>
        </div>
        <div class="viewFilters">
            <Filters />
            <GroupSort class="groupSort" :page="page" :options="options" @filter="updateFilters"/>
        </div>
        <div class="cardContainer">
            <div v-for="group in cardData" :key="group">
                <Card :data="group" :type="page"/>
            </div>
        </div>
    </div>
</template>

<script>
import Card from '../components/Card.vue';
import GroupSort from '../components/GroupSort.vue';
import Filters from '../components/Filters.vue';

export default {
    data() {
        return {
            totalProducts: 0,
            options: [],
            selectedGroupBy: 'productName',
            selectedSortBy: 'customerName'
        }
    },

    components: {
        Card,
        GroupSort,
        Filters
    },

    methods: {
        groupBy(xs, key) {
            return xs.reduce(function(rv, x) {
                (rv[x[key]] = rv[x[key]] || []).push(x);
                return rv;
            }, {});
        },

        groupProducts(products) {
            const grouped = this.groupBy(products, this.selectedGroupBy)
            const data = []
            for (const group in grouped) {
                data.push({title: group, products: grouped[group]})
            }
            return data.sort((a, b) => (a.title > b.title) ? 1 : -1);
        },

        sortOrders(products) {
            return products.sort((a,b) => a[this.selectedGroupBy] > b[this.selectedGroupBy] ? 1 : -1);
        },

        setNumberOfProducts(val) {
            this.totalProducts = val
        },

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
            return this.$store.state.currentPage;
        },


        cardData() {
            const orders = this.$store.state.orderList;
            console.log();
            if (this.page === 'Orders') {
                this.setOptions(['Date Ordered', 'Customer Name', 'Customer Email', 'Amount']);
                return this.sortOrders(orders.map(order => ({title: `${order.customerName} - ${order.customerEmail} - $${order.amount} - ${order.dateOrdered}`, customerName: order.customerName, customerEmail: order.customerEmail, amount: order.amount, dateOrdered: order.dateOrdered, products: order.products, note: order.note})));
            } else if (this.page === 'Products') { 
                this.setOptions(['Product Name', orders[0].products[0].option1, orders[0].products[0].option2, orders[0].products[0].option3]);
                const products = orders.map(order=>order.products).flat();
                this.setNumberOfProducts(products.length);
                return this.groupProducts(products);
            } else {
                console.log('Other Page');
                return [];
            }
        },

        headers() {
            return this.$store.state.tableHeaders;
        },
    },

    // watch: {
    //     cardData() {

    //     }
    // },

    created() {
        this.$store.dispatch('getOrders');
    }
}
</script>

<style scoped>
    .pageHeader {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: left;
        align-items: center;
        margin-top: 15px;
        margin-bottom: 15px;
    }

    .pageTitle {
        font-weight: bold;
        font-size: 30px;
    }

    .quantity {
        /* display: flex;
        flex-wrap: wrap;
        justify-content: left;
        margin-bottom: 20px; */
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
        justify-content: space-between;
        align-items: center;
    }

    .groupSort {
        margin-bottom: 20px;
    }

</style>