---
title: Vue3 script-setup 语法完全上手指南
author: lwy1010
authorProfile: https://github.com/lwy1010
type: post
lang: zh-CN
date: 2022-02-24T17:56:14+00:00
description: Vue3 script-setup 语法完全上手指南
image: /images/2022/02/vue3-setup.png
categories:
  - Vue
tags:
  - Vue3
---

## 前言

最近，尤雨溪宣布 Vue3 成为新的默认版本，而在 Vue.js 3.2.0 版本中，`<script setup>`语法被移除了实验状态，成为框架稳定的特性之一。本文就来分享下`<script setup>`语法配合 TypeScript 的使用，希望这能让你更好地从早期的组合式 API 写法中无缝过渡到`<script setup>`语法，从而在 Vue 项目开发中有着更丝滑的组合式 API 开发体验。

## `<script setup>`是什么？

`<script setup>`语法是在单文件组件中使用组合式 API 的编译时语法糖。在 Vue3 早期的版本中，出于稳定性的考虑，我们在使用组合式 API 时，通常在组件的 setup() 函数选项中使用：

```html
<template>
  <h1>{{ msg }}</h1>
  <button type="button" @click="add">count is: {{ count }}</button>
  <hello-world></hello-world>
</template>

<script lang="ts">
  import { defineComponent, ref } from "vue";
  import HelloWorld from "@/components/hello-world/index.vue";

  export default defineComponent({
    name: "Demo",
    components: { ComponentA },
    props: {
      msg: String,
    },
    setup(props, ctx) {
      const count = ref(0);

      function add() {
        count.value++;
      }

      return {
        count,
        add,
      };
    },
  });
</script>
```

上述代码使用`<script setup>`语法编写如下：

```html
<script setup lang="ts">
  import { ref } from "vue";
  import HelloWorld from "@/components/hello-world/index.vue";

  defineProps<{ msg: string }>();

  const count = ref(0);

  const add = () => count.value++;
</script>

<template>
  <h1>{{ msg }}</h1>
  <button type="button" @click="add">count is: {{ count }}</button>
  <hello-world></hello-world>
</template>
```

对比两种写法，肉眼可见的是`<script setup>`语法的代码更简洁，事实上除此之外，它具有更多的优势：

- 更友好的 Typescript 支持：使用纯 TypeScript 声明 props 和抛出事件。

- 更好的 IDE 类型推断性能：减少语言服务器从代码中抽离类型的工作。

- 更好的运行时性能：模板会被编译成与其同一作用域的渲染函数，没有任何的中间代理。

- 官方主推的写法：现在最新的 Vue3 文档及其主流生态库都开始或已经切换到该写法。

综上所述，如果你喜欢并享受着 Vue3 组合式 API 带来的丝滑般的开发体验，完全没理由不试下`<script setup>`语法。

## 用法详解

### 开发环境配置

工欲善其事，必先利其器，在 Vue2 或者 Vue3 早期的版本中，你可能是使用 VSCode 编辑器配合 Vetur 插件来进行 Vue 项目开发，而如今，在使用`<script setup>`语法进行 Vue 项目开发时，请禁用原先 Vetur 插件，安装 Vue Language Features (Volar) 插件，仅此而已。

### 基本使用

```html
<!-- 添加 setup属性，如果使用 TypeScript，lang 属性设置为 ts -->
<script setup lang="ts">
  import { ref } from "vue";
  // 外部引入的方法可以直接在模板中使用
  import { getToken } from "@/utils/storage";
  // 导入的组件可以直接在模板中使用，无需注册
  import HelloWorld from "@/components/hello-world/index.vue";

  const count = ref(0);

  const add = () => count.value++;
</script>

<template>
  <button type="button" @click="add">count is: {{ count }}</button>
  <hello-world></hello-world>
</template>
```

在 `<script setup>`语法中声明的顶层绑定(变量、函数、import 引入的内容)都会自动暴露给模板，可以在模板中直接使用！事实上`<script setup>`语法代码块中的代码会被编译成组件选项 setup 函数的内容，也就是说它会在每次组件实例被创建的时候执行。

### 编译器宏

`<script setup>`语法中是没有组件配置项的(如 props 等)，所以在`<script setup>`语法中我们需要通过一些预定义的编译器宏来声明组件的配置项，这些编译器包括 defineProps、defineEmits、withDefaults、defineExpose 等。对于编译器宏的使用，要注意的是：

- 只能在`<script setup>`中使用，而且必须在`<script setup>`的顶层使用，不可以在 `<script setup>`的局部变量中引用。

- 不需要被导入即可使用，它会在编译`<script setup>`语法块时一同编译掉。

#### defineProps()

defineProps() 宏用来声明组件的 props：

```html
<script setup lang="ts">
  interface Props {
    foo: string;
    bar: string[];
    // 可选的props属性
    baz?: boolean | string;
  }

  defineProps<Props>();
</script>
```

由此看出通过 defineProps() 宏声明组件的 props 时就是在定义 props 的接口，这也是上面为什么说`<script setup>`语法使用纯 TypeScript 来声明 props 的原因了。

#### withDefaults()

通过 defineProps() 宏用来声明 props 的局限在于无法为 props 定义默认值，所以`<script setup>`语法提供了 withDefaults() 宏来为 props 提供默认值：

