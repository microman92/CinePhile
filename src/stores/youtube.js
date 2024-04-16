import { defineStore } from 'pinia'

import { youtubeApi } from '../url'
import axios from 'axios'


export const useTrailer = defineStore({

    id: 'trailer',

    state: () => ({
        url: `https://www.googleapis.com/youtube/v3/search?key=${youtubeApi}`,
        result: null,
        keyKino: '08995644d8a21fac365555629a7f1897'
    }),

    actions: {
        async getVideo(query) {
            try {
                const maxResults = 1;
                let res = await axios.get(`${this.url}&q=${encodeURIComponent(query)}&part=snippet&type=video&maxResults=${maxResults}`)
                this.result = res.data.items[0].id.videoId


            } catch (error) {
                console.error('Произошла ошибка при поиске данных', error);
            }
        },


    },

    getters: {}
})

