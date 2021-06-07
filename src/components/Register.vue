<template>
  <div>
    <div class="main">
      <div class="container">

        <div class="flexbox_horizontal">
          <div class="register_container">

            <div v-if="this.$v.registerForm.$error">
              Form has errors
            </div>

            <form class="register_form">
              <div class="logo" style="margin-bottom:20px;">
                <a v-on:click="$router.push('/')"><img class="logo_img" src="../images/logo.png"></a>
              </div>
              <div class="pseudo"><input v-model="registerForm.name" placeholder="Name" type="text" required></div>
              <div class="pseudo"><input v-model="registerForm.surname" placeholder="Surname" type="text" required></div>
              <div class="pseudo"><input v-model="registerForm.email" placeholder="E-mail" type="email" required></div>
              <div class="pseudo"><input v-model="registerForm.password" placeholder="Password" type="password" required></div>
              <password-meter class ="pass" :password="registerForm.password"/>
              <div class="pseudo"><input v-model="registerForm.retype" placeholder="Retype Password" type="password" required></div>
              <a class="button_default" name="login" type="submit" v-on:click="register()"> Register </a>

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
import { required, email, minLength, sameAs } from "vuelidate/lib/validators";
import PasswordMeter from "vue-simple-password-meter";

export default {
  name: "Register",
  components: { PasswordMeter },
  data() {
    return {
      registerForm: {
        name: '',
        surname: '',
        email: '',
        password: null,
      }
    }
  },
  validations: {
    registerForm:{
      name: { required },
      surname: { required },
      email: { required, email },
      password: {required, min: minLength(5) },
      retype: {sameAsPassword: sameAs('password') }
    }
  }
  ,
  methods: {
        register() {
          this.$v.registerForm.$touch();
          if (this.$v.registerForm.$error) {
            return
          } else {
            axios.post(`${endpoint.url}/register`, this.registerForm, {
              headers: {
                "Content-Type": "application/json"
              }
            })
                .then((response) => {
                  if (response.status === 200) {
                    this.$router.push('/');
                  }
                })
                .catch(() => {
                  this.info = 'Niepoprawne dane do logowania';
                })
          }
        },
      }
}
</script>

<style scoped>

.pass{
  height: 7px;
  width: 100%;
}

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

.button_default {
  background-color: #fff;
  padding: 15px 35px;
  margin: 10px 0;
  text-align: center;
  width: 200px;
  color: #393939;
  font-size: 16px;
  font-weight: 600;
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
