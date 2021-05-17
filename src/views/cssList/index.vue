<template>
  <div class="about">
    <number-one></number-one>
    <number-three></number-three>
    <number-five></number-five>
    <number-seven></number-seven>
    <number-nine></number-nine>
    <number-eleven></number-eleven>
    <number-thirteen></number-thirteen>
    <number-two></number-two>
    <number-four></number-four>
    <number-six></number-six>
    <number-eight></number-eight>
    <number-fifteen></number-fifteen>
  </div>
</template>

<script>
import numberOne from "./1.vue";
import numberThree from "./3";
import numberFive from "./5.vue";
import numberSeven from "./7";
import numberNine from "./9";
import numberEleven from "./11";
import numberThirteen from "./13";
import numberTwo from "./2.vue";
import numberFour from "./4.vue";
import numberSix from "./6.vue";
import numberEight from "./8.vue";
import numberFifteen from "./15.vue";
export default {
  data() {
    return {};
  },
  components: {
    numberOne,
    numberThree,
    numberFive,
    numberSeven,
    numberNine,
    numberEleven,
    numberThirteen,
    numberTwo,
    numberFour,
    numberSix,
    numberEight,
    numberFifteen,
  },
};
</script>
<style>
.about > div {
  border: 1px solid #ccc;
}
</style>
