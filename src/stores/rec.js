import {
    defineStore
} from 'pinia'
import {
    apiKey
} from '../url'
import axios from 'axios'



export const useRec = defineStore({

    id: 'Rec',

    state: () => ({
        url: 'https://api.themoviedb.org/3/',
        recMovie: null,
        recTv: null

    }),

    actions: {
        async getRec({
            type,
            id
        }) {
            try {


                const res = await axios.get(`${this.url}${type}/${id}/recommendations?api_key=${apiKey}&language=ru-RU`)
                type == 'movie' ? this.recMovie = res.data.results : this.recTv = res.data.results
            } catch (error) {

                console.error('Произошла ошибка в получении рекомендованного фильма или сериала', error);
            }
        }
    },

    getters: {}
})