<template>
  <!-- The gridded Viwe -->
  <div id="contdiv">

    <Navcard v-bind:pages="this.$store.state.pages" v-bind:menuExposed="true" v-bind:grid="true"></Navcard>

    <Card v-for="card in this.$store.state.posts"
      v-bind:key="card.id"
      v-bind:card="card">
    </Card>

  </div>
</template>

<script>
import Navcard from '../components/Navcard.vue'
import Card from '../components/Card.vue'

export default {
  name: 'Grid',
  components: {

    Navcard,
    Card
  },
  async created() {

    await this.$store.dispatch('loadPages')
    await this.$store.dispatch('loadPosts')
  }
}
</script>

<style lang="less">

  @import '../../src/config.less';

  #contdiv {

    display: grid;
    grid-template-columns: 25% 25% 25% 25%;

    border-radius: 20px;

    background-color: @cl-contentdiv;
  }
</style>
