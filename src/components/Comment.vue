<template>
    <div class="comment">
        <div class="meta">
            <b>{{ comment.author.name }}</b>
        </div>
        <div class="content">
            <div class="contentinner">
                {{ comment.content }}
            </div>
        </div>
    </div>    
</template>

<script>
export default {

  name: 'comment',
  props: ['comment']
}
</script>

<style lang="less">
@import '../../src/config.less';

.comment {

    display: grid;
    grid-template-rows: 100%;
    grid-template-columns: 80px calc(100% - 80px);
}

.content {

    padding: 7px;
    display: inline-grid;
    grid-column-start: 2;
    grid-column-end: 3;
    min-height: 2.7rem;
}
.contentinner {

    padding: 7px;
    border-radius: 7px;
    background-color: @cl-contentdiv;
}
.meta {

    text-align: right;
    padding-top: 5px;
    padding-right: 7px;
    display: inline-grid;
    color: white;
    grid-column-start: 1;
    grid-column-end: 2;
}

</style>
