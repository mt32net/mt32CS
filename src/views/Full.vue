<template>
  <div id="contdiv2">
    <!-- The Full View -->
    <Navcard></Navcard>

      <div class="contentcard2">
        <div class="contentcardinner2">
          <div class="cardup2">
            <div><div class="cardheader2" v-html="page.title"></div><div class="cardcontent2" v-html="page.content"></div></div>
          </div>
          <div class="carddown2">

          </div>
        </div>
      </div>

      <div class="contentcard2 comments">
        <div class="contentcardinner2">

        </div>
      </div>

  </div>
</template>

<script>
import Navcard from '../components/Navcard.vue'

export default {

  name: 'Full',
  components: {

    Navcard
  },
  data: function () { return {

    page: this.$store.state.currentPage

  }}

}
</script>

<style lang="less">
@import '../../src/config.less';

#contdiv2 {

    display: grid;

    border-radius: 20px;

    background-color: @cl-contentdiv;
  }
  .contdivNotMenuExposed {

    grid-template-columns: 93.5px calc(100% - 93.5px);
  }

  .contdivMenuExposed {

    grid-template-columns: 15% 85%;
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
