<template>
  <div>
    <h1>1. 原型链</h1>
    在说原型链之前，有必要了解一下，原型(显示原型，隐式原型)
    <pre>
        1.1 什么原型

        所有的引用类型，都有一个__proto__ (隐式原型)属性，属性是一个普通对象
        所有的函数，都有一个prototype(显式原型)属性，属性值是一个普通对象
        所有引用类型的__proto__ 都指向他的构造函数的prototype

        所以函数既有隐式原型也有显示原型
        </pre
    >
    <pre>
        1.2 什么是原型链
        当访问某个对象的属性时,会在这个对象本身的属性上查找，如果没有找到，就去他的__proto__查找，
        既他的构造函数的prototype查找。如果没有找到，就去构造函数的prototype.__proto__查找。
        这样一层一层的查找，会形成一个链式结构，就叫原型链
    </pre>
    <pre>
        一直往上查找，知道找到为null，还没有找到，就返回undefined。
        因为原型链的顶端 Object.prototype.__proto__ === null // true

    </pre>

    <pre>
        1.3原型的作用

        共享原型上的方法
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
