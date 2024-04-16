<template>
    <div class="main__search container">
        <input type="text" class="main__search_input" placeholder="Найти фильм, сериал ..." v-model="text">

        <div class="main__search_list" v-if="searchArray">
            <SearchContent v-for="item in searchArray" :key="item.id" :item="item" />
        </div>

    </div>
</template>

<script setup>
import SearchContent from './SearchContent.vue';

import { ref, watch, computed } from "vue";


let text = ref('')

import { useSearch } from "@/stores/search";
const searchStores = useSearch()

const searchArray = computed(() => searchStores.result)


let timer = null

watch(text, (val) => {

    clearTimeout(timer)

    timer = setTimeout(() => {
        searchStores.getSearch(val)
    }, 500)
})

</script>
