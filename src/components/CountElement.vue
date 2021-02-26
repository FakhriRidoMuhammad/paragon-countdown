<template>
  <div class="bg">
      <div class="num">{{number}}</div>
      <div class="text">{{text}}</div>
  </div>
</template>

<script>
export default {
    name: "CountElement",
    components:{

    },
    data: function () {
    return {
        number,
        text, 
    }
  }
}
</script>

<style scoped>
.bg{
    top: 345px;
    left: 379px;
    width: 135px;
    height: 136px;
    background: #6399C7 0% 0% no-repeat padding-box;
    box-shadow: 0px 3px 6px #00000029;
    border-radius: 10px;
    opacity: 1;
}
.num{
    top: 363px;
    left: 401px;
    width: 92px;
    height: 86px;
    text-align: left;
    font: normal normal bold 65px/86px Red Hat Display;
    letter-spacing: 3.25px;
    color: #FFFFFF;
    opacity: 1;
}
.text{
    /* top: 437px;
    left: 423px; */
    width: 50px;
    height: 50px;
    text-align: left;
    font: normal normal normal 20px/26px Red Hat Display;
    letter-spacing: 1.2px;
    color:#FFFFFF;
    opacity: 1;
}
</style>