<template>
    <div class="loading">

        <div class="loading__spinner">

        </div>

    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.loading {
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;

    &__spinner {
        width: 50px;
        height: 50px;
        border-radius: 50%;
        border: 5px solid transparent;
        border-top: 5px solid #149A03;
        animation: loader 1s infinite;
    }
}

@keyframes loader {
    0% {
        transform: rotate(0deg);
    }
    100%{
        transform: rotate(360deg);
    }
}
</style>