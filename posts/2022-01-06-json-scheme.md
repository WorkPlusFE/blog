---
title: JSON SCHEMA 基础入门
author: 岑成威
authorProfile: https://github.com/CENcw
type: post
lang: zh-CN
date: 2022-01-06
description: JSON Schema 它只是一种用于“描述其他数据结构”的声明性格式，简明地描述数据的表面结构并根据它自动验证数据。
image: /images/2022/01/json-scheme.png
categories:
  - JSON
tags:
  - JSON
---


JSON Schema 它只是一种用于“描述其他数据结构”的声明性格式，简明地描述数据的表面结构并根据它自动验证数据。

优点：

- 描述自定义的数据格式
- 清晰，对人和机器友好
- 完整的结构校验
- 自动化测试
- 校验表单提交数据

用处：

- 表单提交验证
- 定义数据模型

基本校验用法

```javascript
npm i jsonschema

var Validator = require('jsonschema').Validator;
var v = new Validator();
var instance = 4;
var schema = {"type": "number"};
console.log(v.validate(instance, schema));
```

当然我们也可以通过 typescript-json-schema.js 来生成 json-schema，在 ts 中，[typescript-json-schema.js](https://github.com/YousefED/typescript-json-schema) 库提供了将 ts 的类型声明，转换为 json schema 的功能。同时，通过类型注释，来支持更多的 json schema 规范

基本校验用法是这样，其他 api 可以去[jsonschema.js](https://www.npmjs.com/package/jsonschema)查看,下面我们讲 JSON SCHEMA 的定义核心和基本规则

假设我们有这样一种表单 JSON 数据格式，个人的身份 JSON,正常来写会是这样

```javascript
{
  "age": 18,
  "name": "weiwei",
  "sex": "man"
}
```

JSON Schema 的写法

```javascript
{
  "$schema": "http://json-schema.org/draft-04/schema#",
  "description": "personInfo",
  "properties": {
    "age": {
      "description": "The age for a person",
      "exclusiveMinimum": 0,
      "maximum": 1000,
      "type": "number"
    },
    "name": {
      "description": "The identifier for a person",
      "maxLength": 50,
      "type": "string"
    },
    "sex": {
      "description": "The gender of the person",
      "enum": [
        "male",
        "female"
      ],
      "type": "string"
    }
  },
  "required": [
    "age",
    "name",
  ],
  "title": "person",
  "type": "object"
}
```

尽管第一段 json 对开发的人来说简单明了，我们很容易就知道它是表示一个个人身份的字符串,但也会有很多其他疑问，例如：

```javascript
 1.age可以是字符串吗，范围是多少？
 2.name有多少字符限制吗？
 3.sex是必须的吗？可以是man和woman吗？
 等等...
```

或许刚开始定义时候还会记得，随着项目的迭代,一年后就会未必能想起来这些字段的含义,所有就有了一套 json 的规范 JSON Schema,如果熟悉 typescript,就会觉得有点类似 json-schema 之于 json，就如同 typescript 之于 javascript

## Json schema 格式

json schema 最外层包含以下几个字段：

| 字段 | 含义|
| --- | --- |
| $schema | $schema 关键字状态，表示这个模式与 v4 规范草案书写一致。用于指定 JSONSchema 的版本信息。|
| title | 标题，用来描述结构|
| description | 描述。|
| type | 类型|
| properties | 定义属性|
| required | 必需属性|

## 深入了解属性一些基本用法

假如某天接到个需求，需要对年龄做了限制需要 18 到 60 岁的,我们可以这样处理

```javascript
{
  "$schema": "http://json-schema.org/draft-04/schema#",
  "description": "personInfo",
  "properties": {
      "age": {
      "description": "年龄必须大于18岁。并且不能超过60岁",
      "maximum": 60,
      "minimum": 18,
      "type": "number"
    }
  }
}
```

里面用到的了 properties:该关键字的值是一个对象。minimum 和 maximum 该关键字数字的范围

```javascript
{
  "type": "number",
  "minimum": 18,
  "maximum": 60
}

如下:
{"age": "18"} // not OK
{"age": 18} // OK
{"age": 1} // not OK
```

某天产品说性别可以不是必填，也可以用 required 这样处理

_required:该关键字的值是一个数组，而数组中的元素必须是字符串，而且必须是唯一的。该关键字限制了 JSON 对象中必须包含哪些一级 key。 如果一个 JSON 对象中含有 required 关键字所指定的所有一级 key，则该 JSON 对象能够通过校验_

```javascript
{
  "$schema": "http://json-schema.org/draft-04/schema#",
  "description": "personInfo",
  "properties": {
      "age": {
      "description": "年龄必须大于18岁。并且不能超过60岁",
      "maximum": 60,
      "minimum": 18,
      "type": "number"
    },
      "name": {
      "description": "姓名",
      "minLength": 2,
      "maxLength": 4
      "type": "string"
    },
      "sex": {
      "description": "性别",
      "type": "string"
    }
  }
  "required": ["age","name"]
}

如下:
{"age": 18,"name":'wei'} // OK
{"age": 18,"sex":"male"} // not OK
```

某个表单内有多个输入框，每个输入框的值 a*xxx 必须都是 string,那我们可以用 patternProperties 来正则匹配所有以 a*开头的值。在此示例中，名称以前缀开头的任何属性都 a 必须是数字，并且任何具有前缀的属性都 b 必须是字符串。任何与任一正则表达式都不匹配的属性将被忽略。

_patternProperties: 该关键字的值是一个对象，该 JSON 对象的每一个一级 key 都是一个正则表达式。_

```javascript
"patternProperties": {
      "^a": {
          "type": "number"
      },
      "^b": {
          "type": "string"
      }
}

// OK
{ "a_25": 545 }

// OK
{ "b_0": "This is a string" }
```

items:关键字的值是一个有效的 JSON Schema 时，只有待校验 JSON 数组中的所有元素均通过校验，整个数组才算通过校验

```javascript
{
   "type": "array",
   "items": {
     "type": "number",
   }
}


[1, 2, 3, 4, 5] // OK
[1, 2, "3", 4, 5]  // not OK，单个“非数字”会导致整个数组无效
[] // OK，空数组始终有效
```

additionalItems:剩余的所有元素都要满足 additionalItems 的要求

```javascript
{
    "type": "array",
    "items": [
        {
            "type": "string",
            "minLength": 5
        },
        {
            "type": "number",
            "minimum": 10
        }
    ],
    "additionalItems": {
        "type": "string",
        "minLength": 2
    }
}

//意思就是，除了第一个第二元素外，剩余的其他元素是string类型，且可接受的最短长度为2，才可以通过校验
```

### 全类型可用

多人开发时，对性别用的 key 有些用 male，一些用 man,所以要对性别的 json 统一规范字段,对性别字段进行规范,字段必须是 male 和 female

enum:关键字的值是一个数组，该数组至少要有一个元素，且数组内的每一个元素都是唯一的

```javascript
    "sex": {
      "description": "The gender of the person",
      "enum": [
        "male",
        "female"
      ],
      "type": "string"
    }
{"sex": "male"} //Ok
{"sex": "man"} //not Ok
```

### 高阶用法
在对地址的开发时，往往都会有重复的对象定义,就可以用到 dependencies，也可以结合`$id`和`$ref`进行引用处理重复的结构体

```javascript
{
  "type": "array",
  "items": { "$ref": "#address" },
  "definitions": {
    "address":{
      "$id":"#address",
      "positiveInteger":{
        "exclusiveMinimum":true,
        "minimum":0,
        "type":"integer",
      }
      "type":"object"
    }
  }
}
```

在碰到树状结构的数据时，甚至我可以用到递归来处理。例如，您可能有一个 person 模式包含一个 children 的数组，每个 children 也是 person 的实例

```javascript

{
  "type": "object",
  "properties": {
    "$id":"#address",
    "name": { "type": "string" },
    "children": {
      "type": "array",
      "items": { "$ref": "#address" }
    }
  }
}
```

上面只是介绍了 json-schema 的一些基础用法,它还有很多比较强的逻辑功能,如 dependencies，additionalItems，consts, allOf, anyOf, oneOf, not, if……then……else 等等。

详细其他属性可以访问[json-schema 官网](https://json-schema.org/)。

