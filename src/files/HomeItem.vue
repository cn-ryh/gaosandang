<script setup lang="ts">
import { Ref, ref } from 'vue';
import { IFileLink, defaultList } from "./list";
import axios from 'axios';
import HeaderView from '../moudles/HeaderView.vue';
const FileLinks: Ref<IFileLink[]> = ref(defaultList);

axios.get(`https://lenovo.cnryh.cn:10087/gaosandang/getResources`).then((res) => {
    FileLinks.value = res.data;
});

</script>
<template>
    <HeaderView></HeaderView>

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