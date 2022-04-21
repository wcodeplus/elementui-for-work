
## 介绍

官方概念：Vuex 是一个专为 Vue.js 应用程序开发的状态管理模式。它采用集中式存储管理应用的所有组件的状态，并以相应的规则保证状态以一种可预测的方式发生变化。适用于任意组件之间通信。

简单点说：Vuex是有五个部分组成的，分别state,getters,mutations,actions,modules。

1. state：所有组件要用的数据都放在这里
2. getters：所有组件要用的计算方法都放这
3. mutations：改变state的唯一方法（同步）
4. actions：改变state的方法（异步，其实也是改变你的mutations）
5. modules：一个store下可以分成很多子模块，子模块可以有自己的state.js,getters.js,actions.js,,mutations.js,index.js

```
// 写在computed中：
mapStates(['Name'])
mapGetters(['Name'])

// 写在methods中：
mapMutations(['Name'])
mapActions(['Name'])
```

```
// 简单的赋值（触发mutations）
this.$store.commit(name, val)

// 接口赋值（分发actions）
this.$store.dispatch(name, val)
	
```

## 简单使用

> 先在 Vuex 里面预设好值，给外部业务代码使用。

### 安装 vuex

```
npm install vuex --save
```

### 新建src/store/index.js

```
// 引入vuex

import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)

// 创建 state 变量
const state = { count: 1 }

// 实例化 Vuex.Store 对象
const store = new Vuex.Store({
	state
})

// 暴露 store 变量
export default store
```

### 在入口文件 main.js 中引入 src/store/index.js

```
import store from "./store/index"

new Vue({
	el: #app,
	router,
	store,
	...
})
```

### 使用 state

在业务代码中

```
this.$store.state.count
```

## 综合使用

> 先在 Vuex 里面预设好值，给外部业务代码使用。
> 且，外部业务代码还可以给**赋值**和取值

[Vuex图解](https://segmentfault.com/img/remote/1460000016145588)

### 先理解 Vuex 里的 actions/mutations/state

- state：存储公共数据的
- mutations：操作公共数据的
- actions：触发mutations的（这一步在某些时候不需要，可以直接调用mutations里面的方法）
- getters：基于state中的数据再做处理的（可以理解为store的计算属性）

修改值

- store.dispatch (用这个会促发 action/mutations)
- store.commit

参考：

[Vuex](https://segmentfault.com/a/1190000041285640)
[Vuex](https://segmentfault.com/a/1190000023771523)
[Vuex](https://segmentfault.com/a/1190000040927189)