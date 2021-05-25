<template>
  <div class="about">
    <number-one></number-one>
    <number-two></number-two>
    <number-three></number-three>
    <number-four></number-four>
    <number-five></number-five>
    <number-six></number-six>
    <number-seven></number-seven>
    <number-eight></number-eight>
    <number-nine></number-nine>
    <number-ten></number-ten>
    <number-eleven></number-eleven>
    <number-twelve> </number-twelve>
    <number-thirteen></number-thirteen>
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
import numberTen from "./10.vue";
import numberTwelve from "./12.vue";
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
    numberTen,
    numberTwelve,
  },
};
</script>
<style>
.about > div {
  border: 1px solid #ccc;
}
</style>
