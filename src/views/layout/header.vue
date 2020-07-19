<template>
    <div>
        <el-menu mode="horizontal">

            <el-menu-item class="menuItem" index="1" id="home">
                <router-link tag='a' :to="'/'" >
                    <i class="el-icon-document" style="font-size: 20px;"></i>
                    <span> 首页 </span>
                </router-link>
            </el-menu-item>

            <el-menu-item class="menuItem" index="2" id="kind">
                <router-link tag='a' :to="'/'" >
                    <i class="el-icon-collection" style="font-size: 20px;"></i>
                    <span> 归档 </span>
                </router-link>
            </el-menu-item>

            <el-menu-item class="menuItem" index="3" id="label">
                <router-link tag='a' :to="'/pyhub'" >
                    <i class="el-icon-orange" style="font-size: 20px;"></i>
                    <span> PyHub </span>
                </router-link>
            </el-menu-item>

            <el-menu-item class="menuItem" index="4" id="about">
                <router-link tag='a' :to="'/about'" >
                    <i class="el-icon-s-custom" style="font-size: 20px;"></i>
                    <span>关于</span>
                </router-link>
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