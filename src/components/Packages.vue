<template>
    <div class="main">
      <my-header/>
      <div class="container">
       <div class="number_to_set">
          <select name="phones" id="phones" v-model="selected_option">
            <option value="" disabled selected>Choose your number.</option>
            <option v-for="(number, index) in dataNumbers" :key="'number'+index" >{{number}}</option>
          </select>
        </div>

        <p class="bold_title">SMS</p>
        <div class="packages_flex" >
          <div class="package_info" v-for="(pack, index) in allPackages" :key="'pack'+index">
            <div v-bind:class="pack.packageType">
              <div v-if="pack.packageType === 'SMS'"><img src="../images/mail_icon.png"></div>
              <div v-if="pack.packageType === 'INTERNET'"><img src="../images/internet_icon.png"></div>
              <div v-if="pack.packageType === 'MINUTES'"><img src="../images/telephone_icon.png"></div>
            <p class="title">{{pack.namePackage}}</p>
            <p class="default_text">
            {{pack.description}}
            </p>

            <div class="bottom_flex_section">
              <p><b>{{ pack.price }} PLN</b></p>
              <a class="button_more" v-on:click="buyPackage(selected_option, pack.namePackage)"> BUY! </a>
            </div>
          </div>
          </div>
           </div>
        </div>
      <FlashMessage :position="'right top'"></FlashMessage>
      <my-footer/>
      </div>
</template>

<script>

import Header from "./Header";
import axios from "axios";
import endpoint from "../endpoint.json";
import $ from 'jquery';



export default {
  name: "packages",

  data() {
      return{
        components: {
          'my-header': Header,
        },
        allPackages: [],
        dataNumbers: [],
        numbersData: [],
        selected_option:'',
        package: [],
      }
  },

  mounted() {
    this.getDataToPackages();


  },

  methods: {

    getDataToPackages() {
      this.dataNumbers = JSON.parse(sessionStorage.getItem('numbers'));
      console.log(this.dataNumbers);
      axios.get(`${endpoint.url}/packages`)
          .then((response) => {
            if (response.status === 200) {
              console.log(response.data);
              this.allPackages = response.data;
              $(document).ready(function(){
                $('<div style="display: flex;justify-content: center;flex-direction: row;flex-wrap: nowrap;width: 100%;padding-bottom:50px;position: relative;" class="packages_flex" id="minutes_flex">').insertAfter($('.packages_flex'));
                $('<div style="display: flex;justify-content: center;flex-direction: row;flex-wrap: nowrap;width: 100%;padding-bottom:50px;position: relative;" class="packages_flex" id="internet_flex">').insertAfter($('.packages_flex'));
                $('.INTERNET').parent().appendTo('#internet_flex');
                $('.MINUTES').parent().appendTo('#minutes_flex');
                $('<p style="font-family: cg;font-size: 32px;color: #91003d;font-weight: 800;margin: 10px;" class="bold_title">MINUTES</p>').insertBefore($('#minutes_flex'));
                $('<p style="font-family: cg;font-size: 32px;color: #91003d;font-weight: 800;margin: 10px;" class="bold_title">INTERNET</p>').insertBefore($('#internet_flex'));
              });
            }
          })
          .catch(() => {

          });
    },


    buyPackage(number, aPackage){

      axios.post(`${endpoint.url}/packages/${number}/${aPackage}`)
          .then((response) => {
            if (response.status === 200) {
              this.flashMessage.success({
                status: 'success',
                title: 'Success!',
                message: 'You bought package for number '+this.selected_option,
                time: 2000
              })
            }
          })
          .catch(() => {
            if(this.selected_option === ''){
              this.flashMessage.warning({
                status: 'warning',
                title: 'Warning',
                message: 'Please choose your number!',
                time: 2000
              })
            }
          });
    }
  },
};

</script>

<style scoped>
select{
  width: 300px;
  background: #FFFFFF;
  border: 1px solid #E0E0E0;
  box-sizing: border-box;
  box-shadow: 0px 0px 10px 0px #91003d;
  border-radius: 5px;
  padding: 14px 25px;
  margin:40px 10px;
}
select:hover{
  cursor: pointer;
}
select:focus{
  outline: none;
}
.packages_flex {
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  position: relative;
  padding-bottom:50px;
}


.package_info {
  display: flex;
  justify-content: space-between;
  border-radius: 5px;
  width: 100%;
  padding: 30px 20px 20px;
  margin: 15px;
  box-shadow: 7px 7px 15px 7px #ccc;
  background-color: #fff;
  position: relative;
}

.package_info img {
  position: absolute;
  width: 150px;
  top: 20px;
  right: 25px;
  opacity: 0.06;
  pointer-events: none;
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
  color: #666;
  font-weight: 600;
  margin: 5px;
  margin-top:20px;
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
  display: inline-block;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  position: relative;
  margin-top: 10px;
  width: 100%;
}

.bottom_flex_section .package_off::before {
  content: '';
  position: absolute;
  width: 10px;
  height: 10px;
  border-radius: 20px;
  background-color: red;
  top: 0;
  bottom: 0;
  left: 4;
  margin: auto;
}

.bottom_flex_section .package_on::before {
  content: '';
  position: absolute;
  width: 10px;
  height: 10px;
  border-radius: 20px;
  background-color: green;
  top: 0;
  bottom: 0;
  left: 4;
  margin: auto;
}

.button_more {
  background-color: #fff;
  padding: 5px 15px 3px 25px;
  margin: 10px;
  width: auto;
  color: #91003d;
  font-size: 16px;
  font-weight: 500;
  transition: .5s ease;
  box-shadow: 3px 3px 0 0 #393939, inset 3px 3px 0 0 #393939;
  float: right;
}

.button_more:hover {
  background: transparent;
  box-shadow: 0 0 0 0 #000, inset 108px 72px 0 0 #000;
  transition: .5s ease;
  cursor: pointer;
  color: white;
}
</style>
