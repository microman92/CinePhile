<template>

    <section class="main__top" v-if="topMovies">
        <h2 class="main__top_title">
            ТОП
            <span>10</span>
        </h2>

        <swiper :navigation="true" :modules="modules" :breakpoints="swiperOptions.breakpoints" :space-between="25">
            
            <swiper-slide class="main__top_item" v-for="(item, i) in topMovies" :key="item.id">

                <div class="main__top_item-info">
                    <span>{{ i + 1 }}</span>
                </div>

                <img v-lazy="fullImg + item.backdrop_path" alt="" class="main__top_item-img">
            </swiper-slide>

        </swiper>

    </section>

    <Loader v-else />
</template>

<script setup>

import { fullImg, img } from "@/url.js";
import { useTop } from '@/stores/top.js'
import { computed, ref } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation } from 'swiper';
import 'swiper/css/navigation'
import 'swiper/css';

const topStore = useTop()
topStore.getTop(10)
const topMovies = computed(() => topStore.top)

const modules = ref([Navigation])
let swiperOptions = ref({
    breakpoints: {

        320: {
            slidesPerView: 1
        },
        576: {
            slidesPerView: 1
        },
        992: {
            slidesPerView: 2
        },
        1200: {
            slidesPerView: 2
        },
        1400: {
            slidesPerView: 3.5
        },
    }
})

</script>

<style lang="scss" scoped></style>