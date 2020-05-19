<template>
    <div>
        <el-menu mode="horizontal">

            <el-menu-item class="menuItem" index="1" id="home">
                <Icon class="ios-home" type="ios-home" size="22" />首页</el-menu-item>

            <el-menu-item class="menuItem" index="2" id="kind">
                <Icon class="md-apps" type="md-apps" size="22" />分类</el-menu-item>

            <el-menu-item class="menuItem" index="3" id="label">标签</el-menu-item>

            <el-menu-item class="menuItem" index="4" id="about">
                <i class="el-icon-s-custom" style="font-size: 20px;"></i>
                <span>关于</span>
            </el-menu-item>

        </el-menu>
    </div>
</template>

<script>
    export default {
        name: "Header",
        data(){
            return {
                username: ''
            }
        },
    }
</script>

<style scoped>
    .el-row {
        font-size: 15px;
        text-align: center;
        margin-left: 100px;
        margin-top: 1px;
    }
</style>