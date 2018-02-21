<template>
  <div id="login-page">
    <div class="content">
      <h1>vue-type-admin</h1>
      <form @submit.prevent>
        <h3>Sign in</h3>
        <input type="text" placeholder="Username" class="feature-input"/>
        <input type="password" placeholder="Password" class="feature-input"/>
        <div class="btn-login" @click="login">LOGIN</div>
      </form>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
@Component
export default class Login extends Vue {

  login (): void { this.$router.push({ path: '/' }); }
}
</script>

<style scoped>
#login-page {
  background: #364150!important;
  position: absolute;
  top:0;
  bottom:0;
  left:0;
  right:0;
  color: #b4bcc8;
}
.content {
  margin-top: 20px;
}
form {
  margin-top: 20px;
  background: #fff;
  display: inline-block;
  width: 320px;
  position: relative;
}
h3 {
  color: #32c5d2 !important;
}
.feature-input {
  width: 95%;
  background: #dde3ec;
  height: 44px;
  margin: 10px 0;
  outline: none !important;
  border: none !important;
  padding: 5px;
  color: #8290a3;
}
.btn-login {
  position: absolute;
  background: #6c7a8d;
  left: 0;
  right: 0;
  padding: 15px;
}
</style>
