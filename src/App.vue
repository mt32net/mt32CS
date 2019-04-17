<template>
  <div id="app">
    <Header></Header>
    <Subheader></Subheader>
    <div id="spacer"></div>
    <div id="content">
      <router-view/>
    </div>
    <footer id="footer">
      <div id="footdiv">
        <div>
        CREDITS<br/><br/>
          <a href="https://cssicon.space/#/" target="_blank">Icons by wantin</a><br/>
          <a href="https://vuejs.org/" target="_blank">Used the Vue.js Framework</a><br/>
        </div>

        <br/>

        <div>
          <a>v0.1.2</a>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Subheader from './components/Subheader.vue'

import gql from 'graphql-tag'

export default {
  name: 'App',
  components: {

    Header,
    Subheader
  },
  apollo: {
    hello: gql`query {
      articles {

        title
      }
    }`
  }
}
</script>

<style lang="less">
  @import './config.less';

  * {

    text-decoration: none;
    color: @cl-text;
    font-family: 'Inconsolata', monospace;
  }

  body {

    padding: 0;
    margin: 0;

    background-color: dimgrey;
  }

  #app {

    display: grid;
    grid-template-columns: 100%;
    grid-template-rows: 120px 150px 50px auto 10px;

    background-color: @cl-bg;
  }

  #spacer {

  display: inline-grid;
  grid-column: 1 / span 3;

  }

  #content {

    display: inline-grid;

    padding: 0%;
  }

  #footer {

    display: none;
    grid-row-start: 3;
    grid-column: 1 / span 3;
}
  #footdiv {

    display: block;
    padding: 30px;

    background-color: @cl-bg;
  }
</style>
