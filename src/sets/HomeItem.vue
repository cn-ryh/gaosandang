<script setup lang="ts">
import { Ref, ref } from 'vue';
import { Button, Card, Table, TableColumn, Link, Tooltip } from '@arco-design/web-vue';
import { IFileLink, defaultList } from "./list";
import axios from 'axios';
import HeaderView from '@/moudles/HeaderView.vue';
const FileLinks: Ref<IFileLink[]> = ref(defaultList);

axios.get(`https://lenovo.cnryh.cn:10087/gaosandang/getResources`).then((res) => {
    FileLinks.value = res.data;
});
function jumpQQ() {
    window.open("https://qm.qq.com/q/jxcFPBXyhy");
}
</script>
<template>
    <HeaderView></HeaderView>
    <Card id="FileListCard" style="overflow: auto;">
        <center>
            <br>
            <div style="margin-top: 1vh;">
                直链下载由开发者提供，处于试用阶段，可能出现不稳定的情况，请谅解。
            </div>
            <Table :pagination="{ pageSize: 25, hideOnSinglePage: true }" sticky-header :scroll="{ x: 600, y: 400 }"
                id="mainTable" :data="FileLinks" style="margin-top: 1vh;overflow: auto;">
                <template #columns>
                    <TableColumn title="名称" data-index="title" fixed="left" :width="150">
                        <template #cell="{ record }">
                            <Tooltip v-if="record.description !== ``" :content="record.description">
                                <span>{{ record.title }}</span>
                            </Tooltip>
                            <span v-if="record.description === ``">{{ record.title }}</span>
                        </template>
                    </TableColumn>
                    <TableColumn title="百度网盘" data-index="title" :width="100">
                        <template #cell="{ record }">
                            <Link target="_blank" v-if="record.url[0] && record.url[0] !== ``" :href="record.url[0]">
                            Link
                            </Link>
                            <span v-if="record.url[0] == `` || !record.url[0]">暂无</span>
                        </template>
                    </TableColumn>
                    <TableColumn title="阿里云盘" data-index="title" :width="100">
                        <template #cell="{ record }">
                            <Link target="_blank" v-if="record.url[1] && record.url[1] !== ``" :href="record.url[1]">
                            Link
                            </Link>
                            <span v-if="record.url[1] == `` || !record.url[1]">暂无</span>
                        </template>
                    </TableColumn>
                    <TableColumn title="夸克网盘" data-index="title" :width="100">
                        <template #cell="{ record }">
                            <Link target="_blank" v-if="record.url[2] && record.url[2] !== ``" :href="record.url[2]">
                            Link
                            </Link>
                            <span v-if="record.url[2] == `` || !record.url[2]">暂无</span>
                        </template>
                    </TableColumn>
                    <TableColumn title="直链下载" data-index="title">
                        <template #cell="{ record }">
                            <Link target="_blank" v-if="record.url[3] && record.url[3] !== ``" :href="record.url[3]">
                            Link
                            </Link>
                            <span v-if="record.url[3] == `` || !record.url[3]">暂无</span>
                        </template>
                    </TableColumn>
                    <!-- </a> -->
                </template>
            </Table>
        </center>
        <p v-if="FileLinks.length > 25" style="float: inline-end;">点击这里可以翻页哦~</p>
    </Card>
    <Card id="sidebarCard" style="">
        <div>
            <h3>特别鸣谢</h3>
            <p>感谢学长筱雅、张三、小芋头等笔袋朋友提供的资料</p>
            <p>在资料的收集过程中，还有很多人提供了帮助，我们无法一一列出，在此一并表示感谢。</p>

        </div>
        <br>
        <div> 资源来源于网络，如有侵权请联系删除：QQ 3551045690</div>
        <br>
        <Button @click="jumpQQ" type="primary">
            网站交流与反馈
        </Button>
    </Card>
</template>
<style scoped>
#FileListCard {
    width: 45vw;
    margin-left: 15vw;
    height: 70vh;
    margin-top: 14vh;
    opacity: 0.94;
}

#sidebarCard {
    position: fixed;
    width: 28vw;
    height: 60vh;
    right: 3vw;
    top: 18vh;
}

@media only screen and (max-width:1024px) {
    #FileListCard {
        width: 60vw;
        margin-left: 8vw;
        height: 80vh;
        margin-top: 8vh;
        opacity: 0.94;
    }

    #sidebarCard {
        width: 25vw;
    }
}

@media only screen and (max-width:750px) {
    #FileListCard {
        width: 85vw;
        margin-left: 7vw;
        height: 70vh;
        margin-top: 8vh;
        opacity: 0.94;
    }

    #sidebarCard {
        position: relative;
        margin-top: 5vh;
        width: 99vw;
        left: 0.2vw;
        bottom: 0vh;
        height: 40vh;
        top: auto;
        right: auto
    }
}

@media only screen and (max-width:600px) {
    #FileListCard {
        width: 95vw;
        margin-left: 2vw;
        height: 80vh;
        margin-top: 8vh;
        opacity: 0.94;
    }

    #sidebarCard {
        position: relative;
        margin-top: 5vh;
        width: 99vw;
        left: 0.2vw;
        bottom: 0vh;
        height: 30vh;
        top: auto;
        right: auto;
        overflow: auto;
    }
}
</style>