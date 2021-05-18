<template>
    <div>
        <h1>10. css 性能优化</h1>
        <div>合并css文件 合成icon图片 减少http请求 减少加载文件 用来优化性能</div>
        <div>减少css嵌套 不在ID选择器前面进行嵌套 减少通配符的使用 巧用css的继承机制</div>
        <div>建立公共样式类 拆分公共css文件 </div>
        <div>css 压缩 gzip压缩 是一种流行的文件压缩算法</div>
        <div>性能优化 避免多使用@import 因为外部的css导致页面在加载时增加额外的延迟</div>
        <div style="color: red">避免过分重排，浏览器重新渲染页面或者部分页面会重新计算元素的位置和结构叫做reflow
            例如，宽度 高度 边界 边框，布局 子图，隐藏会导致触发reflow 导致自节点和祖先节点重新渲染
            <span>
                <br/>1.预先定义好class 改变dom的classname
                <br/>2.动画元素使用绝对定位
                <br/>3.尽量避免table布局 更改小的改动会导致table的重新布局
                <br/>4.避免设置大量的style
                <br/>5.减少css里面的计算表达式
            </span>
        </div>
    </div>
</template>
