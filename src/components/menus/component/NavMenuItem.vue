<template>
      <!-- 一级菜单 -->
    <el-menu-item v-if="!datas.child" :index="datas.url">
      <i :class="datas.icon"></i>
      <span slot="title">{{datas.name}}</span>
    </el-menu-item>
    <!-- 二级菜单 -->
    <el-submenu :index="datas.url" v-else >
        <template slot="title">
          <i :class="datas.icon"></i>
          <span>{{datas.name}}</span>
        </template>
       <!-- 多级菜单 -->
       <nav-menu-item   v-for="(child,i ) in datas.child" :datas="child" :key="i"/>
      </el-submenu>
</template>
<script>
export default {
    name:"NavMenuItem",
    //接收父组件传递的数据，进行渲染
    props:["datas"]
};
</script>