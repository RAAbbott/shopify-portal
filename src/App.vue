<template>
  <div id="app">
    <Header />
    <SideBar @sync="getOrders"/>
    <div class="main-content">
      <div v-if="!loaded">Loading...</div>
      <component :is="component" v-if="loaded" />
    </div>
  </div>
</template>

<script>
import OrdersPage from './views/OrdersPage.vue';
import ProductsPage from './views/ProductsPage.vue';
import SideBar from './components/SideBar.vue';
import Header from './components/Header.vue';

export default {
  name: 'App',
  components: {
    OrdersPage,
    ProductsPage,
    SideBar,
    Header
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
