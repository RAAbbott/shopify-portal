<template>
  <div id="app">
    <Header />
    <SideBar @sync="getOrders"/>
    <div class="main-content">
      <div v-if="!loaded">Loading...</div>
      <!-- <keep-alive> -->
        <component :is="component" v-if="loaded" />
      <!-- </keep-alive> -->
    </div>
    <SelectedBar v-if="showCompletedBar" />
  </div>
</template>

<script>
import OrdersPage from './views/OrdersPage.vue';
import ProductsPage from './views/ProductsPage.vue';
import SideBar from './components/SideBar.vue';
import Header from './components/Header.vue';
import SelectedBar from './components/SelectedBar.vue';

export default {
  name: 'App',
  components: {
    OrdersPage,
    ProductsPage,
    SideBar,
    Header,
    SelectedBar
  },
  data() {
    return {
      loaded: false,
    }
  },

  methods: {
    getOrders() {
      this.loaded = false;
      this.$store.dispatch('getOrders').then(() => this.loaded = true);
    }
  },

  computed: {
    component() {
      return `${this.$store.getters.curPage}Page`
    },

    showCompletedBar() {
      return this.$store.getters.ordersReadyToComplete.length
    }
  },

  created() {
    this.getOrders();
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  overflow: hidden;
}

.main-content {
  margin-left: 200px;
  padding: 50px 50px;
  overflow-y: auto;
}
</style>
