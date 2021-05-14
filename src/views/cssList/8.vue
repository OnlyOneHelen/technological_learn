<template>
    <div>
        <div>(过渡)transition: css的属性, 花费时间, 效果曲线(默认ease), 延迟时间(默认0);<br/>
        例如: transition：width,.5s,ease,.2s</div>
        <div>(动画) animation：动画名称，一个周期花费时间，运动曲线（默认ease），动画延迟（默认0），播放次数（默认1），是否反向播放动画（默认normal），是否暂停动画（默认running）</div>
        <p>
            animation-fill-mode : none | forwards | backwards | both;
            <br/>/*none：不改变默认行为。
            <br/>forwards ：当动画完成后，保持最后一个属性值（在最后一个关键帧中定义）。
            <br/>backwards：在 animation-delay 所指定的一段时间内，在动画显示之前，应用开始属性值（在第一个关键帧中定义）。
            <br/>both：向前和向后填充模式都被应用。  */   </p>
        <div>
            transform:适用于2D或3D转换的元素
            transform-origin：转换元素的位置（围绕那个点进行转换）。默认(x,y,z)：(50%,50%,0)
        </div>
        <div>
            box-shadow: 水平阴影的位置 垂直阴影的位置 模糊距离 阴影的大小 阴影的颜色 阴影开始方向（默认是从里往外，设置inset就是从外往里）;
            <br/>例子: box-shadow: 10px 10px 5px #888888;
        </div>
        <div>
            background-clip 制作背景绘制（显示）区域 默认 border-box
            <br/> padding-box 不算border 把border背景裁剪掉
            <br/> 只在内容区绘制（显示），不算padding和border，相当于把padding和border那里的背景给裁剪掉！（background-clip: content-box;）
        </div>
        <div>-webkit-box-reflect:方向[ above-上 | below-下 | right-右 | left-左 ]，偏移量，遮罩图
            这个到很不常用 确实是一个有趣的属性
        </div>
        <div>
            word-break: normal|break-all|keep-all; keep-all 只能在半角空格或者连字符中换行
            break-all 允许在单词内换行
            word-wrap: normal|break-word; break-word 允许在长单词或者url地址内部进行换行
            text-overflow: clip | ellipsis | string 拆剪 省略号 string 只能在火狐兼容
            这个其实有三行代码，禁止换行，超出隐藏，超出省略号
            overflow:hidden;
            white-space:nowrap;
            text-overflow:ellipsis;
        </div>
        <div>
            filter(滤镜) 透明度 模糊 阴影常用 opacity blur drop-shadow
            flex适合一维布局 grid适合二维布局
        </div>
        <div>
            多列布局
            column-count:3 (不好使)
            <div style="column-count:3;-webkit-column-count: 3;-webkit-column-rule:2px solid #000;column-rule:2px solid #ccc;">dsfsdf sdf sdf fs d fsdfsa dasd fssfasdf asdsf sdf sdfasdfd assfassf asf asdfa sdfa sdfdaf a</div>
        </div>
        <div>
            盒模型 box-sizing: border-box 边框和padding包含在元素的宽高之内
            <br/> box-sizing: content-box 边框和padding不包含在元素的宽高之内
        </div>
        <div>
            媒体查询 @madia 没啥可说的，就是解决响应式布局的一种方式而已
        </div>
        <div>
            background-blend-mode和mix-blend-mode）处理图片的一些特效 一般用不到
        </div>
    </div>
</template>
