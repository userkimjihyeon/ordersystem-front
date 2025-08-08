// 중괄호가 쳐져 있으면, export된 항목 중 하나만 선택하여 import
// 중괄호가 없으면, default요소(대표요소)를 import
import { createApp } from 'vue'
import App from './App.vue'
import router from './router';
import vuetify from './plugins/vuetify';
import '@mdi/font/css/materialdesignicons.css'

const app = createApp(App);

app.use(vuetify)        //app에다 vuetify를 쓸것임
app.use(router)         //우리 app 전체에서 router 쓸것임
app.mount('#app')       //app을 화면에 뿌려줄것임
