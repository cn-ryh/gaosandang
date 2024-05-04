<script setup lang="ts">
import { Menu, MenuItem } from '@arco-design/web-vue';
import '@arco-design/web-vue/es/menu/style';
import { ref } from 'vue';
const links: string[] = ['https://t2b5y-my.sharepoint.com/:f:/g/personal/gaosandangadmin_t2b5y_onmicrosoft_com/EurHw6zXMuFKuJxAz3F3fK8Bqss44X3j9HEASrWa1v_V8A?e=gWYooG', './sets.html'];
function changeView(key: string) {
    window.location.href = links[+key];

}
let year = ref(new Date().getFullYear() + ((new Date().getMonth() == 6) ? (new Date().getDate() < 8 ? 0 : 1) : (new Date().getMonth() < 6 ? 0 : 1)));
let date = ref(Math.ceil((new Date(`${year.value}-06-06`).getTime() - new Date().getTime()) / 86400000));

</script>
<template>
    <div class="menu-demo">
        <Menu mode="horizontal" theme="dark" :default-selected-keys="[]" @menuItemClick="changeView">
            <MenuItem key="-1" :style="{ padding: 0, marginRight: '38px' }" disabled>
            <div>
                <span style="color: white;font-size: large;">距离 {{ year }} 高考仅剩&emsp;</span>
                <span style="color: red;font-size: x-large;"> <b style="font-size:x-large;font-weight: 900;">{{ date
                        }}</b>
                    天</span>

            </div>
            </MenuItem>
            <MenuItem key="0">文件列表</MenuItem>
            <MenuItem key="1">合集</MenuItem>
            <MenuItem key="2">Cloud Service</MenuItem>
            <MenuItem key="3">Cooperation</MenuItem>
        </Menu>
    </div>
</template>
<style scoped>
.menu-demo {
    box-sizing: border-box;
    width: 99.7%;
    padding: 0px;
    background-color: var(--color-neutral-2);
}
</style>