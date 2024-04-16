import '@/assets/styles/style.scss'
import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import BtnMore from '@/components/UI/BtnMore.vue'
import Loader from '@/components/UI/Loader.vue'
import Actors from '@/components/UI/Actors.vue'
import Trailer from '@/components/UI/Trailer.vue'



const app = createApp(App)

import VueLazyload from 'vue-lazyload'
import errorImage from '@/assets/images/error.png'
app.use(VueLazyload, {
    error: errorImage
})


app.use(createPinia())
app.use(router)

app.component('BtnMore', BtnMore)
app.component('Loader', Loader)
app.component('Actors', Actors)
app.component('Trailer', Trailer)

app.mount('#app')
