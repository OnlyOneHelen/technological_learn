<template>
  <div>
    <h1>15. 移动端适配</h1>
    <pre>
       15.1 em : em作为font-size单位属性时，其代表父元素的字体大，em作为其他属性单位使用时，代表自身字体大小
      比如父元素是font-size: 12px ,
      自身元素如果写成font-size: 2em.则自身元素用px，就是24px（相对于父元素的大小）
      但是自身元素设置width:2rem, 那么自身元素用px就是48px，相对于自身大小
       </pre
    >
    <pre>
      15.2 rem: rem作为非根元素时，相对于根元素的字体大小。作用于根元素时，相对于其初始化字体大小

      比如根元素（html）设置font-size=12px; 非根元素设置width:2rem;则换成px表示就是24px；

      如果根元素设置成font-size=1rem;则根元素换成px就是相对于初始字体大小，一般是12px；
</pre
    >
    <pre>

      15.3: vw/vh
      vw ：视口宽度的 1/100；vh ：视口高度的 1/100 —— MDN
   </pre
    >
    <pre>
       rem是一种弹性布局，他强调等比缩放，100%还原。他和响应式布局不一样，强调不同屏幕要有不同的显示，比如媒体查询。
    </pre>

    <pre>
      比较：
      em:  一旦某个节点的字体大小发生变化，其他节点也随之变化，所以不合适，但是用来处理字体还是绝妙的。
      rem：字体并不合适使用rem, 字体的大小和字体宽度，并不成线性关系，所以字体大小不能使用rem；由于设置了根元素字体的大小，会影响所有没有设置字体大小的元素，因为字体大小是会继承的，难道要每个元素都显示设置字体大小？
我们可以在body上做字体修正，比如把body字体大小设置为16px，但如果用户自己设置了更大的字体，此时用户的设置将失效，比如合理的方式是，将其设置为用户的默认字体大小:
    </pre>
    <pre>
代码规范：
    类名语义化，简短明确，全部是小写，单词之间同一用_连接 类名嵌套不超过三层
    尽量避免直接用元素选择器 属性书写顺序： 布局：
    display,position,float,clear,visibility,overflow
    尺寸书写顺序：width,height,margin,padding,border,background 文本属性：
    color，font，text-decoration,text-align 其他属性css：
    content，custor，border-radious,box-shadow,text-shaow
    避免使用id选择器，!important, 通配符*
</pre
    >
    <pre>
    在pc和移动端相互拉伸，来显示页面。判断宽度
    根据设计稿设置基准值： 在pc使用 px 在移动端 通过获取 screenWidth 来展示
    window.onresize = () => { this.screenWidth = document.body.clientWidth; };
    在移动端使用rem
    </pre>
    <pre>
  移动端适配： 弹性盒子，rem
   最小适配ipone
    5 320px 最大适配 iPhone 8 plus 750
   </pre
    >
    <pre></pre>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
</style>
