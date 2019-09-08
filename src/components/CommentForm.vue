<template>
    <div class="comment">
        <form>
            <input type="text" class="text" placeholder="write a comment">
            <input type="button" class="button" value="SEND">
        </form>
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
    margin-right: 14px;

    padding: 5px;
}
.text {

    border: none;
    outline: none;
    background-color: @cl-bg;
    border-radius: 7px;
    color: white;

    padding: 5px;

    width: 80%;

    margin-right: 5px;

}

.button {

    border: none;
    outline: none;
    background-color: @cl-acc;
    border-radius: 7px;
    color: white;

    padding: 5px;

    min-height: 80%;

    margin-right: 5px;
}

</style>
