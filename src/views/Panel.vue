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
						<input type="text" v-model="page.article.title" placeholder="title" class="form"><br/>
            <input type="text" v-model="page.description" placeholder="description" class="form" style="width: 100%;">
						<vue-simplemde style="background-color: white; border-radius: 7px; color: black;" v-model="page.article.content" ref="markdownEditor" />
						<input type="submit" value="Post" class="form" v-on:click="post"><br/>
            <a v-for="tag in this.tags" 
              v-bind:key="tag.id" 
              v-text="tag.name" 
              @click="tag.selected = tag.selected ? false : true" 
              v-bind:class="{ white: tag.selected, form: true}"></a>
            <input type="text" class="form white" v-model="newTagName" placeholder="you have to reload">
            <input type="button" class="form white" @click="newTag" value="+">
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
                <br/><br/>
                <a><i v-text="this.page.description"></i></a>
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

  name: 'Panel',
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
      },
      description: ''
    },
    pages: {},
		tags: [],
    options: { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' },
    date: new Date('0001-01-01'),
    isPost: false,
    loggedin: this.$store.state.token != null,
    newTagName: ''

  }},
  methods: {

    post: async function() {
      const tagIds = this.tags.map(e => {
        if (e.selected) return e.id
      })
      .filter(function (el) {
        return el != null;
      });
      var isNew = await api.createDraft(this.page.article.content, this.page.article.title, tagIds, this.page.description)
      api.publish(isNew);
      location.reload()
    },
    sel: function(tag) {
      tag.selected = true;
    },
    newTag: async function() {
      
      api.createTag(this.newTagName)
    }
  },
  async created() {

    var tags = await api.getTags()
    tags.forEach(element => {
      element.selected = false
    });
    this.tags = tags;
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

        color: black;

        padding-left: 7px;
        padding-bottom: 2px;
        padding-top: 2px;
        padding-right: 7px;

				margin-bottom: 7px;
        margin-top: 7px;
        margin-right: 7px;
      }
      .white {
        background-color: white;
      }

      
</style>
