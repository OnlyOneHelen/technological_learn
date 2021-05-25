<template>
  <div>
    <h1>6. this指向</h1>
    <pre>
        1. 在函数中直接使用,this指向全局对象window


        2. 当函数作为对象的方法被调用,该对象就是调用上下文，this指向该对象
    </pre>
    <h1>箭头函数中的this</h1>
    <pre>
        由于箭头函数是在定义的时候绑定的，而不是在执行的时候绑定的。所谓的定义时绑定的，就是this继承自父级上下文的this
    </pre>
    <pre>

        1. 独立函数：箭头函数在全局环境定义，this指向window

        2. 对象的方法: 如果该对象的this指向window，那么箭头函数也指向window，如果该对象指向嵌套外的对象,那么箭头函数保持一致

        3.箭头函数没有自己的this，所以不能用作构造函数，否则会报错 
        
    </pre>
    <pre style="color: green; font-size: 20px">
        详细见 jsList/6.vue
    </pre>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
</style>