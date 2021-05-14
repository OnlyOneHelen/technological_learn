<template>
  <div>
    <div>
      <h1>3. BFC</h1>
      <pre>
        概念： 块级格式化上下文。BFC是一个独立的布局环境，BFC内部与外部不影响

        BFC触发条件：
        1. 根元素<html></html>
        2. float非none
        3. overflow非visible
        4. display非none
        5. position为absolute, fixed

        BFC特性：
        1. 属于同一个BFC的两个相邻容器的上下margin会重叠
        2. 计算BFC高度时，浮动元素也参与计算
        3. BFC区域不会与浮动元素区域重叠

    </pre>
    </div>
    <div>特性1： 属于同一个BFC的两个相邻容器的上下margin会重叠</div>
    <div>
      <div class="top1"></div>
      <div class="bottom1"></div>
    </div>
    <pre>
       原因： 此时上下两个div属于同一个BFC，既根元素(<html></html>),所以上下两个容器会发生外边距重叠，以边距大的为准

       解决： 给蓝色块的父元素加上overflow:hidden,使其父元素触发BFC。
       <strong>这里是给父元素加了overflow:hidden.触发了BFC，当然也可以加，position,float,display....</strong>
       此时红色快和蓝色块属于不同的BFC所以，所以不会相互影响。蓝色块的的BFC是父元素.box. 红色块的父元素是根元素<html></html>
    </pre>
    <div>
      <div class="top2"></div>
      <div class="box">
        <div class="bottom2"></div>
      </div>
    </div>
    <div>特性2： 计算BFC高度时，浮动元素也参与计算</div>

    <div>
      <div class="outside1">
        <div class="inside1"></div>
      </div>
    </div>
    <pre>

        原因：  写完你会发现，当父元素没有设置高度，子元素设置浮动后，父元素会出现高度塌陷的问题(没高度)
        </pre
    >

    <p>解决： 给父元素设置overflow: hidden. 触发BFC</p>
    <pre>
        1
        1
        1
    </pre>
    <strong> 计算BFC高度时，浮动元素也会参与计算 </strong>
    <div>
      <div class="outside2">
        <div class="inside2"></div>
      </div>
    </div>
    <div>特性3： BFC区域不会与浮动元素发生重叠</div>
    <div class="left1"></div>
    <div class="right1"></div>
    <pre>

        原因：  写完你会发现，当left浮动时，right会与left发生重叠
        </pre
    >

    <p>解决： 给right设置overflow: hidden. 触发BFC</p>
    <pre>
        1
        1
        1
    </pre>
    <strong> BFC区域，不会与浮动元素发生重叠 </strong>
    <div class="left2"></div>
    <div class="right2"></div>

    ------------------------------------
    <pre>
      只要触发BFC，即可
      overflow: hidden;
      display: flex;
      position: absolute;
      float: left;
    </pre>
  </div>
</template>

<script>
export default {}
</script>

<style lang="less" scoped>
.top1 {
  width: 200px;
  height: 200px;
  background: red;
  margin-bottom: 40px;
}
.bottom1 {
  width: 200px;
  height: 200px;
  background-color: blue;
  margin-top: 60px;
}
.top2 {
  width: 200px;
  height: 200px;
  background: red;
  margin-bottom: 40px;
}
.box {
  // 只要触发BFC，即可
  overflow: hidden;
  //   display: flex;
  //   position: absolute;
  //   float: left;
}
.bottom2 {
  width: 200px;
  height: 200px;
  background-color: blue;
  margin-top: 60px;
}
.outside1 {
  border: 10px solid green;
}
.inside1 {
  width: 200px;
  height: 200px;
  background-color: aquamarine;
  float: left;
}
.outside2 {
  border: 10px solid green;
  overflow: hidden;
}
.inside2 {
  width: 200px;
  height: 200px;
  background-color: aquamarine;
  float: left;
}
.left1 {
  width: 200px;
  height: 200px;
  background-color: aquamarine;
  float: left;
}
.right1 {
  width: 700px;
  height: 300px;
  background-color: red;
}
.left2 {
  width: 200px;
  height: 200px;
  background-color: aquamarine;
  float: left;
}
.right2 {
  width: 700px;
  height: 300px;
  background-color: red;
  overflow: hidden;
}
</style>
