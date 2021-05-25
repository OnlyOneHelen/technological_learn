<template>
  <div class="main">
    <h1>2. 继承</h1>
    <h5>原型链继承</h5>
    <pre>
            子类的原型对象，指向父类的实例。当子类的实例找不到属性和方法，会沿着原型链查找 
            L.__proto === R.prototype   和instanchof查找原理一样

        </pre
    >
    <pre>
        缺点：
    无法给父类传参(super)，并且，原型都指向同一个实例对象，如果有两个实例化子对象，那么修改其中一个,就会影响另一个
    </pre>

    <h5>构造函数继承</h5>
    <pre>
           在子类的构造函数中，去执行父类的构造函数，并且为其绑定子类this。
        </pre
    >
    <pre>
        缺点： 无法继承父类原型上的方法和属性

    </pre>
    <h5>组合继承</h5>
    <pre>
           利用构造函数继承(实现属性继承)和原型链继承(实现原型方法继承)
        </pre
    >
    <pre>
        缺点： 会实例化两次对象

        解决 ：我不想没次都new 来继承实例对象上的方法，那我直接用prototype来实现
        原来： Son.prototype = new Person()
        现在： Son.prototype = Person.prototype  // 这样也有问题，子类改变，会影响父类

    终结： Son.prototype = Object.create(Person.prototype)  
    // es6中class继承，也是基于此(寄生式继承)
    </pre>
    <h5>class继承</h5>
    <pre>
        核心： 使用extends 表明继承自那个父类，并且在子构造函数中，必须调用super() 用于子构造函数向父构造函数传参
    </pre>
    <pre style="color: green; font-size: 20px">
        详细见 jsList/2.vue
    </pre>
  </div>
</template>

<script>
export default {};
</script>

<style  >
.main {
  padding: 30px;
}
</style>