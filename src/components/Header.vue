<template>
  <div>
    <div class="topbar">
    </div>

    <header>
      <div class="header">
        <div class="not_full_page">
          <div class="logo">
            <a v-on:click="changeRoute('/dashboard')"><img class="logo_img" src="../images/logo.png"></a>
          </div>

          <div class="default_menu">
            <ul>
              <a v-on:click="changeRoute('/invoice')">
                <li>Invoices</li>
              </a>
              <a v-on:click="changeRoute('/numbers')">
                <li>Numbers</li>
              </a>
              <a v-on:click="changeRoute('/packages')">
                <li>Packages</li>
              </a>
              <a v-on:click="logout()">
                <li>Logout</li>
              </a>
            </ul>
          </div>
        </div>
      </div>
    </header>
  </div>

</template>

<script>

import axios from "axios";

export default {
  data: () => ({
    dialog: false,
    drawer: null,
    path: '',
  }),
  methods:
      {
        changeRoute(route) {
          this.$router.push(route).catch(error => {
            if(error.name !== "NavigationDuplicated"){
              throw error;
            }
          });
        },
        logout() {
          sessionStorage.removeItem('loggedIn');
          axios.get('/')
              .then((response) => {
                if (response.status === 200) {
                  sessionStorage.removeItem('loggedIn');
                  this.$router.push('/');
                }
              })
              .catch(() => {
              });
        },
      }
}


</script>

<style scoped>
template {
  margin: 0;
  border: none;
  border-radius: 0px;
  overflow-x: hidden;
  min-height: 100vh;
}

.topbar {
  height: 10px;
  width: 100vw;
  background-color: #91003d;
  position: fixed;
  top: 0;

}

/*Header styling*/
.header {
  display: flex;
  justify-content: center;
  flex-direction: row;
  flex-wrap: nowrap;
  width: 100%;
  background-color: #fff;
  border-bottom: 2px solid #eee;
  padding: 0;
  margin: 0;
}

.default_menu a {
  text-decoration: none !important;
}

.not_full_page {
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  flex-wrap: nowrap;
  background-color: #fff;
  padding: 15px 0;
  width: 100%;
  margin: 0;
  max-width: 1200px;
}

.logo {
  max-width: 30%;
  margin: 0;
}

.header ul {
  list-style-type: none;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  height: 100%;
}

.header ul li {
  color: #91003d;
  padding: 0 20px;
  font-size: 18px;
  font-family: cg, serif;
  font-weight: 900;
}


h1, h2, h3, h4, h5, h6, p, span, ul, li, a, div {
  font-family: cg, serif;

}


footer {
  width: 100vw;
  padding: 0;
  border-top: 2px solid #eee;
  background-color: #91003d;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
}


footer p {
  text-align: center;
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


::selection {
  color: #001c80;
  /*	background-color: rgba(65,65,65,0.02);*/
}

</style>
