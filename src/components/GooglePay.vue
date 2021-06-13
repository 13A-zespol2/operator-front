<template>
    <google-pay-button
        environment="TEST"
        v-bind:button-type="buttonType"
        v-bind:button-color="buttonColor"
        v-bind:existing-payment-method-required="existingPaymentMethodRequired"
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
        v-on:loadpaymentdata="onLoadPaymentData"
        v-on:error="onError"
        v-bind:onPaymentAuthorized.prop="onPaymentDataAuthorized"
    ></google-pay-button>
</template>



<script>

import "@google-pay/button-element";
import Invoice from "./Invoice";
import axios from "axios";
import endpoint from "../endpoint.json";

export default {


  name: "GooglePay",
  props: {},
  data: () => ({
    components:{
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
    this.invoiceNumber = JSON.stringify(a[0].invoiceNumber);
  },

  methods: {
    onLoadPaymentData: event => {
      console.log('load payment data', event.detail);
    },
    onError: event => {
      console.error('error',event.error);
    },
    onPaymentDataAuthorized: (paymentData) => {
      console.log('payment authorized', paymentData)
      axios.put(`${endpoint.url}/invoice/payment`, {status: "SUCCESS",invoiceNumber: this.invoiceNumber})

      return {
        transactionState: "SUCCESS",
      };

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
