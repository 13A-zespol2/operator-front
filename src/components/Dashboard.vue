<template>
  <div>
    <my-header/>

    <div id="container">

      <div class="main">
        <div class="container">
          <div class="flexbox_horizontal">
            <div class="phone_info">
              <img class="img_responsive" src="../images/iphone_x.png">
              <p class="title">iPhone 12 128GB (iOS 14.5.1)</p>
            </div>

            <div class="user_data_info">

              <div class="user_numbers">
                <p class="bold_title"> Your main number</p>
                <p class="bold_title">+48 {{this.mainNumber}}</p>
                <a class="colored_text" v-on:click="changeRoute('/numbers')">Your other numbers</a>
                <a class="colored_text">Register new number</a>
              </div>

              <div class="last_invoice">
                <p class="title"> Last invoice</p>
                <p class="bold_title">{{ this.invoiceInf.slice(-1)[0].price }} PLN</p>
                <p class="default_text">Document number: <b>{{this.invoiceInf.slice(-1)[0].invoiceNumber}}</b></p>
                <p class="default_text">Payable to: <b><span>{{this.date | formatDate}}</span></b></p>
                <a class="colored_text" v-on:click="changeRoute('/invoice')">Your invoices</a>
              </div>
            </div>
          </div>
        </div>

      </div>

    </div>

    <my-footer/>
  </div>
</template>

<script>
import Header from '../components/Header'
import Login from '../components/Login'
import axios from "axios";
import endpoint from "../endpoint.json";

import moment from 'moment';
import Vue from "vue";

Vue.filter('formatDate', function(value) {
  if (value) {
    return moment(String(value)).format('YYYY-MM-DD')
  }
})

export default {

  data() {
    return {
      components: {
        'my-header': Header,
        'my-login': Login,
      },
      dataFromSession: [],
      phoneNumbers:[],
      mainNumber:'',
      invoiceInf: [],
      date: '',
      newD: ''
    };

  },

  mounted() {
    this.getDataToDashboard()
  },

  methods: {

    changeRoute(route) {
      this.$router.push(route).catch(error => {
        if(error.name !== "NavigationDuplicated"){
          throw error;
        }
      });
    },

    getDataToDashboard() {
      this.dataFromSession = JSON.parse(sessionStorage.getItem('loggedIn'));
      this.invoiceInf = JSON.parse(sessionStorage.getItem('invoices'));

      axios.post(`${endpoint.url}/dashboard`, this.dataFromSession)
          .then((response) => {
            if (response.status === 200) {
              console.log(response.data);
              this.phoneNumbers = response.data.phoneNumberList;
              this.mainNumber = this.phoneNumbers[0];
              this.mainNumber = this.mainNumber.match(/.{1,3}/g).join(' ')
              const date = new Date(this.invoiceInf.slice(-1)[0].dateInvoice);
              this.date = this.addDays(date, 7);
              sessionStorage.setItem('numbers', JSON.stringify(this.phoneNumbers));
            }
          })
          .catch(() => {
            this.info = 'Niepoprawne dane do logowania';
          });
    },
    addDays(theDate, days){
      return new Date(theDate.getTime() + days*24*60*60*1000);
    }

  }

};
</script>
<style>


.flexbox_horizontal {
  display: flex;
  flex-direction: row;
  width: 100%;
  padding: 20px;
}


.phone_info, .user_data_info {
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  border-radius: 5px;
  width: 100%;
}

.phone_info {
  padding: 50px 30px;
  box-shadow: -5px 5px 20px 1px #ddd;
  background-color: #fff;
}

.last_invoice, .user_numbers {
  box-shadow: -5px 5px 20px 1px #ddd;
  padding: 30px;
  border-radius: 5px;
  background-color: #fff;
  height: 100%;
  margin: 0 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;

}

.user_numbers {
  margin-bottom: 20px;
}

.phone_info {
  justify-content: center !important;
  text-align: center;
}

.phone_info .title {
  margin: 20px 0;
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
  margin: 5px;
}

.default_text {
  font-family: cg;
  font-size: 16px;
  color: #484848;
  font-weight: 500;
  margin: 5px;
}
@keyframes pulse {
  0% {
    transform: scale(0.95);
  }

  70% {
    transform: scale(1);
  }

  100% {
    transform: scale(0.95);
  }
}

.colored_text {
  text-decoration: underline;
  color: #91003d;
  margin: 5px;
  width: 50%;
}

</style>
