<template>
    <div>
        <el-row v-for="(item, index) in tableData" :key="index">
            <el-card id="PyArticleList">

                    <div id="PyArticleTitle">
                        <a href="https://www.baidu.com/">
                            {{ item.title }}
                        </a>

                    </div>
                    
                    <div id="PyArticleAttribute">
                        <i class="el-icon-s-custom" style="font-size: 15px;"></i>
                        <span style="font-size: 15px"> {{ item.author}} </span>

                        <i class="el-icon-timer" style="font-size: 15px; margin-left: 5px"></i>
                        <span style="font-size: 15px" id="transformDate"> {{ item.publish_time | dateFilter}}</span>

                        <i class="el-icon-collection-tag" style="font-size: 15px; margin-left: 5px"></i>
                        <span style="font-size: 15px"> {{ item.category}} </span>
                    </div>

                    <div id="PyArticleContent">
                        {{ item.brief_content }}

                        <div style="margin-top: 10px">
                            <a :href=item.url>
                                阅读原文
                            </a>
                        </div>

                    </div>

            </el-card>
        </el-row>
    </div>
</template>

<script>
    let moment = require("moment");
    export default {
        name: "PyHub",
        data(){
            return {
                tableData: [
                    {
                        "title": "this is a title",
                        "preview": "this is a preview | this is a preview",
                        "brief_content": "this is a brief content",
                        "publish_time": "2020-05-22 09:30:26",
                        "author": "author 1",
                        "category": "category 1",
                        "url": "https://www.baidu.com/"
                    },
                    {
                        "title": "this is a title 2",
                        "preview": "this is a preview 2 | this is a preview 2",
                        "brief_content": "this is a brief content2 this is a brief content this is a brief content" +
                            "this is a brief content this is a brief content this is a brief content this is a brief content" +
                            "this is a brief content this is a brief content this is a brief content this is a brief content",
                        "publish_time": "2020-05-22 09:30:26"
                    },
                    {
                        "title": "this is a title 3",
                        "preview": "this is a preview 3 | this is a preview 3",
                        "brief_content": "this is a brief content 3",
                        "publish_time": "2020-05-22 09:30:26"
                    },
                    {
                        "title": "this is a title 4",
                        "preview": "this is a preview 4 | this is a preview 4",
                        "brief_content": "this is a brief content  4",
                        "publish_time": "2020-05-22 09:30:26"
                    }

                ],
            }
        },
        methods: {
        },
        filters: {
            dateFilter(time){
                let dateInfo = moment(time);
                let nowTime =  moment();

                let seconds = nowTime.diff(dateInfo,"second");
                if ( seconds <= 60){
                    return "发布于" + seconds + "秒前"
                }

                let minutes = Math.ceil(seconds/60);
                if (minutes <= 60){
                    return "发布于" + minutes + "分钟前"
                }

                let hours = Math.ceil(minutes/60);
                if (hours <= 24){
                    return "发布于" + hours + "分钟前"
                }

                let days = Math.ceil(hours/24);
                if (days <= 30){
                    return "发布于" + days + "天前"
                }

                let months = Math.ceil(days/30);
                if (months <= 12){
                    return "发布于" + months + "月前"
                }

                let years = Math.ceil(months/12);
                if (years > 1){
                    return "发布于" + months + "年前"
                }

                return time;
            }
        }
    }

</script>

<style scoped>

    #PyArticleList {
        height: auto;
        margin-top: 20px;
        width: 700px;
        cursor: pointer;
        float: left;
    }
    #PyArticleTitle{
        margin-left: 16px;
        font-size: 20px;
        font-weight: bold;
        text-align: left;
    }
    #PyArticleAttribute{
        margin-left: 16px;
        margin-top: 8px;
        width: 100%;
        font-size: 14px;
        text-align: left;
    }
    #PyArticleContent{
        width: 550px;
        height: auto;
        margin-top: 8px;
        margin-left: 16px;
        font-size: 16px;
        text-align: left;
    }

</style>