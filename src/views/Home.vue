<template>
  <div id="app">
    <Countdown/>
    <!-- <TestCD/> -->
  </div>
</template>

<script>
import Countdown from '../components/Countdown.vue'
// import TestCD from './components/TestCD'

export default {
  name: 'App',
  components: {
    Countdown,

    // TestCD
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Red+Hat+Display:wght@400;700&display=swap');

* {
  font-family: 'Red Hat Display', sans-serif;
  padding: 0px;
  margin: 0px;
}
</style>
