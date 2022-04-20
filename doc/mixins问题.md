## 简单定义

假如有两个相似的组建，这时候的处理方法有两种。

- 定义两个组建
- 定义一个组建，使用mixins（局部差异部分用props控制）

其实，哪种方法都不好。

第一种做了重复工作，第二种如果采用过多的props以后很难维护。

## mixins实例

```
//toggle.js
export const toggle = {
  data() {
    return {
      "show": false
    }
  },
  methods: {
    changeState() {
      this.show = !this.show;
    }
  }
};
```

```
<template>
  <div>
    <div v-show="show">
      <p>提示框</p>
    </div>
    <button @click="changeState">click</button>
  </div>
</template>

<script>
import {toggle} from './mixins/toggle'

export default {
  mixins: [toggle]
}
</script>
```

## 全局注入

这种方式不推荐