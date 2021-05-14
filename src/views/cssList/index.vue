<template>
  <div class="about">
    <number-one></number-one>
    <number-three></number-three>
    <number-five></number-five>
    <number-seven></number-seven>
    <number-nine></number-nine>
    <number-eleven></number-eleven>
    <number-thirteen></number-thirteen>
  </div>
</template>

<script>
import numberOne from './1.vue'
import numberThree from './3'
import numberFive from './5.vue'
import numberSeven from './7'
import numberNine from './9'
import numberEleven from './11'
import numberThirteen from './13'

export default {
  data () {
    return {}
  },
  components: {
    numberOne,
    numberThree,
    numberFive,
    numberSeven,
    numberNine,
    numberEleven,
    numberThirteen
  }
}
</script>
