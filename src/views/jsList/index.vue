<template>
  <div class="about">
    <number-one></number-one>
  </div>
</template>

<script>
import numberOne from './1.vue'

export default {
  data () {
    return {}
  },
  components: {
    numberOne
  }
}
</script>
<style>
.about > div {
  border: 1px solid #ccc;
}
</style>
