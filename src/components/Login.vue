<template>
  <div>

    <div class="main">
      <div class="container" style="height:84vh;display:flex;justify-content:center;">
        <div class="login_form">
          <div class="logo" style="margin-bottom:20px;">
            <img class="logo_img" src="../images/logo.png">
          </div>
          <p class="title" style="text-align:center;margin-bottom:20px;">Log in to your account</p>
          <form>
            <input type="hidden"/>

            <div class="divinput">
              <input id="username" v-model="loginForm.email" autofocus class="login_input" placeholder="Login"
                     required type="text"/><br/>
            </div>
            <div class="divinput2">
              <input id="password" ref="password" v-model="loginForm.password" class="login_input"
                     placeholder="Password" required
                     type="password"/>
            </div>
            <a class="button_default" name="login" type="submit" v-on:click="submit"> Login </a>

            <!--            <button class="button_default" v-on:click="submit">Login</button>-->
          </form>
          <p class="title">OR...</p>
          <button v-google-signin-button="clientId" class="google-signin-button"> Continue with Google</button>
          <p>No account <span class="colored_text" v-on:click="register">Create one</span></p>
        </div>
      </div>
    </div>
    <my-footer/>
  </div>
</template>

<script>
import axios from 'axios'
import endpoint from '../endpoint.json';
import GoogleSignInButton from 'vue-google-signin-button-directive'

export default {
  directives: {
    GoogleSignInButton
  },
  data() {
    return {
      loginForm: {
        email: '',
        password: '',

      },
      dataToDashboard: {
        phones: [],
        contract: '',
        invoices: ''
      },

      clientId: '1010076371628-k41s2flppiahso1j57v8ocm4qlvjgmt3.apps.googleusercontent.com'

    }
  },
  beforeCreate() {
    sessionStorage.setItem('loggedIn',null)
  },


  methods: {
    submit() {
      axios.post(`${endpoint.url}/login`, this.loginForm)
          .then((response) => {
            if (response.status === 200) {
              sessionStorage.setItem('loggedIn', response.data)
              this.$router.push('/dashboard');
            }
          })
          .catch(() => {
            this.info = 'Niepoprawne dane do logowania';
          });
    },

    OnGoogleAuthSuccess(idToken) {
      axios.get(`${endpoint.url}/googleRegister/${idToken}`)
          .then((response) => {
            if (response.status === 200) {



              console.log(this.dataToDashboard)
              console.log(response)
              this.$router.push("/dashboard")
            }
          })
          .catch(() => {
            this.info = 'Niepoprawne dane do logowania';
          });
    },

    OnGoogleAuthFail(error) {
      console.log(error)
    },

    register() {
      this.$router.push("register")
    }
  }


}
</script>

<style scoped>
.login_form {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 50%;
  margin: auto;
  text-align: center;
  box-shadow: -5px 5px 20px 1px #ddd;
  padding: 30px;
  border-radius: 5px;
  background-color: #fff;
}

.login_input {
  padding: 20px 60px;
  margin: 5px 0;
  background: #FFFFFF;
  box-shadow: inset -2px -2px 1px rgba(145, 0, 61, 21);
  border: 1px solid #E5E5E5;
  position: relative;
}

.divinput, .divinput2 {
  position: relative;
}

.google-signin-button {
  display: flex;
  flex-direction: row;
  justify-content: center;
  text-align: center;
  align-items: center;
  border: 5px solid #91003d !important;
  width: 200px;
  margin-top: 20px;
  margin-bottom: 20px;
  padding: 10px 30px;
  font-weight: 900;
  animation: pulse 3s infinite;
  transition: .2s ease;
}

.divinput:before {
  font-family: 'Font Awesome 5 Free';
  font-weight: 900;
  color: #E5E5E5;
  content: '\f0e0';
  position: absolute;
  right: 20px;
  top: 30%;
  z-index: 99999;
}

.divinput2:before {
  font-family: 'Font Awesome 5 Free';
  font-weight: 900;
  color: #E5E5E5;
  content: '\f023';
  position: absolute;
  right: 20px;
  top: 40%;
  z-index: 99999;
}

.button_default {
  background-color: #fff;
  padding: 15px 35px 10px;
  text-align: center;
  width: 200px;
  color: #393939;
  font-size: 16px;
  font-weight: 600;
  margin: 30px auto;
  transition: .5s ease;
  box-shadow: 5px 5px 0 0 #91003d, inset 5px 5px 0 0 #91003d;
}

.button_default:hover {
  background: transparent;
  box-shadow: 0 0 0 0 #000, inset 108px 72px 0 0 #000;
  transition: .5s ease;
  cursor: pointer;
  color: white;
}


a:active, button:active, a, button, input {
  outline: none;
  border: none;
}

::placeholder {
  color: #d1d1d1;
  opacity: 1;
  font-family: cg;
  font-weight: 600;
}

.title {
  font-family: cg;
  font-size: 20px;
  color: #393939;
  font-weight: 600;
  margin: 5px;
}


.colored_text {
  text-decoration: underline;
  color: #91003d;
  margin: 5px;
}
</style>
