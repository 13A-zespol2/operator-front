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
              <a class="button_default">Change PIN</a>
            </div>

            <div class="user_data_info">
              <div class="user_packages">
                <p class="title"> Your offer </p>
                <p class="bold_title">Subscription premium ++</p>
              </div>

              <div class="user_numbers">
                <p class="title"> Your main number</p>
                <p class="bold_title">+48 537 221 880</p>
                <p class="colored_text">Your other numbers</p>
                <p class="colored_text">Register new number</p>
              </div>

              <div class="last_invoice">
                <p class="title"> Last invoice</p>
                <p class="bold_title">75.67$</p>
                <p class="default_text">Document number: <b>FV/24561234132/05/2021</b></p>
                <p class="colored_text">Your invoices</p>
                <p class="default_text">Payable to: <b>19.05.2021</b></p>
                <p class="default_text" style="color:red;font-weight:700;">Not paid yet 🙄</p>
                <p class="default_text">You have <b>6 days</b> to realize your payment!</p>
                <a class="button_payment">Pay now with <img alt="tekst" class="payment_logo"
                                                            src="../images/payu_logo.png"></a>
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

export default {

  data() {
    return {
      components: {
        'my-header': Header
      }
    };

  },

  mounted() {
   console.log()
  },

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

.user_packages, .last_invoice, .user_numbers {
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

.user_packages, .user_numbers {
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

.button_default {
  background-color: #fff;
  padding: 10px 35px;
  margin: 10px 0;
  text-align: center;
  width: 200px;
  color: #91003d;
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


/*Your offer section*/
.button_payment {
  display: flex;
  flex-direction: row;
  justify-content: center;
  text-align: center;
  align-items: center;
  border: 5px solid #91003d;
  width: 100%;
  margin-top: 20px;
  padding: 10px 30px;
  font-weight: 900;
  animation: pulse 3s infinite;
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

.colored_text {
  text-decoration: underline;
  color: #91003d;
  margin: 5px;
}

</style>
