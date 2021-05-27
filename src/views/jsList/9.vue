<template>
  <div>
    <h1>9.10 call apply bind区别和用法</h1>
    <pre>
        call apply 的共同点就是能改变函数执行时的上下文，将一个对象的方法交给另一个对象来执行
        并且是立即执行的
        但是bind 不是立即执行，是创建一个新的函数，然后执行新的函数才会执行
        call 写法 
        Function.call(obj,[param1[,param2[,…[,paramN]]]])
        apply 写法
        Function.apply(obj,[argArray])
        call 后面跟的参数可以是数组可以是多个参数
        apply 后面跟的参数是数组或者类数组
        bind 后面跟的参数可以是数组可以是多个参数
        类数组的一种处理方式
        let domNodes = Array.prototype.slice.call(document.getElementsByTagName("*"));
        apply的一些小妙招，找数组的最大值和最小值
        let max = Math.max.apply(null, array);
        let min = Math.min.apply(null, array);
    </pre>

    <pre></pre>
  </div>
</template>

<script>
export default {
  methods: {}
}
</script>

<style lang="scss" scoped>
</style>
