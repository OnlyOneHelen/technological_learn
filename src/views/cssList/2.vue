<template>
    <div>
        <h1>2. 伪类和伪元素</h1>
        <div>伪类的定义是通过（选择器找到不存在与DOM树中的信息）以及（不能被常规css选择器获取到的信息） (css选择器)</div>
        <div><a class="link_a" href="www.baidu.com">32423432</a>（使用了伪类 link和visited 来控制是否访问过的样式）</div>
        <div>伪元素本质上是创建了一个有内容的虚拟容器</div>
        <div><span class="content_p">1231231232</span>（可以同时使用多个伪类，而只能同时使用一个伪元素)</div>
        <div>::first-line 用法 设置第一行样式 ::selection 选中效果</div>
        <div><p class="content_p1" style="width:300px">23424 232342 234 234 2342 4242 234 234 234 234 234 234 224 234 234 234 234 23424 24234 234 234 234 24 234234 </p></div>
        <div><p class="content_p2" style="width:300px">23424 232342 234 234 2342 4242 234 234 234 234 234 234 224 234 234 234 234 23424 24234 234 234 234 24 234234 </p></div>
        <div>::backdrop CSS 伪元素 是在任何处于全屏模式的元素下的即刻渲染的盒子（并且在所有其他在堆中的层级更低的元素之上）。伪元素允许我们遮盖，装饰或完全隐藏该元素的下层文档。没有例子</div>
        <section>
            <h2>Heading 1</h2>
            <p>Paragraph 1</p>
            <p>Paragraph 2</p>
            <div>
                <h2>Heading 2</h2>
                <p>Paragraph 3</p>
                <p>Paragraph 4</p>
            </div>
        </section>
    </div>
</template>
<script>
export default {
  data () {
    return {

    }
  }
}
</script>
<style>
    .link_a:link {
        background: green;
    }
    .link_a:visited{
        background: red;
    }
    section p {
    color: blue;
    }

    section > p {
    background-color: yellow;
    }

    h2 + p {
        background: red;
    }

    h2 ~ p {
    border: 1px dashed black;
    }
    .content_p::after{
        content: "dddddd   "
    }
    .content_p::before{
        content: "eeeee "
    }
    .content_p1::first-line {
        background: red;
    }
    .content_p2::selection {
        background: green;
    }
</style>