```html
<script setup lang="ts">
  interface Props {
    foo: string;
    bar?: string[];
    baz?: boolean | string;
  }

  withDefaults(defineProps<Props>(), {
    // 对象或数组默认值需要在函数返回
    bar: () => ["1", "2"],
    baz: true,
  });
</script>
```

#### defineEmits()

同理，在`<script setup>`语法中也是没有组件配置项 emits 的，需要使用 defineEmits() 宏来声明组件的 emits。

```html
<script setup lang="ts">
  const emits = defineEmits(["delete"]);

  const handleDelete = () => emits("delete");
</script>
```

#### defineExpose()

在`<script setup>`语法中不能通过 ref 的方式去访问子组件的内容，如果你需要对外暴露 `<script setup>` 中的变量，可以 defineExpose 宏来显式地暴露组件中声明的变量：

```html
<script setup lang="ts">
  import { ref } from "vue";

  const count = ref(0);
  const add = () => count.value++;

  defineExpose({ count, add });
</script>

<!-- 在父组件通过ref获取组件实例暴露出来的变量 -->
<script setup lang="ts">
  import { ref } from "vue";
  import HelloWorld from "@/components/hello-world/index.vue";

  const childRef = ref();

  const handleAdd = () => childRef.value.add();
</script>

<template>
  <hello-world ref="childRef"></hello-world>
  <button type="button" @click="handleAdd">add</button>
</template>
```

### 辅助 hooks 函数

`<script setup>`语法还有提供了一些常用的辅助函数，主要包括 useAttrs()、useSlots()等。

#### useAttrs()

在模板中你可以使用 $attrs 来访问 attrs 数据，而在`<script setup>`中你需要使用 useAttrs() 函数获取 attrs 数据：

```html
<script setup lang="ts">
  import { useAttrs } from "vue";

  const attrs = useAttrs();

  console.log(attrs.xxxx);
</script>

<template>
  <!-- 在模板中使用 $attrs 访问属性 -->
  <div>{{ $attrs.xxxx }}</div>
</template>
```

#### useSlots()

同理，在模板中你可以使用 $slots 来访问 slots 数据。而在`<script setup>`中你需要使用 useSlots() 函数获取 slots 插槽数据：

```html
<script setup lang="ts">
  import { useSlots } from "vue";

  const slots = useSlots();

  // 获取插槽默认插槽default、具名插槽foo
  console.log(slots.default);
  console.log(slots.foo);
</script>

<template>
  <div>
    <!-- 在模板中使用插槽 -->
    <slot></slot>
    <slot name="foo"></slot>
  </div>
</template>
```

### 其他

#### Eslint 配置`<script setup>`环境

上面说过编译器宏不需要被导入就可以使用，但如果你在项目使用了 Eslint，这可能会导致 eslint 报`no-undef`的错误，如果你遇到这个问题，你需要在 ESLint 配置文件中启用编译器宏环境：

```js
// .eslintrc.js
module.exports = {
  env: {
    "vue/setup-compiler-macros": true,
  },
};
```

#### 自定义组件名

`<script setup>`是没有组件配置项 name 的，它默认是从组件的文件名中自动推断出组件的名称，但可能有时我们就需要定义组件的 name(比如使用 keep-alive 缓存组件等情况)，这时你可以再使用一个普通的`<script>`来配置组件的 name：

```html
<script lang="ts">
  export default {
    name: "CustomName",
  };
</script>

<script setup lang="ts">
  // 代码逻辑...
</script>
```

⚠️：`<script setup>`和 `<script>`的 lang 需要保持一致。

#### ref() vs reactive()

ref() 和 reactive()都可以用于声明响应式变量，那在声明响应式变量是如何选择呢？下面是一个简单的对比：

```html
<script setup lang="ts">
  import { ref, reactive } from "vue";

  const foo = { prop: 0 };
  const bar = ref({ prop: 0 });
  const baz = reactive({ prop: 0 });

  foo.prop = 1;
  bar.prop = 1; // ts-error
  baz.prop = 1;
</script>
```

由上面的代码可以看出，ref()有着更显式的调用和类型检查，你得总是通过`.value`的方式来调用 ref()声明的响应式变量，这种方式看起来可能不太优雅，但换个角度来看这可能也是它的优点，因为更显式的调用和类型检查可以让你始终明确你操作的变量为响应式变量。

而 reactive()声明的响应式变量会自动 unwrap(即无需总是通过`.value`的方式来调用声明的变量)，这事实上也导致了一些问题：

- reactive()声明的响应式变量在类型上跟一般的对象是没有区别

- 使用 ES6 的解构语法解构 reactive()声明的响应式变量会导致其响应式丢失

- reactive()声明的响应式变量需要使用箭头函数包装才能使用`watch`

事实上，ref()在使用上的心智负担更小，因为你使用 ref()就能声明所有类型的响应式变量，同时通过 ref()你还能来获取 DOM 元素；除此之外，考虑到真实业务场景的多人协助开发和项目的可维护性等问题，ref()能很好地避免 reactive()可能带来的问题。综上所述，个人建议优先使用 ref()来声明响应式变量。

## 结语

本文主要分享了`<script setup>`语法及其相关的一些最佳实践，希望对你有所帮助。
