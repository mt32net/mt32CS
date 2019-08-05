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
  props: ['comment'],
  methods: {

  }
}
</script>

<style lang="less">
@import '../../src/config.less';

.comment {

    display: grid;
    grid-template-rows: 100%;
    grid-template-columns: 10% 90%;
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
    display: inline-grid;
    color: white;
    width: 70px;
    grid-column-start: 1;
    grid-column-end: 2;
}

</style>
