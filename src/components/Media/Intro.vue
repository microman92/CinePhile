<template>

  <div class="main__intro" v-if="item">
    <img v-lazy="fullImg + item.poster_path" alt="" class="main__intro_bg" />
    <div class="main__intro_inner">
      <div class="main__intro_inner-left">
        <h1>{{ item.title || item.name }}</h1>
        <p>{{ item.overview || "Нет описания" }}</p>

        <p class="main__intro_inner-desc">
          <span>{{ getYear }} {{ getGenres }}</span>
          <span>{{ hours }}h {{ minutes }}m</span>
        </p>

        <Trailer @click="getTrailer(item.title)" />
        <TrailerModal v-if="openModal" :getVideoId="getVideoId" :openModal="openModal" @closeModal="closeModal" />

      </div>
      <div class="main__intro_inner-right">
        <img v-lazy="fullImg + item.poster_path" alt="" />
      </div>

      <div class="main__intro_actors">
        <h2 class="main__intro_actors-title">В главных ролях</h2>
        <Actors :type="type" :id="item.id" count="6" />
      </div>
    </div>
  </div>

</template>

<script setup>
import { computed, ref } from "vue";
import { fullImg, img } from "@/url.js";

const props = defineProps({
  type: String,
  item: Object,
});

const getYear = computed(
  () =>
    new Date(props.item.release_date).getFullYear() ||
    new Date(props.item.first_air_date).getFullYear()
);

const getGenres = computed(() =>
  props.item.genres.reduce((acc, item) => acc + `, ${item.name}`, "")
);

const hours = computed(
  () =>
    Math.floor(props.item.runtime / 60) ||
    Math.floor(props.item.number_of_episodes / 60)
);
const minutes = computed(
  () => props.item.runtime % 60 || props.item.number_of_episodes % 60
);

import { useTrailer } from "@/stores/youtube.js";
import TrailerModal from "../TrailerModal/TrailerModal.vue";

const trailerStores = useTrailer()
const getVideoId = computed(() => trailerStores.result)
let openModal = ref(false)


const getTrailer = (item) => {
  trailerStores.getVideo(item + ' трейлер')
  openModal.value = true
  trailerStores.getKinopoisk()
}

const closeModal = () => {
  openModal.value = false
}

</script>
