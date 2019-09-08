<template>
  <div v-if="subheading" id="subheader">
    <div id="subheaderdiv">
      <a class="linki">M'Torials</a>
      <a class="linki">Universum</a>
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

@import '../../src/config.less';

  #subheader {

    display: inline-grid;
    grid-column: 1 / span 3;
  }
    #subheaderdiv {

      border-radius: 20px;

      background-image: url("/../../assets/trianglify.svg");

      text-align: center;

      line-height: 1000%;
    }

    .linki {
      
      margin: 10px;
      background-color: @cl-acc;
      padding: 3px;
      border-radius: 7px;
    }

  #spacer {

  display: inline-grid;
  grid-column: 1 / span 3;

  }
</style>
