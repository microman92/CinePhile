import { defineStore } from 'pinia'

import { apiKey } from '../url'
import axios from 'axios'



export const useUpcoming = defineStore({

    id: 'Upcoming',

    state: () => ({
        url: 'https://api.themoviedb.org/3/movie/upcoming',
        upcoming: null
    }),

    actions: {
        async getUpcoming() {
            try {
                let res = await axios.get(`${this.url}?api_key=${apiKey}&language=ru-RU`)
                this.upcoming = res.data.results


            } catch (error) {
                console.error('Произошла ошибка в получении предстоящих фильмов', error);
            }
        },

    },

    getters: {}
})