## 一、适用环境

我们部门的环境：vue2 + elementui2

其他的也差不多

## 二、为何引入

在开发过程中不用等后端提供**完整的接口**

主要表现在

- 一些特定接口，如翻页或者其他特殊点的功能，后端前期提供的接口往往数据不足或不对
- 如果用后端给的接口，经常宕机
- 如果用后端给的接口，经常改动（要不不说，要不说了前端就得跟着改）

等到后端接口定稿后，切换过来，能省很多事

## 三、使用方法

### 1.安装mock

```
npm install mockjs
```

### 2.入口文件

在main.js中引入mock.js

```
import './mock.js'
```

### 3.新建mock文件夹

在api文件夹同级目录新建mock文件夹

mock接口文档就写在该文件夹下

以迭代（或功能）为单文件

```
├─src
│  ├─api
│  ├─view
│  ├─mock
│  │  ├─index.js
│  │  ├─aaa.js
│  │  ├─bbb.js

```

为了方便引入，可以统一mock接口到index.js

```js
import axios from "@/utils/request";
import {AXIOS_API_CONFIG} from "../config";
import Mock from 'mockjs'

const Random = Mock.Random

export * from "./aaa";
export * from "./bbb";
```

之后在项目业务src的vue文件中解构引入即可

```js
<template>
    ...
</template>

<script>
    import { aaa } from "@/mock"
    ...
</script>

<style>
    ...
</style>
```

## 四、具体实现

### 1.接口定义

Mock.mock(url, type, data)

|参数名|参数需求|参数描述|例子|
|---|---|---|---|
|url|可选: URL 字符串或 URL 正则|拦截请求的地址|/mock|
|type|可选|拦截Ajax类型|GET、POST等|
|template|可选: 可以是对象或字符串|生成数据的模板|res，data|

### 2.响应数据

这个可以跟后端提前约定好，节省之后切换成本

```bash
{
    code: "1",
    message: "获取成功！",
    pagination: {
        total: 105,
        size: 10,
        current: 1
    },
    data: [
        {},
        {}
    ],
}
```

### 3.实际操作

接口编写 + 接口引用

#### (1)接口编写

例如：用户接口 `/mock/userDataApi.js`

```js
import Mock from 'mockjs';

const Random = Mock.Random;

const userData = () => {
  let data = {
    code: "1",
    message: "用户数据获取成功！",
    pagination: {
      total: 105,
      size: 10,
      current: 1
    },
    dataLists: [],
  };
  for (let i = 0; i < 105; i++) {
    let user = {
      'id': i + 1,
      'date': Random.date('yyyy-MM-dd'),
      'name': Random.cname(),
      'address': Mock.mock('@county(true)'),
      'phone': Mock.mock(/^1[0-9]{10}$/),
      'status': Random.integer(0, 1)
    };
    data.users.push(user);
  };
  return data;
}
Mock.mock('/api/users', userData);
```

#### (2)接口引用

```js
data() {
    return {
    userTable: [],
    userPagination: {
        total: 0,
        size: 10,
        current: 1,
    },
},
methods: {
    getUsers() {
    this.loading = true;
    axios("/api/users")
        .then((res) => {
            if (res.data.code === "1") {
                this.userTable = res.data.dataLists;
                this.userPagination = res.data.pagination;
            } else {
                this.$message.error(res.data.message);
            }
        })
        .catch((err) => {
            this.$message.error(res.data.message);
        });
    },

}
```

## 五、其他

### 1.正式联调

将接口替换一下

### 2.配置.gitignore

将mock文件夹放进去，避免污染项目。