<template>
  <div>
    <h1>5. flex 布局</h1>
    <p>概念: 弹性布局，为盒模型提供最大的灵活性</p>
    <pre>
         容器属性：
         flex-direction
         flex-wrap
         justify-content
         align-items
         align-content

         项目属性:
         order
         flex-grow: 定义项目的放大比例。默认是0,即使存在剩余空间，也不放大

         如果所有项目的flex-grow属性都为1，则它们将等分剩余空间（如果有的话）。
         如果一个项目的flex-grow属性为2，其他项目都为1，则前者占据的剩余空间将比其他项多一倍。

         flex-shrink: 定义了项目的缩小比例。默认是1，既空间不足，该项目会缩小

         如果所有项目的flex-shrink属性都为1，当空间不足时，都将等比例缩小。
         如果一个项目的flex-shrink属性为0，其他项目都为1，则空间不足时，前者不缩小。

         flex-basis：属性定义了在分配多余空间之前，项目占据的主轴空间（main size）。
         浏览器根据这个属性，计算主轴是否有多余空间。它的默认值为auto，即项目的本来大小。

 <p style="color:red">
         flex属性是flex-grow, flex-shrink 和 flex-basis的简写，默认值为0 1 auto。后两个属性可选。
             </p>
    </pre>
  </div>
</template>

<script setup>
</script>

<style lang="scss" scoped>
</style>
