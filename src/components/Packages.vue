<template>
    <div class="main">
      <my-header/>
      <div class="container">
        <p class="bold_title">SMS / MMS</p>
        <div class="packages_flex">
          <div class="package_info">
            <img src="../images/telephone_icon.png">
            <p class="title">170 messages</p>
            <p class="default_text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
              Ipsum
              has been the industry's standard dummy text ever since the 1500s.</p>
            <div class="bottom_flex_section">
              <p class="bottom_text package_off">Off</p>
              <a class="button_more">More info</a>
            </div>
          </div>
          <div class="package_info">
            <img src="../images/telephone_icon.png">
            <p class="title">Unlimited</p>
            <p class="default_text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
              Ipsum
              has been the industry's standard dummy text ever since the 1500s.</p>
            <div class="bottom_flex_section">
              <p class="bottom_text package_on">On</p>
              <a class="button_more">More info</a>
            </div>
          </div>
        </div>

        <div class="separator"></div>

        <p class="bold_title">Minutes</p>
        <div class="packages_flex">
          <div class="package_info">
            <img src="../images/mail_icon.png">
            <p class="title">120 minutes</p>
            <p class="default_text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
              Ipsum
              has been the industry's standard dummy text ever since the 1500s.</p>
            <div class="bottom_flex_section">
              <p class="bottom_text package_off">Off</p>
              <a class="button_more">More info</a>
            </div>
          </div>
          <div class="package_info">
            <img src="../images/mail_icon.png">
            <p class="title">200 minutes</p>
            <p class="default_text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
              Ipsum
              has been the industry's standard dummy text ever since the 1500s.</p>
            <div class="bottom_flex_section">
              <p class="bottom_text package_off">Off</p>
              <a class="button_more">More info</a>
            </div>
          </div>
          <div class="package_info">
            <img src="../images/mail_icon.png">
            <p class="title">Unlimited</p>
            <p class="default_text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
              Ipsum
              has been the industry's standard dummy text ever since the 1500s.</p>
            <div class="bottom_flex_section">
              <p class="bottom_text package_on">On</p>
              <a class="button_more">More info</a>
            </div>
          </div>
        </div>
      </div>
      <my-footer/>
    </div>
</template>

<script>
export default {
  name: "packages"
}
</script>

<style scoped>
.packages_flex {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  position: relative;
}


.package_info {
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  border-radius: 5px;
  width: 28%;
  justify-content: flex-start !important;
  padding: 30px 20px 20px;
  margin: 10px;
  box-shadow: -5px 5px 20px 1px #ddd;
  background-color: #fff;
  position: relative;
}

.package_info img {
  position: absolute;
  width: 150px;
  top: 40px;
  right: 10px;
  opacity: 0.05;
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
  color: #484848;
  font-weight: 500;
  margin: 5px;
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
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  position: relative;
  margin-top: 10px;
}

.bottom_text {
  margin: 0 0 0 20px;
  font-size: 12px;
  font-weight: 900;
  color: black;
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
  margin: 10px 0;
  width: auto;
  color: #91003d;
  font-size: 16px;
  font-weight: 500;
  transition: .5s ease;
  box-shadow: 3px 3px 0 0 #393939, inset 3px 3px 0 0 #393939;
}

.button_more:hover {
  background: transparent;
  box-shadow: 0 0 0 0 #000, inset 108px 72px 0 0 #000;
  transition: .5s ease;
  cursor: pointer;
  color: white;
}

</style>
