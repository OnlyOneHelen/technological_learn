<template>
  <div class="about">
    <number-one></number-one>
    <number-two></number-two>
    <number-three></number-three>
    <number-four></number-four>
    <number-eight></number-eight>
    <number-six></number-six>
    <number-seven></number-seven>
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
  },
};
</script>
<style>
.about > div {
  border: 1px solid #ccc;
}
</style>
