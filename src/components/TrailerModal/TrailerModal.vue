<template>
    <div class="trailerModal" @click="closeModal">
        <div class="trailerModal__block">
            <iframe width="100%" height="100%" :src="video(getVideoId)" title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
    </div>





</template>

<script setup>

const video = (id) => `https://www.youtube.com/embed/${id}?rel=0&showinfo=0&iv_load_policy=3&modestbranding=1`

const props = defineProps({
    getVideoId: String,
    openModal: Boolean
})


const closeModal = () => {
    emit('closeModal')
}
const emit = defineEmits(['closeModal']);

</script>

<style lang="scss" scoped>
.trailerModal {
    background: rgba(0, 0, 0, 0.80);
    backdrop-filter: blur(10px);
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;

    &__block {
        height: 55vh;
        width: 45vw;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        border-radius: 25px;
        overflow: hidden;
        box-shadow: 0 0 20px rgba(255, 255, 255, 0.3);

        & iframe {
            border-radius: 25px;

        }
    }

}

.ytp-pause-overlay {
    display: none !important;
}
</style>
