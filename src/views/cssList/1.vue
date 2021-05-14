<template>
  <div>
    <div>
      <h1>1. css盒模型</h1>
      <pre>
        css盒模型：
        所有html元素都可以视为方框，css盒模型实质上就是包围每一个html元素的框

        盒模型构成要素：content, padding, margin, border

        标准盒模型：
        宽度： width = content

        IE盒模型：
        宽度： width = content + padding + border

        设置盒模型:
        利用css3新增属性 box-sizing: content-box | border-box
        分别设置盒模型为标准模型（content-box）和IE模型（border-box）

        get:
        项目中经常使用box-sizing: border-box 设置为IE模型。
    </pre
      >
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
</style>
