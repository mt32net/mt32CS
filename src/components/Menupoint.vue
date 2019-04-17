<template>
    <div v-bind:class="{ menulayer: menuexposed, menulayer2: !menuexposed}">
      <div v-bind:class="{ menupointinner: menuexposed, menupointinner2: !menuexposed}" v-on:click="$emit('exec', point)">
        <div v-bind:class="{ menupointleft: menuexposed, menupointleft2: !menuexposed}">
          <div class="icon" v-bind:class="point.icon"></div>
        </div>

        <div v-bind:class="{ menupointright: menuexposed, menupointright2: !menuexposed}">
          {{ point.title }}
        </div>
      </div>
    </div>
</template>

<script>
export default {

  name: 'menupoint',
  props: ['point', 'menuexposed']
}
</script>

<style lang="less">

  @import '../../src/config.less';

     .contentcard {

      display: inline-grid;

      padding: 10px;

    }
      .contentcardinner {

        display: grid;
        grid-template-columns: 100%;
        grid-template-rows: calc(100% - 23px) 23px;
        grid-row-gap: 10px;

        border-radius: 7px;

        padding: 30px 30px 20px 30px;

        background-color: @cl-cards;

      }
        .cardup {

          display: inline-grid;
        }

          .cardheader {

            font-size: 160%;
            text-decoration: underline;
          }
          .cardheader:hover {

            text-decoration: none;
          }

          .cardcontent {

            overflow: hidden;
            max-height: 300px;
          }

        .cardbottom {

          display: inline-grid;

        }
          .tags {

          }
            .tag {

              font-size: 90%;

              margin-right: 8px;

              float: left;
              background-color: @cl-acc;
              padding-right: 5px;
              padding-left: 5px;

              border-radius: 100px;
            }

</style>
