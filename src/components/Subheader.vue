<template>
  <div v-if="subheading" id="subheader">
    <div id="subheaderdiv">
    </div>
  </div>

  <div v-else id="spacer"></div>
</template>

<script>
export default {
  name: 'Subheader',
  data: function () { return {

    subheading: true
  }}
}
</script>

<style lang="less">
  #subheader {

    display: inline-grid;
    grid-column: 1 / span 3;
  }
    #subheaderdiv {

      border-radius: 20px;

      background-image: url("/../../assets/trianglify.svg");
    }

  #spacer {

  display: inline-grid;
  grid-column: 1 / span 3;

}
</style>
