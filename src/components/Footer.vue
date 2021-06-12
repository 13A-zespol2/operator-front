<template>
  <div id="footer">

      <div class="footer_col">
        <p>Created By: Wojciech Grelewicz, Dominik Łataś, Paweł Zacharz, Karol Mik</p>
      </div>

  </div>
</template>


<script>

</script>


<style scope>

#footer{
  width:100vw;
  padding: 0px;
  border-top:2px solid #eee;
  background-color: #91003d;
  position: fixed;
  bottom:0;
  left:0;
  right:0;
  margin:auto;
  z-index: 999999;
}

.footer_col{
align-items: center;
  background-color: #91003d;
  max-width:100%;
  height:50px;
  padding:0;
  margin:0;
  overflow:hidden;
  color: white;
  display:flex;
  flex-direction: row;
  justify-content: space-between;
  max-width:1180px;
  margin:auto;
  font-weight:500;
}
.footer_col p {
  margin-top: 15px;
  margin-left: 25%;
}




</style>
