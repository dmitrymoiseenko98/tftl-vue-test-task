<template>
  <div id="app">
    <app-header/>
    <router-view/>
    <app-footer/>
  </div>
</template>

<script>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';

export default {
  name: 'App',
  components: {
    'app-header': Header,
    'app-footer': Footer,
  },
};
</script>

<style lang="scss">
@import './assets/scss/fonts.scss';
@import './assets/scss/cursor.scss';

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  height: 100%;
  // Set 1rem equal to 10px, where default font-size is 16px
  // 100% = 16xp and X% = 10px
  // 100 * 10 / 16 = 62.5
  font-size: 62.5%;
}

body {
  height: 100%;
  font-size: 1.6rem;
  font-family: "TT Travels";
  cursor: cursor("default");
}

ul {
  list-style-type: none;
}

a, button {
  cursor: cursor("pointer");
}

button {
  outline: none;
}

#app {
  min-width: 32rem;
  height: 100%;
  position: relative;
}
</style>
