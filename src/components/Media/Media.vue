<template>
  <div class="main__media" v-if="item">
    <Intro :type="type" :item="item" />
    <Info :item="item" />
    <Rec :type="type" :rec="rec" />
  </div>

  <Loader v-else />
</template>

<script setup>
import Intro from "@/components/Media/intro.vue";
import Rec from "@/components/Media/Rec.vue";
import Info from "./info.vue";
const props = defineProps({
  type: String,
});

import { useItemById } from "@/stores/ItemById.js";
import { useRoute } from "vue-router";
import { computed, onBeforeUnmount } from "vue";
import { useRec } from '@/stores/rec.js'


const route = useRoute();

const itemStore = useItemById();
itemStore.getItemById({ type: props.type, id: route.params.id });

const recStore = useRec()
recStore.getRec({ type: props.type, id: route.params.id });

const rec = computed(() => {
  let arr = props.type == "movie" ? recStore.recMovie : recStore.Tv

  if (arr) {
    return arr.slice(0, 4)
  }

});

const item = computed(() =>
  props.type == "movie" ? itemStore.movie : itemStore.tv
);

onBeforeUnmount(() => {
  itemStore.movie = itemStore.tv = null;
});
</script>
