import {
    defineStore
} from 'pinia'
import {
    apiKey
} from '../url'
import axios from 'axios'


export const useActors = defineStore({

    id: 'actors',

    state: () => ({
        url: 'https://api.themoviedb.org/3/',
        actorsMovie: null,
        actorsTv: null

    }),

    actions: {
        async getActors({
            type,
            id
        }) {
            try {

                let res = await axios.get(`${this.url}${type}/${id}/credits?api_key=${apiKey}&language=ru-RU`)

                let actors = res.data.cast
                type == 'movie' ? this.actorsMovie = actors : this.actorsTv = actors

            } catch (error) {

                console.error('Произошла ошибка в получении актёров', error);
            }
        }
    },

    getters: {}
})