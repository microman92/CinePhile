<template>
    <section class="main__video" v-if="content">
        <router-link :to="props.type" class="main__video_title">
            <h2>{{ props.type == 'movie' ? 'Фильмы' : 'Сериалы' }}</h2>
            <img src="@/assets/images/arrow.png" alt="arrow">
        </router-link>

        <swiper :navigation="true" :modules="modules" :breakpoints="swiperOptions.breakpoints" :space-between="25">


            <swiper-slide class="main__video_item" v-for="item in content" :key="item.id" @click="getitem(item)">


                <img v-lazy="fullImg + item.backdrop_path" alt="" class="main__video_item-bg">

                <h2 class="main__video_item-title">{{ item.title || item.name }}</h2>
            </swiper-slide>

            <swiper-slide class="main__video_item">
                <router-link class="main__video_item-route" :to="props.type">
                    {{ props.type == 'movie' ? 'Все фильмы' : 'Все сериалы' }}
                </router-link>
            </swiper-slide>



        </swiper>


        <div class="main__in" ref="itemBlock">

            <ItemBlock :open="open" @close="close" :current="current" :type="type" />
        </div>


    </section>

    <Loader v-else />
</template>

<script setup>
import ItemBlock from '@/components/ItemBlock/ItemBlock.vue'
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation } from 'swiper';
import 'swiper/css/navigation'
import 'swiper/css'
import { usePopular } from '@/stores/popular.js'
import { ref, computed } from 'vue'
import { fullImg, img } from '@/url.js';
import { useItemById } from '@/stores/ItemById.js';
import { useActors } from '@/stores/actors.js'

const actorStores = useActors()
const itemByIdStore = useItemById()

const popular = usePopular()
const props = defineProps(['type'])
const modules = ref([Navigation])

const content = computed(() => props.type == 'movie' ? popular.popularMovies : popular.popularTvs)

popular.getPopular({ type: props.type })

let swiperOptions = ref({
    breakpoints: {

        320: {
            slidesPerView: 1.1
        },
        576: {
            slidesPerView: 1.5
        },
        768: {
            slidesPerView: 2.3
        },
        992: {
            slidesPerView: 3
        },
        1200: {
            slidesPerView: 3
        },
        1400: {
            slidesPerView: 3.5
        },
        1600: {
            slidesPerView: 5.5
        },
    }
})


let open = ref(false)


let current = ref(null)

let itemBlock = ref(null)


const getitem = async (item) => {

    current.value = null
    await itemByIdStore.getItemById({ type: props.type, id: item.id })

    current.value = props.type == 'movie' ? itemByIdStore.movie : itemByIdStore.tv
    open.value = true


    let itemTop = itemBlock.value.offsetTop


    window.scrollTo({
        top: itemTop - navbar.clientHeight,
        behavior: 'smooth'
    })
}

const close = () => {
    open.value = false


    props.type == 'movie' ? itemByIdStore.movie = actorStores.actorMovie = null : itemByIdStore.tv = actorStores.actorTv = null

}


</script>
