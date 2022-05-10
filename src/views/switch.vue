<template>
    <div class="app">
        <el-row>
            <el-col :span="24">
                <el-switch v-model="value1" active-text="按月付费" inactive-text="按年付费">
                </el-switch>
            </el-col>
            <el-col :span="24">
                <el-switch v-model="value2" active-text="按月付费" inactive-text="按年付费">
                </el-switch>
            </el-col>
            <el-col :span="24">
                <el-switch
                    :width="60"
                    :value="getTaskSubscribeState(val)"
                    active-color="#3399FF"
                    inactive-color="#CCCCCC"
                    active-value="1"
                    inactive-value="0"
                    :class="{'switch-is-actived': getTaskSubscribeState(val) === '1'}">
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

<style lang="scss" scoped>
    .app {
        font-size: 30px;
        text-align: center;
        margin-top: 350px;
    }

    .el-switch {
        /deep/ .el-switch__core {
            &::before {
                content: '关闭';
                color: #fff;
                position: absolute;
                transform: scale(0.85);
                left: 20px;
            }
        }

        &.switch-is-actived {
            /deep/ .el-switch__core {
                &::before {
                    content: '开启';
                    left: 10px;
                    transform: scale(0.85);
         }
    }
            }
        }
</style>
