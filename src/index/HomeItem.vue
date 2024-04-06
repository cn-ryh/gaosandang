<script setup lang="ts">
import { Ref, ref } from 'vue';
import { Button, Card, Table, TableColumn, Link } from '@arco-design/web-vue';
import { IFileLink, defaultList } from "./list";
const FileLinks: Ref<IFileLink[]> = ref(defaultList);
// function jump(idx: number): void {
//     window.open(FileLinks.value[idx].url);
// }
function jumpQQ() {
    window.open("https://qm.qq.com/q/jxcFPBXyhy");
}
let year = ref(new Date().getFullYear() + ((new Date().getMonth() == 6) ? (new Date().getDate() < 8 ? 0 : 1) : (new Date().getMonth() < 6 ? 0 : 1)));
let date = ref(Math.floor((new Date(`${year.value}-06-06`).getTime() - new Date().getTime()) / 86400000));
</script>
<template>
    <div id="timer"
        style="font-size:large;font-weight: 700;width: 99vw;height: 8vh;background-color: var(--color-bg-2);text-align: center;">
        <div>
            <span style="margin-top: 1vh;">距离 {{ year }} 高考仅剩</span>
            <br><span style="color: red;font-size: x-large;"> <b style="font-size:x-large;font-weight: 900;">{{ date
                    }}</b>
                天</span>

        </div>
    </div>
    <Card style="width: 60vw;margin-left: 20vw;height: 80vh;margin-top: 8vh;opacity: 0.94;">
        <center>

            <!-- <List style="width: 45vw;height: 60vh;margin-top: 1vh">
                <List.Item v-for="(item, idx) in FileLinks" :key="idx" @click="jump(idx)">
                    <List.Item.Meta :title="item.title" :description="item.description"><template #avatar>
                            <Avatar shape="square" style="width: 3.5vw;">
                                <img alt="avatar" src="bag.png" />
                            </Avatar>
                        </template>
</List.Item.Meta>
</List.Item>
</List> -->
            <br>
            <div style="margin-top: 1vh;">
                直链下载由开发者提供，处于试用阶段，可能出现不稳定的情况，请谅解。
            </div>
            <Table :data="FileLinks" style="margin-top: 1vh;">
                <template #columns>
                    <TableColumn title="名称" data-index="title">
                    </TableColumn>
                    <TableColumn title="百度网盘" data-index="title">
                        <template #cell="{ record }">
                            <Link target="_blank" v-if="record.url[0] && record.url[0] !== ``" :href="record.url[0]">
                            Link
                            </Link>
                            <span v-if="record.url[0] == `` || !record.url[0]">暂无数据</span>
                        </template>
                    </TableColumn>
                    <TableColumn title="阿里云盘" data-index="title">
                        <template #cell="{ record }">
                            <Link target="_blank" v-if="record.url[1] && record.url[1] !== ``" :href="record.url[1]">
                            Link
                            </Link>
                            <span v-if="record.url[1] == `` || !record.url[1]">暂无数据</span>
                        </template>
                    </TableColumn>
                    <TableColumn title="夸克网盘" data-index="title">
                        <template #cell="{ record }">
                            <Link target="_blank" v-if="record.url[2] && record.url[2] !== ``" :href="record.url[2]">
                            Link
                            </Link>
                            <span v-if="record.url[2] == `` || !record.url[2]">暂无数据</span>
                        </template>
                    </TableColumn>
                    <TableColumn title="直链下载" data-index="title">
                        <template #cell="{ record }">
                            <Link target="_blank" v-if="record.url[3] && record.url[3] !== ``" :href="record.url[3]">
                            Link
                            </Link>
                            <span v-if="record.url[3] == `` || !record.url[3]">暂无数据</span>
                        </template>
                    </TableColumn>
                    <!-- </a> -->
                </template>
            </Table>
        </center>
        <p style="float: inline-end;">点击这里可以翻页哦~</p>
    </Card>
    <Card style="position: fixed;width: 15vw;height: 60vh;right: 3vw; top:18vh;">
        <div>
            <h2>
                特别鸣谢
            </h2>
            <p>感谢学长筱雅、张三、小芋头等笔袋朋友提供的资料
            </p>
            <br>
            <p>在资料的收集过程中，还有很多人提供了帮助，我们无法一一列出，在此一并表示感谢。</p>
        </div>

        <Button @click="jumpQQ" type="primary">
            网站交流与反馈
        </Button>
    </Card>
</template>