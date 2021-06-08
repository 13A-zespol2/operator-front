<template>
  <div class="main">
    <my-header/>
    <div class="container">
      <div class="flexbox_horizontal">
        <p class="bold_title">Here you can see all of your numbers:</p>
      </div>

      <div class="flexbox_vertical" v-for="(number, index) in numbersData" :key="'number'+index">
        <div class="numbers_container">
          <div class="usage_data">
            <p class="number_default"><span>📞</span> +48 {{number.phoneNumber.number.match(/.{1,3}/g).join(' ')}}</p>
            <div class="usage_table">
              <div class="usage_table_row">
                <div class="usage_table_col head">Calls</div>
                <div class="usage_table_col head">Messages</div>
                <div class="usage_table_col head">Internet</div>
                <div class="usage_table_col">{{number.balanceMinutes}}</div>
                <div class="usage_table_col">{{number.smsBalance}}</div>
                <div class="usage_table_col">{{number.balanceInternet}}</div>
              </div>
            </div>
          </div>

          <div class="separator"></div>

          <div class="pin_change">
            <p class="text_default">Change your PIN 🔒</p>
            <p class="pin_validation">If you want to change your PIN Code, you have to use 4 - 8 characters and only digits.</p>
                <input v-on:input="log($event.target.value, $event.target.name)" type="text" class="input_default" placeholder="Text your PIN here">
            <button type="submit" class="button_default" @click="changePinForNumber(number.phoneNumber.number)"> Change</button>
          </div>
        </div>
      </div>
    </div>
    <my-footer/>
  </div>
</template>

<script>
import Header from "./Header";
import Login from "./Login";
import axios from "axios";
import $ from 'jquery';
import endpoint from "../endpoint.json";

export default {
  name: "Numbers",

  data() {
    return {
      components: {
        'my-header': Header,
        'my-login': Login,
      },
      dataFromSession: [],
      numbersData: [],
      fields: {
        number:'',
        pin: '',
      }
    };

  },

  mounted() {
    this.getDataFromSession();
  },

  methods: {
    getDataFromSession() {
      this.dataFromSession = JSON.parse(sessionStorage.getItem('loggedIn'));
      axios.post(`${endpoint.url}/numbers`, this.dataFromSession)
          .then((response) => {
            if (response.status === 200) {
              console.log(response.data);
              this.numbersData = response.data;
            }
          })
          .catch(() => {
            this.info = 'Niepoprawne dane do logowania';
          });

    },
    changePinForNumber(number) {
      axios.put(`${endpoint.url}/numbers/${number}/${this.fields.pin}`)
          .then((response) => {
            if (response.status === 200) {
              console.log('Zmieniono pin');
            }
          })
          .catch(() => {
            console.log('nie poszlo');
          });
      $('input').val('');
      this.fields.pin = '';
      this.fields.name = '';
    },
    log(item) {
      this.fields.pin = item;
    }
  }
}
</script>

<style scoped>

.flexbox_horizontal{
  display:flex;
  flex-direction:column;
  width:100%;
  margin-bottom:60px;
}

.numbers_container{
  display: flex;
  justify-content: space-between;
  align-items:center;
  flex-direction: row;
  border-radius:5px;
  width:auto;
  padding:40px;
  box-shadow: -5px 5px 20px 1px #ddd;
  background-color: #fff;
  margin:0 10px;
  margin-top:20px;
}

.number_default{
  font-family: cg;
  font-size:26px;
  color: #393939;
  font-weight:700;
  margin:5px;
  border-bottom:2px solid #ddd;
  padding-bottom:20px;
}

.bold_title{
  font-family: cg;
  font-size:32px;
  color: #91003d;
  font-weight:800;
  margin:5px;
}


.text_default{
  font-family: cg;
  font-size:18px;
  color: #393939;
  font-weight:600;
  margin:5px;
}

.pin_validation{
  font-family: cg;
  font-size:10px;
  color: #000;
  font-weight:600;
  margin:0;
}

.button_default{
  background-color: #fff;
  padding:12px 35px 8px;
  margin:10px 0;
  text-align:center;
  width:200px;
  color: #91003d;
  font-size:16px;
  font-weight:600;
  margin:10px auto;
  transition:.5s ease;
  border: none;
  box-shadow: 5px 5px 0 0 #91003d, inset 5px 5px 0 0 #91003d;
}

.button_default:hover{
  background: transparent;
  box-shadow: 0 0 0 0 #000, inset 108px 72px 0 0 #000;
  transition:.5s ease;
  cursor: pointer;
  color: white;
}

.input_default{
  padding:10px;
  border: 2px solid #393939;
  text-align:center;
  font-family: cg;
  font-weight:600;
  font-size:12px;

}
.pin_change{
  display: flex;
  flex-direction: column;
  justify-content:center;
  text-align: center;
  width:200px;
}

.pin_change *{
  margin:10px 0;
}


.separator{
  border-right:2px solid #ddd;
  height:120px;
  width:2px;
}

.usage_data{
  width:70%;
}


.usage_table{
  margin-top:30px;
  width:100%;
  display:flex;
  flex-direction: column;
}

.usage_table_row{
  display:flex;
  flex-direction:row;
  justify-content: space-between;
  flex-wrap:wrap;
  text-align:center;
}


.usage_table_col{
  width:30% ;
  margin:2px;
  padding:10px 0;
}


.head{
  background-color: #fafafa;
  box-shadow: 0px 0px 5px 1px #91003d;
  font-weight:700;
}


</style>
