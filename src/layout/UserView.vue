<template>
    <el-container>

        <el-header>
            <Header></Header>
        </el-header>

        <el-container>

        </el-container>

        <el-footer>
            <Footer></Footer>
        </el-footer>

    </el-container>
</template>

<script>
    import Header from '../layout/User/header';
    import Footer from '../layout/User/footer';
    export default {
        name: "UserView",
        components: {
            Header,
            Footer
        }
    }
</script>

<style scoped>
    .el-container {
        width: 83%;
        min-height: 100px;
        height: auto;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
    }
    .el-header, .el-footer {
        color: #333;
        text-align: center;
        line-height: 60px;
    }
</style>