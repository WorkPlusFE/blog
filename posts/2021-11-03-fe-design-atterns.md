---
title: 前端常用设计模式
author: 叶兴胜
authorProfile: https://github.com/Gertyxs
type: post
lang: zh-CN
date: 2021-11-04
description: 前端常用设计模式
image: /images/2021/11/JavaScript.png
categories:
  - 设计模式
tags:
  - 设计模式
---

## 一、前言

> 目前前端各大框架VueJS、ReactJS、AngularJS、各大开源库等等，大都使用了设计模式，这个东西到底有什么魔力，在开发上到底给我们带来了什么优势，借助公司这次分享的机会，和大家一起探讨一下。


## 二、为什么要学习设计模式？

学习之前，先了解什么是设计模式？

> 设计模式（Design Pattern）是前辈大佬们对代码开发经验的总结，是解决特定问题的一系列套路。它不是语法规定，而是一套用来提高代码可复用性、可维护性、可读性、稳健性以及安全性的解决方案。

简单来说 **它是一套被反复使用、多人知晓的、经过分类的、代码设计经验总结。**



## 三、设计模式的原则

**六大原则：**

- 单一职责原则：就是功能要单一，简而言之就是一个类负责做一件事情。
- 开放封闭原则：对扩展开放，对修改关闭。
- 里氏替换原则：基类出现的地方，子类一定出现，不要破坏继承体系。
- 接口隔离原则：客户端不应该依赖它不需要的接口；一个类对另一个类的依赖应该建立在最小的接口上。
- 依赖翻转原则：针对接口编程，依赖抽象而不依赖具体。
- 合成复用原则：少用继承，多用合成方式实现。

### 开放封闭原则

如果你想扩展或者改变一个程序的功能，可以增加代码，但是不能改变程序的源码。--- 开放封闭原则
但是对于码农来说，最快捷的办法就是改变源码，但是我们面向的是更复杂的项目，你会发现越改bug会越多，潜在风险也会越大、所以开放封闭原则在开发中是非常重要的。

```js
const sayHi = (person) => {
    if (person instanceof Classmate){
        console.log('旺财');
    } else if (person instanceof Friend){
        console.log('二狗')
    }
};
const Classmate = function(){};
const Friend = function(){};
sayHi(new Classmate()); // 输出：旺财
sayHi(new Friend()); // 输出：二狗
```

如果你的人脉圈中增加对一种角色，那我们的`sayHi`函数必须改成：

```js
const sayHi = (person) => {
  	// 一堆其他业务
    if (person instanceof Classmate){
        console.log('旺财');
    } else if (person instanceof Friend){
        console.log('二狗')
    } else if (person instanceof Buddies) {
        console.log('龟儿子')
		}
};
const Classmate = function(){};
const Friend = function(){};
const Buddies = function(){}; // 增加死党
sayHi(new Classmate()); // 输出：旺财
sayHi(new Friend()); // 输出：二狗
sayHi(new Buddies()); // 输出：龟儿子
```

你会发现每加一个角色你就要加一个判断，随着业务代码的增加，这种写法就慢慢的变得很难维护，这中修改源码的方式也违背了开放封闭原则。下面我们利用多态的思想，我们把程序中不变的部分隔离出来（人都会打招呼）然后把可变的部分封装起来（不同的人的打不同的招呼），这样一来程序就具有了可扩展性。当我们想让某个人去打招呼时，只需增加一段代码即可，而不用去改动原有的`sayHi`函数：

```js
const sayHi = function(person){
  	// ... 一堆其他业务
    person.sayHi();
};
const Classmate = function(){};
Classmate.prototype.sayHi = function(){
    console.log('旺财');
};
const Friend = function(){};
Friend.prototype.sayHi = function(){
    console.log( '二狗' );
};
sayHi(new Classmate()); // 输出：旺财
sayHi(new Friend()); // 输出：二狗
/********* 增加死党，不用改动原有的sayHi函数 ****************/
const Buddies = function(){};
Buddies.prototype.sayHi = function(){
    console.log( '龟儿子' );
};
sayHi(new Buddies()); // 输出：龟儿子
```



## 四、设计模式类型

> 创造型`该模式处理的是用于创建对象的各种机制，这种模式着眼于优化的或更可控的对象创建机制;`

**包含以下但不限于这几种模式:**

- 工厂模式
- 抽象工厂
- 建造者
- 原型
- 单例模式

> 结构型`这个类型的设计模所考虑的是对象的组成和对象之间的关系,假如对象发生了重大改变,对当前对象操作影响降至最低`

包含以下但不限于这几种模式:

- 适配器模式
- 桥接模式
- 装饰器模式
- 外观模式
- 享元模式
- 代理模式

> 行为型`该模式关注的是对象之间的依赖关系以及通信`

包含以下但不限于这几种模式:

- 解释器
- 模板方法
- 责任链
- 命令模式
- 迭代器
- 中介者
- 备忘录
- 观察者模式
- 状态
- 策略模式
- 访问者



## 五、四种前端常用设计模式

### 1、单列模式

单例模式的定义是,保证一个类仅有一个实例,并且要提供访问他的全局api

