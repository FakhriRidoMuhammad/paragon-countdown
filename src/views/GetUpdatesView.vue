<template>
  <div class="container">
      <div class="bg">
        <router-link to="/">
        <img src="../../src/assets/Back Icon.png">
        </router-link>
        <div class="tittle">Get Updates!</div>
        <div>
          <div>input form</div>
          <div>input form</div>
          <div>input form</div>
        </div>
        <BtnSendNow/>
      </div>
  </div>
</template>

<script>
import BtnSendNow from '../components/BtnSendNow.vue'

export default {
components:{
  BtnSendNow
}
}
</script>

<style scoped>
.bg{
    width: 415px;
    height: 405px;
    background: #365DA5 0% 0% no-repeat padding-box;
    box-shadow: 0px 3px 6px #00000029;
    border-radius: 15px;
    opacity: 1;
}
.tittle{
  width: 204px;
  height: 40px;
  text-align: center;
  font: normal normal bold 30px/40px Red Hat Display;
  letter-spacing: 1.5px;
  color: #FFFFFF;
  opacity: 1;
}
</style>