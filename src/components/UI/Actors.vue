<template>
    <div class="actors" v-if="actors">
        <div class="actors__item" v-for="actor in actors" :key="actor.id">
            <img v-lazy="img + actor.profile_path" alt="">
            <span>{{ actor.name }}</span>
        </div>
    </div>
</template>

<script setup>

import { useActors } from '@/stores/actors.js'
import { computed } from 'vue'
import { fullImg, img } from "@/url.js";

const actorStores = useActors()

const props = defineProps(['type', 'id', 'count'])

actorStores.getActors({ type: props.type, id: props.id })

const actors = computed(() => {

    let actorsArray = props.type == 'movie' ? actorStores.actorsMovie : props.type == 'tv' ? actorStores.actorsTv : ''
    if (actorsArray) {
        return actorsArray.slice(0, props.count)
    }

})


</script>

<style lang="scss" scoped>
.actors {
    display: flex;
    align-items: center;
    gap: 15px;
    flex-wrap: wrap;
    max-width: 450px;
    width: 100%;

    &__item {
        border-radius: 25px;
        border: 1px solid #FFF;
        background: rgba(20, 20, 20, 0.50);
        padding-right: 15px;
        display: flex;
        align-items: center;
        gap: 10px;

        & img {
            width: 50px;
            height: 50px;
            border-radius: 50%;
            object-fit: cover;
            border: 2px solid transparent;
        }

        & span {
            color: #FFF;
            font-size: 16px;
            line-height: 30px;
        }
    }
}

@media (max-width:992px) {
    .actors {
        justify-content: center;
        margin-bottom: 20px;

        &__item {
            & img {
                width: 40px;
                height: 40px;
            }
        }
    }
}
</style>