<template>
  <el-menu
    class="menu-nav"
    router
    :default-active="currentPath"
    background-color="#20222A"
    text-color="rgba(255,255,255,.8)"
    active-text-color="#ffd04b"
    :collapse="isCollapse">
    <!-- 主页 -->
    <el-menu-item index="/console">
      <i class="el-icon-s-home"></i>
      <span slot="title">主页</span>
    </el-menu-item>
    <!-- 通用组件 -->
    <el-submenu index="0">
      <template slot="title">
        <i class="el-icon-menu"></i>
        <span>通用组件</span>
      </template>
      <el-menu-item index="/user">Table表格</el-menu-item>
      <el-menu-item index="/descriptor">Dialog对话框</el-menu-item>
    </el-submenu>
    <!-- 核心插件 -->
    <el-submenu index="1">
      <template slot="title">
        <i class="el-icon-help"></i>
        <span>核心插件</span>
      </template>
      <el-menu-item index="/vuex">Vuex</el-menu-item>
      <el-menu-item index="/descriptor">装饰器</el-menu-item>
    </el-submenu>
    <!-- 外部插件 -->
    <el-submenu index="2">
      <template slot="title">
        <i class="el-icon-s-operation"></i>
        <span>外部插件</span>
      </template>
      <el-menu-item index="/echarts">图表</el-menu-item>
      <el-menu-item index="/descriptor">装饰器</el-menu-item>
    </el-submenu>
    <!-- 常用函数 -->
    <el-submenu index="3">
      <template slot="title">
        <i class="el-icon-setting"></i>
        <span>常用函数</span>
      </template>
      <el-menu-item index="/echarts">数字</el-menu-item>
      <el-menu-item index="/time">时间</el-menu-item>
      <el-menu-item index="/storage">存储</el-menu-item>
      <el-menu-item index="/optimize">优化（防抖节流等）</el-menu-item>
    </el-submenu>

  </el-menu>
</template>

<script>
export default {
  props: ['isCollapse'],
  data () {
    return {
      currentPath: location.pathname
    }
  }
}
</script>

<style lang="scss" scoped>
  .el-menu {
    border: none;
  }
  .menu-nav:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }
</style>
