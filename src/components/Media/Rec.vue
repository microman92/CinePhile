<template>
    <div class="main__rec container">
        <h2 class="main__rec_title">Рекомендации</h2>

        <div class="main__rec_list">

            <router-link :to="`${item.id}`" class="main__rec_list-item" v-for="item in rec" :key="item.id">

                <img v-lazy="fullImg + item.backdrop_path" alt="" class="main__rec_list-item-img">
                <h2 class="main__rec_list-item-title">{{ item.name || item.title }}</h2>
                <h2 class="main__rec_list-item-title">{{ item.name || item.title }}</h2>

            </router-link>

        </div>

    </div>
</template>

<script setup>
import { fullImg, img } from "@/url.js";

const props = defineProps({
    rec: Array,
    type: String
})


</script>
