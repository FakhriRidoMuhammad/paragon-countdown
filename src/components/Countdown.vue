<template>
<div class="container px-4">
    <div class="blue-bg mx-auto col-12 justify-content-center">
        <div class="tittle col-8 my-3 px-0">We Are Launching Soon</div>
        <div class="text my-3 col-6 mx-auto">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed</div>
        <div class="row d-flex my-4 justify-content-center">
            <CDdays class="col-md-2 mx-2"/>
            <CDhours class="col-md-2 mx-2"/>
            <CDminutes class="col-md-2 mx-2"/>
            <CDseconds class="col-md-2 mx-2 content-desktop"/>
        </div>
        <div class="col-lg-4 my-5 mx-auto justify-content-center"><BtnGetUpdates/></div>
        
  </div>
</div>
</template>

<script>
// import CountElement from './CountElement.vue'
import CDdays from './CountElements/CD_days.vue'
import CDhours from './CountElements/CD_hours.vue'
import CDminutes from './CountElements/CD_minutes.vue'
import CDseconds from './CountElements/CD_seconds.vue'
import BtnGetUpdates from './BtnGetUpdates'

export default {
    name: "Countdown",
    components:{
        // CountElement,
        CDdays,
        CDhours,
        CDminutes,
        CDseconds,
        BtnGetUpdates
    }
}
</script>

<style scoped>
.blue-bg{
    width: 735px;
    height: 510px;
    background: #365DA5 0% 0% no-repeat padding-box;
    box-shadow: 0px 3px 6px #00000029;
    border-radius: 15px;
    opacity: 1;
}

.tittle{
    width: 496px;
    height: 53px;
    text-align: left;
    font: normal normal bold 40px/53px Red Hat Display;
    letter-spacing: 2.4px;
    color: #FFFFFF;
    opacity: 1;
}

.text{
    width: 294px;
    height: 51px;
    text-align: center;
    font: normal normal normal 18px/23px Red Hat Display;
    letter-spacing: 1.08px;
    color: #ECECEC;
    opacity: 1;
}

.content-desktop {
    display: block;
}

.content-mobile {
    display: none;
}

@media screen and (max-width: 750px) {
    .content-desktop {
        display: none;
    }
    .content-mobile {
        display: block;
    }
}
</style>