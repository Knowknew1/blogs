---
title: 闭包
date: 2021-12-21
sidebar: auto
categories:
  - JavaScript
tags:
  - JavaScript
---

## 闭包的定义

这里先来看一下闭包的定义，分成两个：在计算机科学中和在 JavaScript 中。

- 在计算机科学中对闭包的定义（维基百科）：

  闭包（英语：Closure），又称 **词法闭包**（Lexical Closure）或 **函数闭包**（function closures）；

  是在支持 **头等函数** 的编程语言中，实现**词法绑定**的一种技术；

  闭包在实现上是一个结构体，它存储了一个函数和一个关联的环境（相当于一个符号查找表）；

  闭包跟函数最大的区别在于，当捕捉闭包的时候，它的 **自由变量** 会在捕捉时被确定，这样即使脱离了捕捉时的上下文，它也能照常运行；

- 闭包的概念出现于 60 年代，最早实现闭包的程序是 Scheme，那么我们就可以理解为什么 JavaScript 中有闭包：

  因为 JavaScript 中有大量的设计是来源于 Scheme 的；

- 我们再来看一下 MDN 对 JavaScript 闭包的解释：

  一个函数和对其周围状态（**lexical environment，词法环境**）的引用捆绑在一起（或者说函数被引用包围），这样的组合就是**闭包**（closure）；

  也就是说，闭包让你可以在一个内层函数中访问到其外层函数的作用域；

  在 JavaScript 中，每当创建一个函数，闭包就会在函数创建的同时被创建出来；

- 那么我的理解和总结：

  一个普通的函数 function，如果它可以访问外层作用于的自由变量，那么这个函数就是一个闭包；

  从广义的角度来说：JavaScript 中的函数都是闭包；

  从狭义的角度来说：JavaScript 中一个函数，如果访问了外层作用于的变量，那么它是一个闭包

## 闭包的访问过程

```javascript
function foo() {
  function bar() {
    console.log(name);
  }
  return bar;
}
var name = "曹格";
var result = foo();
result();

//输出结果"曹格"
```

![](https://cdn.jsdelivr.net/gh/Knowknew1/pictures@main/闭包的执行过程.png)

在代码执行的过程中，这时候foo函数执行完毕，正常情况下AO对象会被销毁掉。

但是因为这时候的bar(0xb00)的函数有作用域链指着这个AO对象，所以foo函数AO对象不会被释放掉，就会形成**闭包**。

## 闭包的组成

闭包是由两部分组成：**函数** + 可以访问的**自由变量**

## 闭包的内存泄露

