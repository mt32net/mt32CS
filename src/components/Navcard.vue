<template>

      <div v-bind:class="{ grid: grid }" class="navcard">
        <div class="navcardinner">

          <Menupoint v-bind:point="pointMenu" 
            v-bind:menuexposed="menuExposed" 
            v-on:click.native="btnMenu()">
          </Menupoint>

          <div class="menulayer" v-if="menuExposed">
            <div>
              <input type="search" id="search" v-model="q">
              <input type="submit" value="SEARCH" id="searchbtn" @click="search">
            </div>
          </div>

          <div class="menulayer" v-else>
            <div><input type="submit" value="SEARCH" id="searchbtn"></div>
          </div>

          <Menupoint v-for="apoint in pages"
                     v-bind:point="apoint"
                     v-bind:key="apoint.id"
                     v-on:click.native="showPage(apoint)"
                     v-bind:menuexposed="menuExposed">
          </Menupoint>

        </div>
  </div>

</template>

<script>
import Menupoint from '../components/Menupoint.vue'

export default {
  name: 'Navcard',
  props: ['pages', 'menuExposed', 'grid'],
  data: function () { return {

    pointMenu: {

      article: {
        title: 'Menu'
      },
      icon: 'menu',
    },
    q: ''

  }},
  components: {

    Menupoint
  },
  methods: {

    showPage: function(page) {

      this.$router.push({ name: 'page', params: { id : page.id } })

    },
    btnMenu: function() {

      this.$store.commit('toggleMenuExposure')
    },
    search: function() {
      this.$router.push({ name: 'search', params: { q: this.q } })
    }
  }
}
</script>

<style lang="less">

  @import '../../src/config.less';
  @import '../../src/assets/icons.less';

.navcard {

  padding: 2%;
}
.grid {
  
  display: inline-grid;
  grid-row-start: 1;
  grid-row-end: 3;
}
  .navcardinner{

    display: grid;
    grid-template-columns: 100%;
    grid-auto-rows: 20px;
    grid-row-gap: 17px;

    background-color: @cl-extracard;
    border-radius: 10px;
    padding: 30px;
  }
    .menulayer {

      display: inline-grid;

    }
      .menupointinner:hover {

        background-color: @cl-acc;
        border-radius: 5px;
      }
        .menupointright {

          margin-left: 40px;
          float: left;
          padding-top: 2px;
        }
        #search {

          float: left;

          border-radius: 5px;
          width: 83%;
          height: 100%;
          background-color: @cl-acc;
          padding-left: 5px;

          border: none;
          outline: none;
        }
          #searchbtn {

            float: left;

            border-radius: 5px;
            margin-left: 2%;
            width: 15%;
            height: 100%;

            border: none;
            outline: none;

            background-color: @cl-acc;
          }
</style>
