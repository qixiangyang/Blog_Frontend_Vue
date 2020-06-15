<template>
    <el-container>

        <el-header>
            <Header></Header>
        </el-header>

        <el-container>
            <router-view></router-view>
            <PersonalInfo></PersonalInfo>
        </el-container>

        <el-footer>
            <Footer></Footer>
        </el-footer>

    </el-container>
</template>

<script>
    import Header from './layout/header';
    import Footer from './layout/footer';
    import PersonalInfo from './layout/personal'
    export default {
        name: "UserView",
        components: {
            Header,
            Footer,
            PersonalInfo
        }
    }
</script>

<style scoped>
    .el-container {
        width: 90%;
        min-height: 100px;
        height: auto;
        margin: 0 auto;
        justify-content: space-between;
    }
    .el-header, .el-footer {
        color: #333;
        text-align: center;
        line-height: 60px;
    }
    .BlogList {
        margin-left: 1px;
    }
</style>