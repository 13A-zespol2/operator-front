<template>
  <google-pay-button
      environment="TEST"
      v-bind:button-color="buttonColor"
      v-bind:button-type="buttonType"
      v-bind:existing-payment-method-required="existingPaymentMethodRequired"
      v-bind:onPaymentAuthorized.prop="onPaymentDataAuthorized"
      v-bind:paymentRequest.prop="{
          apiVersion: paymentRequest.apiVersion,
          apiVersionMinor: paymentRequest.apiVersionMinor,
          allowedPaymentMethods: paymentRequest.allowedPaymentMethods,
          merchantInfo: paymentRequest.merchantInfo,
          transactionInfo: {
            totalPriceStatus: 'FINAL',
            totalPriceLabel: 'Total',
            totalPrice: amount,
            currencyCode: 'PLN',
            countryCode: 'PL',
          },
          callbackIntents: ['PAYMENT_AUTHORIZATION'],
        }"
      v-on:error="onError"
      v-on:loadpaymentdata="onLoadPaymentData"
  ></google-pay-button>
</template>


<script>
import axios from 'axios'
import endpoint from '../endpoint.json';
import "@google-pay/button-element";
import Invoice from "./Invoice";

export default {


  name: "GooglePay",
  props: {},
  data: () => ({
    components: {
      Invoice
    },

    invoiceNumber: '',

    amount: '0.00',
    existingPaymentMethodRequired: true,
    buttonColor: 'default',
    buttonType: 'buy',

    paymentRequest: {
      apiVersion: 2,
      apiVersionMinor: 0,
      allowedPaymentMethods: [
        {
          type: 'CARD',
          parameters: {
            allowedAuthMethods: ['PAN_ONLY', 'CRYPTOGRAM_3DS'],
            allowedCardNetworks: ['MASTERCARD', 'VISA'],
          },
          tokenizationSpecification: {
            type: 'PAYMENT_GATEWAY',
            parameters: {
              gateway: 'example',
              gatewayMerchantId: "exampleGatewayMerchantId",
            }
          }
        }
      ],
      merchantInfo: {
        merchantId: '12345678867967781',
        merchantName: 'Operator Merchant'
      }
    }

  }),

  created() {
    let a = JSON.parse(sessionStorage.getItem('invoices'));
    this.amount = JSON.stringify(a[0].price);
    console.log(a)
    this.invoiceNumber = JSON.stringify(a[0]);
    console.log(this.invoiceNumber)
  },

  methods: {
    onLoadPaymentData: event => {

      console.log('load payment data', event.detail);
    },
    onError: event => {
      console.error('error', event.error);
    },
    onPaymentDataAuthorized(paymentData) {
      console.log('payment authorized', paymentData)
      this.changeStatus()
      return {
        transactionState: "SUCCESS",

      };

    },

    changeStatus() {
      console.log(this.invoiceNumber)
      const number= {
       invoiceNumber: this.invoiceNumber
      }
      axios.put(`${endpoint.url}/invoice/payment`,JSON.parse(this.invoiceNumber))
          .then((response) => {
            if (response.status === 200) {
              this.$router.push('/invoice');
            }
          })
    }
  }
}
</script>

<style scoped>
.example {
  margin: 5px;
  display: flex;
  flex-direction: row;
}

.example > .demo {
  flex: 1 0 0;
}

.example > .demo > * {
  margin: 1px;
}
</style>
