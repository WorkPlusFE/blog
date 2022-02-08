---
title: React Hooks 入门
author: 沈梓平
authorProfile: https://github.com/q106357
type: post
lang: zh-CN
date: 2022-02-08
description: React Hooks 入门
image: /images/2022/02/react-hook.jpeg
categories:
  - React
tags:
  - React
  - React Hooks
---

## React Hook 是什么？

React Hook 是 React 16.8 的新增特性。它可以让你在不编写 class 的情况下使用 state 以及其他的 React 特性。

## 类组件的缺点

React 的核心是组件。v16.8 版本之前，组件的标准写法是类(class)。下面是一个简单的组件类。

```js
import React, { Component } from 'react';

export default class Button extends Component {
    constructor(){
        super();
        this.state = { buttonText:"Click me,please"};
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(){
        this.setState(() => {
            return { buttonText:"Thanks,been clicked!"};
        })
    }
    render(){
        const {buttonText} = this.state;
        return <button onClick={this.handleClick}>{buttonText}</button>
    }
}
```

这个组件类仅仅是一个按钮，但可以看到，它的代码已经很"重"了。真实的 React App 由多个类按照层级，一层层构成，复杂度成倍增长。再加入 Redux，就变得更复杂。

Redux 的作者 Dan Abramov 总结了组件类的几个缺点：

1.大型组件很难拆分和重构，也很难测试；
2.业务逻辑分散在组件的各个方法之中，导致重复逻辑或关联逻辑；
3.组件类引入了复杂的编程模式，比如 render props 和高阶组件。

## 函数组件

React 团队希望，组件不要变成复杂的容器，最好只是数据流的管道。开发者根据需要，组合管道即可。 组件的最佳写法应该是函数，而不是类。

React 早就支持函数组件，下面就是一个例子。

```js
function Welcome(props){
    return <h1>hello,{props.name}</h1>
}
```

但是，这种写法有重大限制，必须是纯函数，不能包含状态，也不支持生命周期方法，因此无法取代类。

## Hooks 的作用

React Hooks 的设计目的，就是加强版函数组件，完全不使用"类"，就能写出一个全功能的组件。hooks是什么.Hooks 是 React 16.8 （2019.02.06）的新增特性，React创建组件的两种方式,一种是类组件，另外一种是纯函数组件。而hooks带给开发者的作用则是,在不使用类组件的情况下，让你在纯函数组件上使用state以及其他的React特性。

抽象一点的意思就是， 组件尽量写成纯函数，如果需要外部功能和副作用，就用钩子把外部代码"钩"进来。 React Hooks 就是那些钩子。你需要什么功能，就使用什么钩子。React 默认提供了一些常用钩子，你也可以封装自己的钩子。所有的钩子都是为函数引入外部功能，所以 React 约定，钩子一律使用use前缀命名，便于识别。你要使用 xxx 功能，钩子就命名为 usexxx。

## React Hooks 的用法

### 一、useState 状态钩子

使用场景：当你想要在函数组件中,使用组件状态时,就要使用 useState Hook 了

作用:为函数提供状态( state )

使用步骤：

1. 导入 `useState` 函数；
2. 调用 `useState` 函数，并传入状态的初始值；
3. 从 `useState` 函数的返回值中，拿到状态和修改状态的函数；
4. 在 JSX 中展示状态；
5. 在按钮的点击事件中调用修改状态的函数，来更新状态；

```js
import { useState } from 'react'

const Count = () => {
  // const [访问state的变量名,设置state的函数名] = useState(初始值)
  const [state,setState] = useState(0)
  return (
    <div>
      {/* 展示状态值 */}
      <h1>useState Hook -> {state}</h1>
      {/* 点击按钮，让状态值 +1 */}
      <button onClick={() => setState(state + 1)}>+1</button>
    </div>
  )
}
```


在useState()中，它接受状态的初始值作为参数，它返回一个数组，其中数组第一项为一个变量，指向状态的当前值。

### 二、useEffect 副作用钩子

基本使用

使用场景：当你想要在函数组件中，处理副作用（side effect）时，就要使用 useEffect Hook 了
作用：处理函数组件中的副作用（side effect）

注意：在实际开发中，副作用是不可避免的。因此，react 专门提供了 useEffect Hook 来处理函数组件中的副作用

```js
import { useEffect } from 'react'

useEffect(function effect() {
  document.title = `当前已点击 ${count} 次`
})

useEffect(() => {
  document.title = `当前已点击 ${count} 次`
})
```

useEffect的依赖

- 问题：如果组件中有另外一个状态，另一个状态更新时，刚刚的 effect 回调，也会执行；
- 性能优化：跳过不必要的执行，只在 count 变化时，才执行相应的 effect；
- 这时我们便可以将count当做依赖。

```js
useEffect(() => {
  document.title = `当前已点击 ${count} 次`
}, [count])
```

