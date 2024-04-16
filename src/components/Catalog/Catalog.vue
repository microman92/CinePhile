<template>
    <div class="main__catalog container" v-if="allContent">
        <h2 class="main__catalog_title">
            {{ title }}
        </h2>

        <div class="main__catalog_list">

            <CatalogItem v-for="item in allContent" :key="item.id" :item="item" :type="type" />
        </div>

        <Loader v-if="loading" />

    </div>
</template>

<script setup>
import { computed, ref, onMounted } from 'vue';
import CatalogItem from './CatalogItem.vue'

const props = defineProps(['type'])

import { usePopular } from '@/stores/popular.js'
const popularStore = usePopular()
popularStore.getPopular({ type: props.type })
const title = computed(() => props.type == 'movie' ? 'Все фильмы' : 'Все сериалы')

let currentPage = ref(1)
let allContent = ref([])
let loading = ref(false)

const getContent = async () => {

    if (!loading.value) {
        loading.value = true
        await popularStore.getPopular({ type: props.type, page: currentPage.value })
        const popular = props.type == 'movie' ? popularStore.popularMovies : popularStore.popularTvs

        allContent.value.push(...popular)
        loading.value = false
        currentPage.value++
    }
}


onMounted(() => {

    window.onscroll = () => {
        scrollY + window.innerHeight >= document.body.scrollHeight ? getContent() : ''
    }

    getContent()

})


</script>
