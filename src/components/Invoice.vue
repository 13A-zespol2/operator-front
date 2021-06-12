<template>

  <div class="main">
    <my-header/>

    <div class="container">

      <div class="flexbox_horizontal_invoices">

        <div class="payment_info" v-if="invoiceInfs.invoiceStatusEnum==='UNPAID'" v-for="invoiceInfs in invoiceInf" :key="'invoiceInfs'">

          <div class="payment_info_2col">
            <div class="amount">
              <p class="title">Invoice value</p>
              <p class="bold_title">{{invoiceInfs.price}} PLN</p>
            </div>
            <div  v-for="invoiceInfs in invoiceInf" :key="'invoiceInfs'">
            <div class="invoice_deadline" v-if="invoiceInfs.invoiceStatusEnum==='UNPAID'">
              <p class="title" >Invoice number</p>
              <p class="bold_title">{{invoiceInfs.invoiceNumber}}</p>
            </div>
            </div>

          </div>
          <GooglePay></GooglePay>
        </div>
        <div class="payment_info"  v-else-if="invoiceInf.invoiceStatusEnum==='PAID'" >

        </div>
          <div class="bank_info">
            <p class="title">Bank transfer details</p>
            <p class="default_text">CallingApp Inc.</p>
            <p class="default_text">1921 Harvest Lane</p>
            <p class="default_text">New York, NY 12210</p>
            <p class="default_text">Account number: <b> 4157 8545 1223 6974</b></p>
          </div>
        </div>

      <div class="flexbox_horizontal_invoices" >
        <div class="invoices">
          <p class="bold_title">Paid invoices</p>
          <p class="default_text"></p>
        </div>
      </div>

      <div class="flexbox_horizontal_invoices">
        <div class="invoices"  >
          <div v-for="invoiceInfs in invoiceInf" :key="'invoiceInfs'">
          <div class="panel panel-default"  v-if="invoiceInfs.invoiceStatusEnum === 'PAID'">
            <div class="panel-heading" role="tab">
              <div class="panel-ico-title" >
                <h4 class="panel-title">{{invoiceInfs.invoiceNumber}} , {{invoiceInfs.price}} PLN</h4>
                <i class="fas fa-chevron-up"></i>
              </div>
            </div>
            <div aria-labelledby="heading<?php echo $c ?>" class="panel-collapse collapse"
                 role="tabpanel">
              <div class="panel-body"></div>
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
import axios from "axios";
import endpoint from "../endpoint.json";
import Header from "@/components/Header";
import Login from "@/components/Login";
import GooglePay from "@/components/GooglePay";

export default {
  components: {
    GooglePay: () => import('@/components/GooglePay')
  },
  data() {
    return {
      components: {
        'my-header': Header,
        'my-login': Login,
        GooglePay
      },

        dataFromSession: [],
        invoiceInf: [],
    };
  },

  mounted() {
    this.getDataToInvoice()
  },
  methods:{
    getDataToInvoice(){
      this.dataFromSession = JSON.parse(sessionStorage.getItem('loggedIn'));
      axios.post(`${endpoint.url}/invoice`, this.dataFromSession)
      .then((response)=> {
        if(response.status == 200){
          this.invoiceInf = response.data;
          sessionStorage.setItem('invoices', JSON.stringify(this.invoiceInf))
        }
      })
      .catch(()=>{
        this.info = 'Lipa';
      })
    },



  }

}

</script>

<style scoped>
.flexbox_horizontal_invoices {
  display: flex;
  flex-direction: row;
  width: 100%;
}


.payment_info_2col {
  display: flex;
  justify-content: space-around;
  flex-direction: row;
  width: 100%;
  margin: 0 10px 30px;
}

.payment_info {
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  border-radius: 5px;
  width: 100%;
  padding: 50px 30px;
  box-shadow: 4px 4px 10px 3px #ccc;
  background-color: #fff;
  margin: 0 10px;
}

.bank_info {
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  border-radius: 5px;
  width: 100%;
  padding: 50px 30px;
  box-shadow: 4px 4px 10px 3px #ccc;
  background-color: #fff;
  margin: 0 10px;
}


.invoices {
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  border-radius: 5px;
  width: 100%;
  padding: 20px 30px;
  box-shadow: 4px 4px 10px 3px #ccc;
  background-color: #fff;
  margin: 0 10px;
  margin-top: 20px;
}


.payment_info {
  justify-content: center !important;
  text-align: center;
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
/*Your offer section*/
.button_payment {
  display: flex;
  flex-direction: row;
  justify-content: center;
  text-align: center;
  align-items: center;
  border: 5px solid #91003d;
  width: 200px;
  margin-top: 20px;
  padding: 10px 30px;
  font-weight: 900;
  animation: pulse 3s infinite;
  margin: auto;
  margin-top: 20px;
}

.button_payment:hover {
  transform: translateY(-3px);
}

.payment_logo {
  width: 50px;
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

.panel-ico-title {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  position: relative;
  padding: 0 30px;
}

.panel-ico-title i {
  margin-top: 20px;
}


.panel.panel-default {
  border-top: 1px solid #d1d1d1;
  border-bottom: 1px solid #d1d1d1;
}

.panel-collapse.collapse {
  padding: 0 30px;
  padding-bottom: 20px;
}

.panel.panel-default:hover {
  cursor: pointer;
}


.fa-chevron-up {
  transition: .7s ease;
}

</style>
