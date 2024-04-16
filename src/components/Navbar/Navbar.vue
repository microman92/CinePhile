<template>

    <nav class="nav" :class="{ color: scrollValue > 0 }" id="navbar">
        <div class="nav__item container">
            <Router-Link class="logo" to="/">
                <img src="@/assets/images/Logo.svg" alt="">
            </Router-Link>

            <button class="nav__menu" @click="burger = !burger">
                <img v-show="!burger" src="@/assets/images/menu.svg" alt="">
                <img v-show="burger" src="@/assets/images/closeMenu.svg" alt="">
            </button>

            <ul class="nav__item_list" :class="{ active: burger }" @click="burger = false">
                <li v-for="link in links" :key="link.title">
                    <Router-Link @click="burger = false" :to="link.url" class="nav__item_list-link">{{
        link.title }}</Router-Link>
                </li>
                <li>
                    <Router-Link @click="burger = false" to="/search" class="nav__item_list-link">
                        <img src="@/assets/images/search.svg" alt="">
                    </Router-Link>
                </li>
            </ul>

        </div>
    </nav>
</template>

<script setup>
import { ref } from 'vue'

const scrollValue = ref(0)

const burger = ref(false)
const links = ref([
    { title: 'Главная', url: '/' },
    { title: 'Фильмы', url: '/movie' },
    { title: 'Сериалы', url: '/tv' },
])

window.addEventListener('scroll', () => scrollValue.value = window.scrollY)

</script>

<style lang="scss" scoped></style>