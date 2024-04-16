
import { defineStore } from 'pinia'
import { apiKey } from '../url'
import axios from 'axios'



export const usePopular = defineStore({

    id: 'popular',

    state: () => ({
        url: 'https://api.themoviedb.org/3/',
        popularMovies: null,
        popularTvs: null
    }),

    actions: {
        async getPopular({ type, page = 1 },) {
            try {
                const res = await axios.get(`${this.url}${type}/popular?api_key=${apiKey}&page=${page}&language=ru-RU`)
                let data = res.data.results
                type == 'movie' ? this.popularMovies = data : this.popularTvs = data

            } catch (error) {
                console.error('Произошла ошибка в получении популярных фильмов или сериалов', error);
            }
        }
    },

    getters: {}
})