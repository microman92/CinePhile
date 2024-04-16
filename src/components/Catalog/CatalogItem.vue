<template>
    <router-link :to="`${type}/${item.id}`" class="main__catalog_list-item">

        <img v-lazy="fullImg + item.backdrop_path" alt="" class="main__catalog_list-item-img">
        <h2 class="main__catalog_list-item-title">{{ item.name || item.title }}</h2>

    </router-link>
</template>

<script setup>

import { computed } from 'vue';
import { fullImg, img } from "@/url.js";

const props = defineProps({
    item: Object,
    type: String
})





</script>