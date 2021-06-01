

console.log('1');
setTimeout(function () {
    console.log('2');
    process.nextTick(function () {
        console.log('3');
    })
    new Promise(function (resolve) {
        console.log('4');
        resolve();
    }).then(function () {
        console.log('5')
    })
})
process.nextTick(function () {
    console.log('6');
})
new Promise(function (resolve) {
    console.log('7');
    resolve();
}).then(function () {
    console.log('8')
})

setTimeout(function () {
    console.log('9');
    process.nextTick(function () {
        console.log('10');
    })
    new Promise(function (resolve) {
        console.log('11');
        resolve();
    }).then(function () {
        console.log('12')
    })
})

/*
 首先整个<script> 作为一个宏任务开始执行，同步代码直接在执行栈执行，宏任务进入宏任务队列，微任务进入微任务队列
同步代码,执行栈执行 console.log(1), console.log(7)
宏任务队列: setTimeout, setTimeout
微任务队列：   process.nextTick ， promise.resolve

当前宏任务执行完毕，出栈，检查微任务队列，有则依次执行，直到全部执行完毕

微任务： process.nextTick ( console.log('6');) ， promise.resolve ( console.log('8'))

执行浏览器的渲染工作。

第一次事件循环结束 分别输出 1,7,6,8

第二次事件循环

执行宏任务里的代码：
同步代码直接执行 （  console.log('2');）    console.log('4');
同步代码执行完，执行微任务  console.log('3');  console.log('5')
第二次事件循环结束 分别输出 2，4，3，5
执行浏览器的渲染工作。

第三次事件循环

执行宏任务里的代码：
同步代码直接执行 （  console.log('9');）     console.log('11');;
同步代码执行完，执行微任务  console.log('10');  console.log('12')
第二次事件循环结束 分别输出 9，11，10，12
执行浏览器的渲染工作。

所以输出： 1,7,6,8,2，4，3，5,9，11，10，12

我感觉宏任务里基本就是个摆设，执行宏任务里的同步任务，你看看，宏任务就是个摆设
*/
// console.log('script start')
// async function async1() { // 第一个promise
//     await async2()
//     console.log('async1 end')
// }
// function async2() {
//     console.log('async2 end')
// }
// setTimeout(function () {  // 第一个定时器
//     console.log('setTimeout')
// })
// async1()
// new Promise(resolve => { // 第二个promise
//     console.log('promise1')
//     resolve()
// }).then(function () {
//     console.log('promise2')
// }).then(function () {
//     console.log('promise3')
// })
// new Promise(resolve => { // 第三个promise
//     console.log('promise4')
//     setTimeout(() => {  // 第二个定时器
//         resolve()
//     })
// }).then(function () {
//     console.log('promise5')
// }).then(function () {
//     console.log('promise6')
// })
// console.log('script end')
/**
 * script start
async2 end
promise1
promise4
script end
async1 end
promise2
promise3
setTimeout
promise5
promise6
*/


