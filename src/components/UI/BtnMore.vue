<template>
    <router-link :to="`${type}/${id}`" class="btn__more">
        <img src="@/assets/images/more.svg" alt="">
        <span> Подробнее </span>
    </router-link>
</template>

<script setup>

const props = defineProps({
    type: String,
    id: Number
})

</script>

<style lang="scss" scoped>
.btn__more {
    background: #149A03;
    border-radius: 10px;
    width: 180px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    font-size: 20px;
    line-height: 30px;
    color: #ffffff;
}
</style>