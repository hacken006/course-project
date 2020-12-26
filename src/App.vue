<template>
  <div id="app">
    <Header class="my-5" />
    <router-view :key="$route.path" />
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default {
  components: {
    Header,
    Footer
  },
  metaInfo: {
      // if no subcomponents specify a metaInfo.title, this title will be used
      title: 'Learn Code Free',
      // all titles will be injected into this template
      titleTemplate: '%s | Tutorial Dev'
    }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.navbar-active{
  color: white !important;
  font-weight: bold;
}
</style>
