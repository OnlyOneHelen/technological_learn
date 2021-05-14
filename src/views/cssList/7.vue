<template>
  <div>
    <h1>7. 圣杯布局和双飞翼布局</h1>
    <p>概念: 左右两栏固定宽度，中间部分自适应的三栏布局。</p>
    <h3>圣杯布局</h3>
    <div></div>
    <h3>双飞翼布局</h3>
    <div></div>
    <div>我用flex实现一个吧。。。</div>
    <div>
      <div class="nav-container">
        <div class="nav-left">左侧</div>
        <div class="nav-title">标题</div>
        <div class="nav-right">右侧</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="less" scoped>
.nav-container {
  display: flex;
  font-size: 40px;
  color: aquamarine;
  height: 90px;
  line-height: 90px;
}
.nav-left {
  width: 200px;
  background-color: bisque;
}

.nav-title {
  flex: 1;
  background-color: green;
}
.nav-right {
  width: 200px;
  background-color: hotpink;
}
</style>
