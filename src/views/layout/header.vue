<template>
    <div>
        <el-menu mode="horizontal" router>

            <el-menu-item class="menuItem" index="/" id="home">
                <i class="el-icon-document" style="font-size: 20px;"></i>
                <span> 首页 </span>
            </el-menu-item>

            <el-menu-item class="menuItem" index="/archives" id="kind">
                <i class="el-icon-collection" style="font-size: 20px;"></i>
                <span> 归档 </span>
            </el-menu-item>

            <el-menu-item class="menuItem" index="/pyhub" id="label">
                <i class="el-icon-orange" style="font-size: 20px;"></i>
                <span> PyHub </span>
            </el-menu-item>

            <el-menu-item class="menuItem" index="/about" id="about">
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
        margin-top: 8px;
    }
    .el-menu-item {
        margin-left: 15px;
    }
</style>