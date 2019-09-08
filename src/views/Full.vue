<template>
  <div id="contdiv2">
    <!-- The Full View -->
    <div class="contdivNotMenuExposed">
      <div class="side">
        <Navcard v-bind:pages="this.$store.state.pages" menuExposed="false" v-bind:grid="false"></Navcard>
      </div>
      <div class="contentcard2">
        <div class="contentcardinner2">
          <div class="cardup2">
            <div>
              <div>
                <a class="cardheader2">{{ page.article.title }}</a>
                <a class="author" v-if="isPost"> by <i>{{ page.author.name }}, {{ date.toLocaleDateString('de-DE', date) }}</i></a>
              </div>
              <vue-markdown class="contentcard2" v-bind:source="page.article.content"></vue-markdown>
            </div>
          </div>
          <div class="carddown2">
              <div class="tags2"><div class="tag2" v-bind:key="tag.id" v-for="tag in page.tags">#{{ tag.name }}</div></div>
          </div>
        </div>
      </div>

      <div class="comments" v-if="isPost">
        <div class="commentsinner">
          <comment-form v-bind:postid="page.id" v-if="loggedin"></comment-form>
          <div v-else>Please sign in to write a comment</div>
          <Comment class="underside"
            v-for="comment in page.comments"
            v-bind:key="comment.key"
            v-bind:comment="comment">
          </Comment>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navcard from '../components/Navcard.vue'
import Comment from '../components/Comment.vue'
import CommentForm from '../components/CommentForm.vue'

import api from '../api.js'

import VueMarkdown from 'vue-markdown'

export default {

  name: 'Full',
  components: {

    Navcard,
    Comment,
    CommentForm,
  	VueMarkdown
  },
  data: function () { return {

    page: {
      id: '',
      article: {
        title: '',
        content: ''
      },
      author: {
        name: ''
      }
    },
    options: { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' },
    date: new Date('0001-01-01'),
    isPost: false,
    loggedin: this.$store.state.token != null

  }},
  methods: {
    update: async function () {
      await this.$store.dispatch('loadPages')
      const id = this.$route.params.id
      if (this.$router.currentRoute.name == 'post') {
        this.page = await api.getPost(id)
        this.isPost = true

      } else {
        this.page = await api.getPage(id)
      }
    }
  },
  async created() {

    await this.update();
    document.title = this.page.article.title + " | mt32.net";
    this.date = new Date(this.page.createdAt)
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
  height: auto;
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

        padding: 7px;
        color: black;
      }
    .comments {

      display: inline-grid;

      padding: 7px;
    }
      .commentsinner {
        
        border-radius: 7px;

        padding: 30px 30px 20px 30px;

        background-color: @cl-cards;
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
          .author {
            font-size: 100%;
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
