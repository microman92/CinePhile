<template>


    <router-link :to="`${item.media_type}/${item.id}`" class="main__search_list-item">

        <img v-lazy="fullImg + item.backdrop_path" alt="" class="main__search_list-item-img">
        <h2 class="main__search_list-item-title">{{ item.name || item.title }}</h2>

    </router-link>
</template>

<script setup>
import { fullImg, img } from "@/url.js";

const props = defineProps({
    item: Object,
})





</script>