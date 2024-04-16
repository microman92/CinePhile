import { defineStore } from 'pinia'

import { apiKey } from '../url'
import axios from 'axios'


export const useSearch = defineStore({

    id: 'search',

    state: () => ({
        url: 'https://api.themoviedb.org/3/',
        result: null,
    }),

    actions: {
        async getSearch(text) {
            try {

                let res = await axios.get(`${this.url}/search/multi?api_key=${apiKey}&language=ru-RU&query=${text}`)
                this.result = res.data.results


            } catch (error) {
                console.error('Произошла ошибка при поиске данных', error);
            }
        },

    },

    getters: {}
})