useEffect的第二个参数也可以是一个空数组,它代表着组件只在第一次渲染后执行effect中的函数体

使用场景：1 事件绑定 2 发送请求获取数据 等

```js
useEffect(() => {
  //页面首次渲染执行的函数体
}, [])
```

问题：当我们组件卸载时,需清除组件上的定时器?此时,就用到effect的返回值了.

```js
useEffect(() => {
    //组件卸载时清除timer延时器
  return () => clearTimeout(timer)
}, [])
```

### 三、useContext 共享状态钩子

该钩子的作用是，在组件之间共享状态。

下面有这么个需求，现在假设有A组件和B组件需要共享一个状态。

```js
import React,{ useContext } from 'react'
const demo = () => {
  const AppContext = React.createContext({})
  const A =() => {
    const { name } = useContext(AppContext)
    return (
        <p>我是A组件的名字{name}<span>我是A的子组件{name}</span></p>
    )
}
const B =() => {
  const { name } = useContext(AppContext)
  return (
      <p>我是B组件的名字{name}</p>
  )
}
  return (
    <AppContext.Provider value={{name: 'hook测试'}}>
    <A/>
    <B/>
    </AppContext.Provider>
  )
}
export default demo 
```



## Hooks 的缺点与使用规则

1.React Hooks 只能直接出现在`函数组件`中，不能嵌套在 if/for/其他函数中

否则就会报错：React Hook "useState" is called conditionally. React Hooks must be called in the exact same order in every component render

React 的 useState 这个 Hook 被条件性（放在一个条件判断中）的调用了。

React Hooks 必须要每次组件渲染时，按照相同的顺序来调用所有的 Hooks。

> 为什么会有这样的规则？ 因为 React 是按照 Hooks 的调用顺序来识别每一个 Hook，如果每次调用的顺序不同，导致 React 无法知道是哪一个 Hook

2.响应式的 useEffect

写函数组件时，你不得不改变一些写法习惯。你必须清楚代码中 useEffect 和 useCallback 的“依赖项数组”的改变时机。有时候，你的 useEffect 依赖某个函数的不可变性，这个函数的不可变性又依赖于另一个函数的不可变性，这样便形成了一条依赖链。一旦这条依赖链的某个节点意外地被改变了，你的 useEffect 就被意外地触发了，如果你的 useEffect 是幂等的操作，可能带来的是性能层次的问题，如果是非幂等，那就糟糕了。所以，对比 componentDidmount 和 componentDidUpdate，useEffect 带来的心智负担更大。

3.状态不同步

函数的运行是独立的，每个函数都有一份独立的作用域。函数的变量是保存在运行时的作用域里面，当我们有异步操作的时候，经常会碰到异步回调的变量引用是之前的，也就是旧的（这里也可以理解成闭包）。

## 如何避免 react hooks 的常见问题

1.不要在 useEffect 里面写太多的依赖项，划分这些依赖项成多个单一功能的 useEffect。其实这点是遵循了软件设计的“单一职责模式”；
2.如果你碰到状态不同步的问题，可以考虑下手动传递参数到函数；
3.重视 eslint-plugin-react-hooks 插件的警告；
4.复杂业务的时候，使用 Component 代替 hooks。

## 自定义 hooks

自定义 hooks 是在 react-hooks 基础上的一个拓展，可以根据业务需要制定满足业务需要的 hooks，更注重的是逻辑单元。通过业务场景不同，我们到底需要 react-hooks 做什么，怎么样把一段逻辑封装起来，做到复用，这是自定义 hooks 产生的初衷。

假设现在有这样一种需求，我们需要获取鼠标当前的位置坐标，但是不仅仅是一个页面需要，此时我们就可以用到自定义 Hook 了。

```js
import React, { useState, useEffect } from 'react'

const useMousePosition = () => {
    const [position, setPosition] = useState({x: 0, y: 0 })
    useEffect(() => {
        const updateMouse = (e) => {
            setPosition({ x: e.clientX, y: e.clientY })
        }
        document.addEventListener('mousemove', updateMouse)
        return () => {
            document.removeEventListener('mousemove', updateMouse)
        }
    })
    return position
}

export default useMousePosition
```

 之后在需要的地方引入然后调用即可：

```js
import React from 'react'
import useMousePosition from './useMousePosition'

function App() {
    const position = useMousePosition()
    return (
        <div>
            <div>x: {position.x}</div>
            <div>y: {position.y}</div>
        </div>
    )
}
```



## 总结

通过对上面的初步认识，可以看到 hooks 能够更容易解决状态相关的重用的问题.编写 hooks 为函数式编程，每个功能都包裹在函数中，整体风格更清爽，更优雅 hooks 的出现，使函数组件的功能得到了扩充，拥有了类组件相似的功能，在我们日常使用中，使用 hooks 能够解决大多数问题，并且还拥有代码复用机制，因此优先考虑 hooks..			
