<template>
    <div>
        <el-card class="PersonCard">
            <div>
                <div class="image">
                    <img src="https://w-qh-1257950569.cos.ap-guangzhou.myqcloud.com/Blog/headProtait.jpg"
                            style="width: 100%;height: 100%;"/>
                </div>
            </div>
            <div>
                <p>{{ name }}</p>
            </div>

            <div style="align-content: center">
                <div class="inline">
                    <div style="font-weight: 700; font-size: 15px;">
                        {{ Info.ArticleNum }}
                    </div>
                    <p style="font-size: 13px;color: gray;">日志</p>
                </div>
                <div class="inline">
                    <div style="font-weight: 700; font-size: 15px;">
                        {{ Info.Cate }}
                    </div>
                    <p style="font-size: 13px;color: gray;">日志</p>
                </div>
            </div>
            <div class="logoGroup">
                <el-icon type="logo-github" size="18" />
                <el-icon type="md-aperture" size="18" />
                <el-icon type="logo-facebook" size="18" />
                <el-icon type="md-globe" size="18" />
            </div>
        </el-card>
    </div>
</template>

<script>
    export default {
        name: "PersonalInfo",
        data(){
            return{
                Info: {
                    "ArticleNum": 1,
                    "Cate": 2,
                    "Tags": 4
                },
                name: "加油马德里"
            }
        }
    }
</script>

<style scoped>
    .inline{
        float: left;
    }
    .image{
        margin-top: 20px;
    }
    .PersonCard{
        margin-top: 20px;
        height: 350px;
        width: 200px;
    }

</style>