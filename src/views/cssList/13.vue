<template>
  <div>
    <h1>13. 浮动以及清除浮动</h1>
    <pre>
        浮动元素同时处于常规流内和流外的元素。其中块级元素认为浮动元素不存在，
        而浮动元素会影响行内元素的布局，浮动元素会通过影响行内元素间接影响了包含块的布局
    </pre>
    <h3>清除浮动</h3>
    <pre>
 应为浮动的元素是脱离文档流的，所以使用了浮动，会导致容器的高度不能自动伸长以适应内容的高度，会影响布局</pre
    >
    <pre>
        清除浮动的方法：
    </pre>
    <pre>
        使用带clear属性的空元素
        在浮动元素后使用一个空元素如<div class="clear"></div>，并在CSS中赋予.clear{clear:both;}
    </pre>
    <pre>
       使用CSS的:after伪元素
   </pre
    >

    <pre>
       总结：
       一是利用 clear 属性，包括在浮动元素末尾添加一个带有 clear: both 属性的空 div 来闭合元素，其实利用 :after 伪元素的方法也是在元素末尾添加一个内容为一个点并带有 clear: both 属性的元素实现的。

二是触发浮动元素父元素的 BFC (Block Formatting Contexts, 块级格式化上下文)，使到该父元素可以包含浮动元素，详细见BFC
   </pre
    >
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
</style>
