<template>
  <div class="about">
    <number-one></number-one>
    <number-two></number-two>
    <number-three></number-three>
    <number-four></number-four>
    <number-eight></number-eight>
    <number-six></number-six>
    <number-seven></number-seven>
    <number-nine></number-nine>
    <number-eleven></number-eleven>
    <number-twelve> </number-twelve>
    <number-fifteen></number-fifteen>
    <number-sixteen></number-sixteen>
  </div>
</template>

<script>
import numberOne from "./1.vue";
import numberTwo from "./2.vue";
import numberThree from "./3.vue";
import numberFour from "./4.vue";
import numberEight from "./8.vue";
import numberSix from "./6";
import numberSeven from "./7";
import numberNine from "./9.vue";
import numberEleven from "./11";
import numberTwelve from "./12";
import numberFifteen from "./15.vue";
import numberSixteen from "./16.vue";

export default {
  data() {
    return {};
  },
  components: {
    numberOne,
    numberTwo,
    numberFour,
    numberThree,
    numberEight,
    numberSix,
    numberSeven,
    numberNine,
    numberEleven,
    numberTwelve,
    numberFifteen,
    numberSixteen,
  },
};
</script>
<style>
.about > div {
  border: 1px solid #ccc;
}
</style>
