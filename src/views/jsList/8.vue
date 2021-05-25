<template>
  <div>
        <h1>8 .instanceof</h1>
        <div>typeof 一般被用于判断一个变量的类型，我们可以利用 typeof 来判断number,  string,  object,  boolean,  function, undefined,  symbol 这七种类型，这种判断能帮助我们搞定一些问题，比如在判断不是 object 类型的数据的时候，typeof能比较清楚的告诉我们具体是哪一类的类型。但是，很遗憾的一点是，typeof 在判断一个 object的数据的时候只能告诉我们这个数据是 object, 而不能细致的具体到是哪一种 object</div>
        <div>要想判断一个数据具体是哪一种 object 的时候，我们需要利用 instanceof 这个操作符来判断</div>
        <div>Object.prototype.toString.call 可以精准的判断数据类型</div>
        <div style="color: red">
            <br/>function new_instance_of(leftVaule, rightVaule) { 
                <br/> let rightProto = rightVaule.prototype; // 取右表达式的 prototype 值
                <br/> leftVaule = leftVaule.__proto__; // 取左表达式的__proto__值
                <br/> while (true) {
                <br/>     if (leftVaule === null) {
                <br/>        return false;	
                <br/>    }
                <br/>    if (leftVaule === rightProto) {
                <br/>        return true;	
                <br/>    } 
                <br/>    leftVaule = leftVaule.__proto__ 
                <br/>}
            <br/>}
        </div>
        <div style="font-weight: 900;">
           <br/> let person = function () {
            <br/>}
            <br/>let programmer = function () {
           <br/> }
           <br/> programmer.prototype = new person()
            <br/>let nicole = new programmer()
           <br/> nicole instanceof person // true
           <br/> nicole instanceof programmer // true
        </div>
        <div style="color: green">
            分析结果
            <br/>leftValue = Object.__proto__ = Function.prototype;
            <br/>rightValue = Object.prototype;
            <br/>// 第一次判断
            <br/>leftValue != rightValue
            <br/>leftValue = Function.prototype.__proto__ = Object.prototype
            <br/>// 第二次判断
            <br/>leftValue === rightValue
            <br/>// 返回 true
        </div>
  </div>
</template>

<script>
export default {
  methods: {}
}
</script>

<style lang="scss" scoped>
</style>
