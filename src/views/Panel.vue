<template>
  <div id="contdiv2">
    <!-- The Full View -->
    <div class="contdivNotMenuExposed">
      <div class="side">
        <Navcard v-bind:pages="pages" menuExposed="false" v-bind:grid="false"></Navcard>
      </div>

      <div class="contentcard2">
        <div class="contentcardinner2">
					<div>
						<input type="text" v-model="page.article.title" placeholder="title" class="form">
						<vue-simplemde style="background-color: white; border-radius: 7px; color: black;" v-model="page.article.content" ref="markdownEditor" />
						<input type="submit" value="Post" class="form" v-on:click="post">
					</div>
        </div>
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

    </div>
  </div>
</template>

<script>
import Navcard from '../components/Navcard.vue'

import VueSimplemde from 'vue-simplemde'
import VueMarkdown from 'vue-markdown'

import api from '../api.js'

export default {

  name: 'Full',
  components: {

		Navcard,
		VueSimplemde,
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
		pages: {

		},
    options: { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' },
    date: new Date('0001-01-01'),
    isPost: false,
    loggedin: this.$store.state.token != null

  }},
  methods: {

    post: async function() {
      var isNew = await api.createDraft(this.page.article.content, this.page.article.title)
      api.publish(isNew);
      location.reload()
    }
	}
}
</script>

<style lang="less" scoped>
@import '../../src/config.less';
@import '~simplemde/dist/simplemde.min.css';

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
			.form {

        text-decoration: none;
        border-style: none;
        background-color: @cl-acc;
        outline: none;
        resize: none;
        border-radius: 100px;

        padding-left: 7px;
        padding-bottom: 2px;
        padding-top: 2px;

				margin-bottom: 7px;
				margin-top: 7px;
      }
</style>
