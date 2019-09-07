<template>
    <div class="comment">
        <div class="meta">
            <b></b>
        </div>
        <div class="content">
            <div class="contentinner">
                Schreibe hier
            </div>
        </div>
    </div>    
</template>

<script>
export default {

  name: 'commentform',
  props: ['']
}
</script>

<style lang="less" scoped>
@import '../../src/config.less';

.comment {

    display: block;
    background-color: @cl-contentdiv;
    height: 70px;
    border-radius: 7px;
    margin-bottom: 20px;
    margin-right: 7px;
}

</style>
