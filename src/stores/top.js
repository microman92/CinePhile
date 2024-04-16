import { defineStore } from 'pinia'
import { apiKey, getUrl } from '../url'
import axios from 'axios'



export const useTop = defineStore({

    id: 'Top',

    state: () => ({
        url: 'https://api.themoviedb.org/3/movie/top_rated',
        top: null
    }),

    actions: {
        async getTop(count) {
            try {
                const res = await axios.get(`${this.url}?api_key=${apiKey}&language=ru-RU`)
                let array = res.data.results
                let data = []
                array.forEach((item, i) => i < count ? data.push(item) : '')
                this.top = data

            } catch (error) {
                console.error('Произошла ошибка в получении топ 10 фильмов', error);
            }
        }
    },

    getters: {}
})