> 单例模式在前端是一种很常见的模式,一些对象我们往往就只需要一个,如果你使用过`VueX`,`React-redux`等框架全局状态管理工具进行项目开发,你不难发现,这类工具库也是运用了单例模式的特性,用途相当广泛,要使用JavaScript实现一个标准的单例很简单,就是使用一个变量作为标识来判断当前是否已经创建过对象,如果没有就创建,如果已经创建则返回之前创建过的对象

简单实现代码(class语法风格)

```js
class SingleClass {
  constructor (name) {
    this.name = name
  }
  // 静态方法获取实例
  static getInstance (name) {
    if (!this.instance) {
      this.instance = new SingleClass(name)
    }
    return this.instance
  }
}
let a = SingleClass.getInstance('a1')
let b = SingleClass.getInstance('b2')
console.log(a == b) // true
```

### 2、观察者模式

这个模式也叫发布订阅模式,他的核心概念就是当一个对象状态发生变更时,所有依赖于它的对象都会得到通知。

> 试想一下,一个杂志出版社,会有很多人来通过各种渠道订阅相关内容,当出版社出版新内容,出版社就会通知所有订阅者;在这个场景里,出版社就是作为了发布者,而人们则作为了订阅者。观察模式通常把订阅者称之为观察者observer,观察者的目标对象发布方subject,subject可以拥有多个observer,一旦subject的状态发生改变了,所有监听了subject的observer都要得到通知,执行相应的业务,让subject和observer状态保持同步。

```js
class EventBus {
  constructor() {
    this.callbacks = {};
  }
  $on(name, fn) {
    (this.callbacks[name] || (this.callbacks[name] = [])).push(fn);
  }
  $emit(name, args) {
    let cbs = this.callbacks[name];
    if (cbs) {
      cbs.forEach((c) => {
        c.call(this, args);
      });
    }
  }
  $off(name) {
    this.callbacks[name] = null;
  }
}
let event = new EventBus();
event.$on("event1", (arg) => {
  console.log("event1", arg);
});

event.$on("event2", (arg) => {
  console.log("event2", arg);
});

event.$emit("event1", 1); // event1 1
event.$emit("event2", 2); // event2 2
```

### 3、 命令模式

命令模式（Command Pattern）是一种数据驱动的设计模式，它属于行为型模式。

> 请求以命令的形式包裹在对象中，并传给调用对象。

调用对象寻找可以处理该命令的合适的对象，并把该命令传给相应的对象，该对象执行命令。

```js
class Editor {
  constructor() {
    this.content = "";
    this.operator = [];
  }
  write(content) {
    this.content += content;
  }
  read() {
    console.log(this.content);
  }
  space() {
    this.content += " ";
  }
  readOperator() {
    console.log(this.operator);
  }
  run(...args) {
    this.operator.push(args[0]);
    this[args[0]].apply(this, args.slice(1));
    return this;
  }
}

const editor = new Editor();

editor
  .run("write", "hello")
  .run("space")
  .run("write", "zkk!")
  .run("read"); // => 'hello zkk!'

// 输出操作队列
editor.readOperator(); // ["write", "space", "write", "read"]
```

### 4、策略模式

定义一系列的算法，把他们一个个封装起来，并使他们可以替换。

> 策略模式的目的就是将算法的使用和算法的实现分离开来。

**计算年终奖**

现在假设一个公司的年终奖是根据`工资基数`和`绩效等级`来发放的：

| 绩效等级 | 年终奖数额 |
| -------- | ---------- |
| S        | 四倍工资   |
| A        | 三倍工资   |
| B        | 两倍工资   |

通过绩效等级计算奖金，可以轻易的写出如下的代码：

```js
var calculateBonus = function(performanceLevel, salary) {
  if (performanceLevel === "S") {
    return salary * 4;
  }
  if (performanceLevel === "A") {
    return salary * 3;
  }
  if (performanceLevel === "B") {
    return salary * 2;
  }
};

calculateBonus("B", 20000); // 输出：40000
calculateBonus("S", 6000); // 输出：24000
```

这带来的问题是假设你要新增一个`C`绩效等级，就要去增加一个`if`，新增这个`if`的同时又有可能改动到别的逻辑。一个重要的原则是，凡是你发现你代码里面很多`if`判断，说明它可以被优化。具体的优化方式有很多种，可以点击这个[链接](https://jrsinclair.com/articles/2017/javascript-but-less-iffy/)去了解一下。

使用策略模式修改代码：

```js
var strategies = {
  S: (salary) => {
    return salary * 4;
  },
  A: (salary) => {
    return salary * 3;
  },
  B: (salary) => {
    return salary * 2;
  },
  C: (salary) => {
    return salary * 2;
  },
};
var calculateBonus = function(level, salary) {
  return strategies[level](salary);
};
console.log(calculateBonus("S", 200)); // 输出：800
console.log(calculateBonus("A", 200)); // 输出：600
```



## 六、总结

以上几个模式就是前端比较常用的设计模式，以及面向对象开发的一下原则、希望能给大家带来设计模式上的一些理解，如果大对设计模式比较感兴趣，建议可以购买《JavaScript设计模式》这本书。


