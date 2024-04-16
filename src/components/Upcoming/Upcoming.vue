<template>
    <Transition name="upcoming">

        <div class="main__upcoming" v-if="getUpcomingMovies">
            <UpcomingItem v-for="(movie, i) in getUpcomingMovies" :key="movie.id" :movie="movie" :i="i"
                :slideView="slideView" :nextMovie="getUpcomingMovies[i + 1 == getUpcomingMovies.length ? 0 : i + 1]"
                @slideNext="slideNext" />
        </div>

        <Loader v-else />
    </Transition>
</template>

<script setup>
import UpcomingItem from './UpcomingItem.vue';
import { useUpcoming } from '@/stores/upComing.js';
import { computed, ref, onMounted } from 'vue'

const upcomingStore = useUpcoming()
upcomingStore.getUpcoming()

let slideView = ref(0)
let timeout = ref(null)

const getUpcomingMovies = computed(() => upcomingStore.upcoming)


const slide = () => {
    getUpcomingMovies.value.length - 1 == slideView.value ? slideView.value = 0 : slideView.value++
    timeout = setTimeout(() => slide(), 7000);
}



const slideNext = () => {
    clearTimeout(timeout)
    slide()
}

onMounted(() => timeout = setTimeout(() => slide(), 7000))


</script>
 