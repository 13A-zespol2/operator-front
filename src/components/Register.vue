<template>
  <div>
    <div class="main">
      <div class="container">
        <div class="flexbox_horizontal">
          <div class="register_container">
            <form class="register_form">
              <div class="pseudo"><input v-model="registerForm.name" placeholder="Name" type="text"></div>
              <div class="pseudo"><input v-model="registerForm.surname" placeholder="Surname" type="text"></div>
              <div class="pseudo"><input v-model="registerForm.email" placeholder="E-mail" type="text"></div>
              <div class="pseudo"><input v-model="registerForm.password" placeholder="Password" type="password">
              </div>
              <div class="pseudo"><input placeholder="Retype Password" type="password"></div>


              <input class="button_default" name="login" type="submit" value="Register" v-on:click="register()">

              <a class="button_payment" v-on:click="google">Log in with <img class="payment_logo"
                                                                             src="../images/google_logo.png"></a>
            </form>
          </div>
        </div>
      </div>
    </div>
    <my-footer/>

  </div>

</template>

<script>
import axios from "axios";
import endpoint from "@/endpoint.json";

export default {
  name: "Register",

  data() {

    return {
      registerForm: {
        name: '',
        surname: '',
        email: '',
        password: '',
      }
    }
  }
  ,
  methods:
      {
        register() {
          axios.post(`${endpoint.url}/register`, this.registerForm, {
            headers: {
              "Content-Type": "application/json"
            }
          })
              .then((response) => {
                if (response.status === 200) {

                  this.$router.push('/dashboard');
                }
              })
              .catch(() => {
                this.info = 'Niepoprawne dane do logowania';
              })
        },

        google() {
          axios.get(`${endpoint.url}/oauth2/authorization/google`)
              .then((response) => {
                if (response.status === 200) {
                  sessionStorage.setItem('loggedIn', this.login);
                  this.$router.push("dashboard")
                }
              })
              .catch(() => {
                this.info = 'Niepoprawne dane do logowania';
              });
        },
      }

}
</script>

<style scoped>
.register_container {
  display: flex;
  justify-content: center;
  flex-direction: column;
  border-radius: 5px;
  width: 70%;
  padding: 30px 20px 20px;
  margin: 10px;
  box-shadow: -5px 5px 20px 1px #ddd;
  background-color: #fff;
  position: relative;
  text-align: center;
  align-items: center;
}

.flexbox_horizontal {
  display: flex;
  align-items: center;
  justify-content: center;
}

.title {
  font-family: cg;
  font-size: 20px;
  color: #393939;
  font-weight: 600;
  margin: 5px;
}

.bold_title {
  font-family: cg;
  font-size: 32px;
  color: #91003d;
  font-weight: 800;
  margin: 10px;
}

.default_text {
  font-family: cg;
  font-size: 16px;
  color: #484848;
  font-weight: 500;
  margin: 5px;
}

.button_default {
  background-color: #fff;
  padding: 10px 35px;
  margin: 10px 0;
  text-align: center;
  width: 200px;
  color: #393939;
  font-size: 16px;
  font-weight: 600;
  margin: 10px auto;
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

.colored_text {
  text-decoration: underline;
  color: #91003d;
  margin: 5px;
}

.separator {
  width: 100%;
  height: 50px;
}

.default_text {
  text-align: justify;
}

/*Bottom packages*/
.bottom_flex_section {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  position: relative;
  margin-top: 10px;
}

.bottom_text {
  margin: 0 0 0 20px;
  font-size: 12px;
  font-weight: 900;
  color: black;
}

.register_form {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  border-radius: 5px;
  width: 50%;
  justify-content: flex-start !important;
  padding: 30px 20px 20px;
  margin: 10px;
  background-color: #fff;
  position: relative;
  text-align: center;
}

.register_form input {
  padding: 15px 0;
  text-align: center;
  margin: 25px 0 0;
  border: none;
  border-bottom: 3px solid #91003d;
}

.pseudo {
  width: 100%;
  position: relative;
}

.pseudo input {
  width: 100%;
  outline: none;
  font-family: cg;
  font-size: 20px;
  color: #393939;
  font-weight: 600;
}

.pseudo:before, .pseudo:after {
  content: '';
  width: 3px;
  height: 7px;
  position: absolute;
  background-color: #91003d;
  bottom: 0;
}

.register_form input::placeholder {
  font-family: cg;
  color: #777;
  font-weight: 500;
  font-size: 16px;
}

input[type="submit"] {
  border: none;
  margin-top: 40px;
}

</style>