<template>
    <div class="contentcard">
      <div class="contentcardinner">

        <div class="cardup">
          <div>
            <div class="cardheader"
                 v-on:click="$emit('exec', card)">
                    {{ card.title }}
            </div>
            <div class="cardcontent" v-html="card.content"></div>
          </div>
        </div>

        <div class="cardbottom">
          <div class="tags"><div class="tag" v-bind:key="tag.id" v-for="tag in card.tags">#{{ tag }}</div></div>
          <div class="item"></div>
        </div>

      </div>
    </div>
</template>

<script>
export default {

  name: 'Card',
  props: ['card']
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
