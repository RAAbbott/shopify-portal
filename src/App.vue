<template>
  <div id="app">
    <Header />
    <SideBar />
    <div class="main-content">
      <Page />
    </div>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue';
import Page from './views/Page.vue';
import SideBar from './components/SideBar.vue';
import Header from './components/Header.vue';

export default {
  name: 'App',
  components: {
    Page,
    SideBar,
    Header
  }
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
  /* overflow: auto; */
}

.main-content {
  margin-left: 200px;
  padding: 50px 50px;
  /* overflow-x: auto; */
  overflow-y: auto;
}
</style>
