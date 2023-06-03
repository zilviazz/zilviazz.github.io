import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

/* add icons to the library */
library.add(faInstagram)
library.add(faGithub)
library.add(faLinkedin)

const app = createApp(App)

app.use(createPinia())
app.use(router)
.component('font-awesome-icon', FontAwesomeIcon)
app.mount('#app')
