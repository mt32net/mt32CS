<template>
    <div v-bind:class="{ menulayer: menuexposed, menulayer2: !menuexposed}">
      <div v-bind:class="{ menupointinner: menuexposed, menupointinner2: !menuexposed}" v-on:click="$emit('exec', point)">
        <div v-bind:class="{ menupointleft: menuexposed, menupointleft2: !menuexposed}">
          <div class="icon" v-bind:class="point.icon"></div>
        </div>

        <div class="menupointright" v-if="menuexposed">
          {{ point.article.title }}
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

</style>
