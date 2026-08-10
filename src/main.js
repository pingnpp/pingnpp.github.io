import './assets/base.css'
import {createApp} from "vue"
// import VueScrollactive from 'vue-scrollactive'
// import {createAppRouter} from "./router/router.js"

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

import App from '@/vue/core/App.vue'

import { useData } from "@/composables";
// import {useLanguage} from "./composables/language.js"
// import {useNavigation} from "./composables/navigation.js"

const data = useData()

library.add(fas, fab)

data.fetchEssentials()
    .then(r => {
    // await data.fetchAll()
    // const language = useLanguage()
    // language.init(data.getSettings()['supportedLanguages'])

    // const navigation = useNavigation()
    // navigation.init(data.getSections(), data.getCategories())
    createApp(App)
        .component('font-awesome-icon', FontAwesomeIcon)
        .mount('#app')
    })
    .catch(error => {
        console.error("Vue error", error)
    })