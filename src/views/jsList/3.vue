<template>
  <div>
        <h1>3. 作用域</h1>
       <p> 内部环境可以通过作用域链访问所有外部环境，但外部环境不能访问内部环境的任何变量和函数。
        <br/>为什么for 循环中用let 可以实现正常循环，var不行，因为var 导致变量提升，然后会先执行函数，而忽略异步操作
        <br/>但是let 会在for循环中一次次定义，相当于闭包，作用域循环中的操作，会正常循环出参数
        <br/>for(let i = 0; i < 3; i++) {
        <br/>setTimeout(() => {
         <br/>   console.log(i)
        <br/>})
        <br/>}
        <br/>try...catch的catch 和with 语句会延长作用域链
        <br/>作用域链其实是一个很简单的概念，当我们使用一个变量时，先在当前作用域查找，如果没找到就去他外层作用域查找，如果还没有，就再继续往外找，一直找到全局作用域，如果最终都没找到，就报错
        </p>
  </div>
</template>

<script>
export default {
  methods: {}
}
</script>

<style lang="scss" scoped>
</style>
