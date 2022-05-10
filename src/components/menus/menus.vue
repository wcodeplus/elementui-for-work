<template>
  <el-menu class="menu-nav" router :default-active="currentPath" background-color="#20222A" :unique-opend="true"
    text-color="rgba(255,255,255,.8)" active-text-color="#ffd04b" :collapse="isCollapse">
    <nav-menu-item v-for="(item,index)  in menu" :key="index" :datas="item" />
  </el-menu>
</template>

<script>
  import NavMenuItem from './component/NavMenuItem.vue';
  import routeData from '@/router';
  import { menu } from '@/constant'

  export default {
    props: ['isCollapse'],
    components: {
      NavMenuItem
    },
    data() {
      return {
        currentPath: location.pathname,
        menu
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
