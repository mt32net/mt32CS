<template>
  <header id="header">
    <div id="headdiv">
      <div id="hederup">
        <router-link to="/" id="title">mt32.net</router-link>
          <div class="as" v-if="!loggedin">
            <input rows="1" class="headerform" placeholder="Email" v-model="bindedEmail">
            <input type="password" rows="1" class="headerform" placeholder="Password" v-model="bindedPassword">
            <input type="submit" value="LOGIN" class="headerform" v-on:click="login">
            <a href="http://mtorials.de" class="a">REGISTER</a>
          </div>
          <div class="as" v-if="loggedin">
            <input type="submit" value="LOGOUT" class="headerform" v-on:click="logout">
            <a class="a"></a>
            <a href="/directus/public/admin" target="_blank" class="a">ACP</a>
          </div>
      </div>


      <div id="headerdown">
        <a></a>
        <!--<a href="http://photonmsg.com"><img id="logo2" src="logos/photonblue.png"></a>-->
        <!--<a href="http://universegame.com"><img id="logo1" src="logos/universeiconpng.png"></a>-->
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header',
  data: function () { return {

    subheading: true,
    loggedin: false,
    user: null,

    bindedEmail: '',
    bindedPassword: ''

  }},
  methods: {

    login: function() {

      this.loggedin = true;

    },
    logout: function() {

      this.loggedin = false;
    }
  }
}
</script>

<style lang="less">

@import '../../src/config.less';


#header {

  display: inline-grid;
  grid-column: 1 / span 3;
  padding-bottom: 0%;

}

 #headdiv {

    padding: 0%;

    background-color: @cl-bg;
  }
    #title {

      font-size: 200%;
      float: left;
      margin: 30px;
    }
    #title:hover {
      text-decoration: none;
    }
    .as {

      float: right;
      width: 470px;
      margin: 15px;
    }
      .a {

        margin-right: 2%;
        float: left;

        text-decoration-line: underline;
      }
      .headerform {

        text-decoration: none;
        border-style: none;
        background-color: @cl-acc;
        outline: none;
        resize: none;
        border-radius: 100px;

        padding-left: 7px;
        padding-bottom: 2px;
        padding-top: 2px;

        float: left;
        margin-right: 2%;
      }

</style>
