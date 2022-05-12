<template>
    <div class="app">
        <el-row>
            <el-col :span="24">
                参考：https://blog.csdn.net/weixin_60382322/article/details/121998611   将 right的值调一下
                <el-switch
                    active-color="#53A73F"
                    inactive-color="#999999"
                    active-text="ON"
                    inactive-text="OFF"
                    >
                </el-switch>
            </el-col>
        </el-row>
    </div>
</template>

<script>
export default {
    data() {
        return {
            value1: true,
            value2: true,
            val: ""
        }
    },
    methods: {
        getTaskSubscribeState(val){
            console.log(val);
            return val;
        }
    }
 }
</script>

<style>
.app {
    font-size: 30px;
    text-align: center;
    margin-top: 350px;
}

.el-switch__label * {
  line-height: 1;
  font-size: 12px;
  display: inline-block;
}
.el-switch__label {
  position: absolute;
  display: none;
  color: #fff !important;
  font-size: 12px !important;
}
/*打开时文字位置设置*/
.el-switch__label--right {
  z-index: 1;
  right: -6px;
}
/*关闭时文字位置设置*/
.el-switch__label--left {
  z-index: 1;
  left: 20px;
}
/*显示文字*/
.el-switch__label.is-active {
  display: block;
}
/*开关宽度*/
.el-switch .el-switch__core,
.el-switch .el-switch__label {
  width: 50px !important;
}
</style>
