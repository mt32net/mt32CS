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
        <div id="footright">
          <br/>
          <br/>
          <br/>
          developed by m'torials<br/>
          <a href="http://mtorials.de/">website</a><br/>
          <a href="https://github.com/mtorials">github</a>
        </div>
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

export default {
  name: 'App',
  components: {

    Header,
    Subheader
  }
}
</script>

<style lang="less">
  @import './config.less';

  * {

    font-family: 'Inconsolata', monospace;
  }

  a {
    color: white;
  }

  body {

    padding: 0;
    margin: 0;

    color: @cl-text;

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

    display: inline-grid;
    grid-row-start: 5;
    grid-column: 1 / span 3;
  }
  #footdiv {

    display: block;
    padding: 30px;

    background-color: @cl-bg;
  }
  #footright {
    float: right;
    text-align: right;
  }
</style>
