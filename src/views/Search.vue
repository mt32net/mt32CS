<template>
  <div id="contdiv2">
    <!-- The Full View -->
    <div class="contdivNotMenuExposed">
      <div class="contentcard2">
        <div class="contentcardinner2">
          <a class="cardheader2">Search</a>
          <input v-model="newQ" type="search" class="form" style="height: 1.4rem; width: 100%;"><br/>
          <input type="submit" class="form" value="SEARCH" @click="search">
        </div>
        <div class="results">
          <a v-if="results.length == 0" class="form">Sorry, no results found.</a>
          <Card v-for="card in results"
            v-bind:key="card.id"
            v-bind:card="card"
            xwidth="true">
          </Card>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Card from '../components/Card.vue'

import api from '../api.js'

export default {

  name: 'Search',
  components: {

    Card
  },
  data: function () { return {
    newQ: '',
    q: '',
    results: []
  }},
  methods: {
    update: async function () {

      this.q = this.$route.params.q
      this.results = await api.filterPosts(this.q)
    },
    search: function() {
      this.$router.push({ name: 'search', params: { q: this.newQ } })
    }
  },
  async created() {

    await this.update();
    document.title = "results for " + this.q + " | mt32.net";
    await this.$store.dispatch('loadPages')
  },
  watch: {

    '$route' () {
      this.update()
    }
  }
}
</script>

<style lang="less" scoped>
@import '../../src/config.less';

#contdiv2 {

  border-radius: 20px;

  background-color: @cl-bg;
  height: auto;
}
  .contdivNotMenuExposed {

    display: grid;
    grid-template-columns: 100%;
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
    .contentcard2 {

      display: inline-grid;

      padding: 7px;

    }
      .contentcardinner2 {

    

        border-radius: 7px;

        padding: 30px 30px 20px 30px;

        background-color: @cl-cards;

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
        .cardheader2 {

          font-size: 160%;
          text-decoration: underline;
        }

.results {

  display: grid;
  grid-template-columns: 100%;
}
</style>
