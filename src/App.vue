<template>
  <v-app>

    <v-main
        :style="{ 'background': 'url(' + require('/src/images/lines_background.png') + ') no-repeat ', 'background-size': '100% 100%'}">
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'App',

  components: {},

  data: () => ({
    //
  })



};
</script>
<style>
v-main {
  background-image: url("/src/images/lines_background.png");
}

.container {
  max-width: 1200px;
  margin: auto;
  padding: 70px 25px 150px;
}

@font-face {
  font-family: "cg";
  src: local("cg"), url(./fonts/CenturyGothic.ttf) format("truetype");
}

::-webkit-scrollbar {
  width: 13px;
}

::-webkit-scrollbar-track {
  border-left: 1px solid #fff;
}

::-webkit-scrollbar-thumb {
  background: #ccc;
}

::-webkit-scrollbar-track-piece {
  background: #fff;
}


a {
  color: black !important;
}

a:hover {
  color: #91003d !important;
}


.button_payment {
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

body {
  background-image: url("/src/images/lines_background.png");
}

.button_payment:hover {
  transform: translatex(-15px);
  border-top: 4px solid #91003d;
  border-left: 4px solid #91003d;
  border-bottom: 8px solid #91003d;
  border-right: 8px solid #91003d;
}

.payment_logo {
  width: 20px;
  margin: 0 10px;
}


::selection {
  color: #001c80;
  /*	background-color: rgba(65,65,65,0.02);*/
}
</style>