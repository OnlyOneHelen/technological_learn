<template>
    <div>
        <h1>12. 常见的局中方式</h1>
        <div>(flex 布局实现 )
            （position 定位实现 已知宽度直接margin left: 50%; top: 50%;上一半右一半 
            或者left: 0; top: 0; bottom: 0; right: 0; margin: auto;
            不知宽度 translate(-50%, -50%)）
            (table-cell  vertical-align: middle; 垂直局中，水平局中通过计算 水平局中需要在子元素设置inline-block)
        </div>
        <div class="box">         
            <div class="a">love</div>    
        </div>
    </div>
</template>
<style>        
    .box{            
        width: 300px;            
        height: 300px;            
        background-color: red;            
        display: table-cell;            
        vertical-align: middle; 
        text-align: center;                
    }        
    .box .a{         
        /* margin-left: 100px;            */
        display:inline-block;
        width: 100px;            
        height: 100px;            
        background-color: blue;        
    }    
</style>
