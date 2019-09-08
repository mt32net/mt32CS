<template>
  <header id="header">
    <div id="headdiv">
      <div id="hederup">
        <router-link to="/" id="title" class="headertext">mt32.net</router-link>

          <form class="as" v-if="!loggedin && !singupmode">
            <input rows="1" class="headerform" placeholder="email" v-model="bindedEmail">
            <input type="password" rows="1" class="headerform" placeholder="password" v-model="bindedPassword">
            <input type="submit" value="LOGIN" class="headerform" v-on:click="login">
            <button class="a" v-on:click="toggleSingup">signup</button>
          </form>
          <form class="as" v-if="singupmode">
            <input rows="1" class="headerform" placeholder="email" v-model="bindedEmail">
            <input rows="1" class="headerform" placeholder="username" v-model="bindedUsername">
            <input type="password" rows="1" class="headerform" placeholder="password" v-model="bindedPassword">
            <input type="submit" value="SINGUP" class="headerform" v-on:click="singup">
            <button class="a" v-on:click="toggleSingup">login</button>
          </form>
          <form class="as" v-if="loggedin">
            <input type="submit" value="LOGOUT" class="headerform" v-on:click="logout">
            <a class="a"></a>
            <a href="" target="_blank" class="a">ACP</a>
          </form>
      </div>

      <div id="headerdown">
        <!--<a href="http://photonmsg.com"><img id="logo2" src="logos/photonblue.png"></a>-->
        <!--<a href="http://universegame.com"><img id="logo1" src="logos/universeiconpng.png"></a>-->
      </div>
    </div>
  </header>
</template>

<script>
import api from '../api'

export default {
  name: 'Header',
  data: function () { return {

    subheading: true,
    loggedin: this.$store.state.token != null,
    user: null,

    singupmode: false,

    bindedEmail: '',
    bindedPassword: '',
    bindedUsername: ''

  }},
  methods: {

    toggleSingup: function() {
      if (this.singupmode) this.singupmode = false
      else this.singupmode = true
    },

    login: function() {

      api.login(this.bindedEmail, this.bindedPassword)
      .then((data) => {
        this.$store.commit('updateToken', data)
      })
      .catch((error) => {
        window.alert(error)
      })
    },
    logout: function() {

      this.$store.commit('removeToken')
    },

    singup: function() {

      api.signup(this.bindedUsername, this.bindedEmail, this.bindedPassword)
      .then((data) => {
        window.alert("New user " + data + " registered.")
      })
      .catch((error) => {
        window.alert(error)
      })
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

    .headertext {

      float: left;
      margin: 30px;
    }
    #title {

      font-size: 200%;
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

        outline: none;
        background: none;
        border: none;
        color: white;

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
        margin-right: 2%;
      }

</style>
