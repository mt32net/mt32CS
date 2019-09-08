<template>
    <div class="contentcard">
      <div class="contentcardinner">

        <div class="cardup">
          <div>
            <div v-on:click="setArticle(card)" class="cardheading">
              <a class="cardtitle">{{ card.article.title }}</a>
              <a> by {{ card.author.name }}, {{ new Date(card.createdAt).toLocaleDateString('de-DE', this.$store.timeOptions) }}</a>
              <br/>
              <a>|-> read more</a>  
            </div>
            <div class="cardcontent" v-html="card.article.content"></div>
          </div>
        </div>

        <div class="cardbottom">
          <div class="tags"><div class="tag" v-bind:key="tag.id" v-for="tag in card.tags">#{{ tag.name }}</div></div>
          <div class="item"></div>
        </div>

      </div>
    </div>
</template>

<script>
export default {

  name: 'Card',
  props: ['card'],
  methods: {

    setArticle: function(page) {

        this.$router.push({ name: 'post', params: { id : page.id } })
    }
  }
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

        .cardheading {

          margin-bottom: 15px;
        }

          .cardtitle {

            font-size: 160%;
            text-decoration: underline;
            margin-bottom: 10px;
          }
          .cardheader:hover {

            text-decoration: none;
          }

          .cardcontent {

            overflow: hidden;
            max-height: 200px;
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
