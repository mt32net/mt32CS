<template>
  <div id="contdiv2">
    <!-- The Full View -->
    <div class="contdivNotMenuExposed">
      <div class="side">
        <Navcard menuExposed="false" v-bind:grid="false"></Navcard>
        <div class="underside">
        </div>
      </div>
      <div class="contentcard2">
        <div class="contentcardinner2">
          <div class="cardup2">
            <div><div class="cardheader2" v-html="page.article.title"></div><div class="cardcontent2" v-html="page.article.content"></div></div>
          </div>
          <div class="carddown2">
              <div class="tags2"><div class="tag2" v-bind:key="tag.id" v-for="tag in page.tags">#{{ tag.name }}</div></div>
          </div>
        </div>
      </div>

      <div class="contentcard2 comments">
        <div class="contentcardinner2">

        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navcard from '../components/Navcard.vue'

import api from '../api.js'

export default {

  name: 'Full',
  components: {

    Navcard
  },
  data: function () { return {

    page: {

      article: {
        title: '',
        content: ''
      }
    }

  }},
  methods: {
    update: async function () {
      await this.$store.dispatch('loadPages')
      const id = this.$route.params.id
      if (this.$router.currentRoute.name == 'post') {
        this.page = await api.getPost(id)

      } else {
        this.page = await api.getPage(id)
      }
    }
  },
  async created() {

    this.update();
  },
  watch: {

    '$route' () {

      this.update();
    }
  }
}
</script>

<style lang="less" scoped>
@import '../../src/config.less';

#contdiv2 {

  border-radius: 20px;

  background-color: @cl-contentdiv;
}
  .contdivNotMenuExposed {

    display: grid;
    grid-template-columns: 300px auto;
  }
    .side {

        display: inline-grid;
        grid-row-start: 1;
        grid-row-end: 3;
    }
      .underside {

        display: block;
        padding: 7px;
        color: black;
      }
    .contentcard2 {

      display: inline-grid;

      padding: 7px;

    }
      .contentcardinner2 {

        display: grid;
        grid-template-columns: 100%;
        grid-template-rows: calc(100% - 23px) 23px;
        grid-row-gap: 10px;

        border-radius: 7px;

        padding: 30px 30px 20px 30px;

        background-color: @cl-cards;

      }
        .cardup2 {

          display: inline-grid;
        }

          .cardheader2 {

            font-size: 160%;
            text-decoration: underline;
          }

          .cardcontent2 {

            margin-top: 20px;
          }

        .cardbottom2 {

          display: inline-grid;

        }
          .tags2 {

          }
            .tag2 {

              font-size: 90%;

              margin-right: 8px;

              float: left;
              background-color: @cl-acc;
              padding-right: 5px;
              padding-left: 5px;

              border-radius: 100px;
            }
</style>
