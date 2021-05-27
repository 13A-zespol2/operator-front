<template>
  <div>
    <div class="topbar">
    </div>

    <header>
      <div class="header">
        <div class="not_full_page">
          <div class="logo">
            <img class="logo_img" src="../images/logo.png">
          </div>

          <div class="default_menu">
            <ul>
              <a href="homepage.html">
                <li>Home</li>
              </a>
              <a href="invoices.html">
                <li>Invoices</li>
              </a>
              <a href="numbers.html">
                <li>Numbers</li>
              </a>
              <a href="history.html">
                <li>History</li>
              </a>
              <a href="usage.html">
                <li>Usage</li>
              </a>
              <a href="packages.html">
                <li>Packages</li>
              </a>
              <a href="contact.html">
                <li>Contacts</li>
              </a>
              <a href="contact.html">
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


</script>

<style scoped>
template{
  margin:0;
  border:none;
  border-radius: 0px;
  overflow-x: hidden;
  min-height:100vh;
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
}

.header ul li {
  color: #91003d;
  padding: 0 20px;
  font-size: 18px;
  font-family: cg,serif;
  font-weight: 900;
}


h1, h2, h3, h4, h5, h6, p, span, ul, li, a, div {
  font-family: cg,serif;

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
