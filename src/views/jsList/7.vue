<template>
  <div>
    <h1>立即执行函数</h1>
    <pre>
        在说立即执行函数之前，先说说函数
        函数有两种书写形式
        1： 函数声明 function func () {}
        2: 函数表达式 var func = function (){}
        二者的对比
        在代码执行的时候，会先对函数声明的函数，进行解析(函数声明提升)，而函数表达式，当逐行执行到他时，才会解析
        这也是为什么函数声明的书写位置，可以放在调用之后。而函数表达式的书写位置，必须放在调用之前

    </pre>
    <pre>
        javascript引擎规定，如果function关键字出现在行首，一律解释成函数声明语句，

        解决方法就是不要让function出现在行首，让引擎将其理解成一个表达式。
        //常用的两种,使用圆括号运算符
            (function(){console.log("666")})()
            (function(){console.log("666")}())
            
            //一元运算符写法
            !function(){console.log("666")}()
            +function(){console.log("666")}()
            -function(){console.log("666")}()
            ~function(){console.log("666")}() // 在jq里见过这个

    </pre>
    <pre>
        声明一个函数，并且马上调用这个匿名函数，就叫立即执行函数。也可以说，立即执行函数是一种语法，让你的函数在定义后，就立即执行
        语法  (function(){//代码})()

    </pre>
    <pre>
        作用
        1. 不必为函数命名，避免污染全局变量
        2. 立即执行函数内部形成一个单独的作用域，可以封装一些外部无法访问的私有变量
    </pre>
    <pre style="color: green; font-size: 20px">
        详细见 jsList/7.vue
    </pre>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
</style>