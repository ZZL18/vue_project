import Vue from 'vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue'
import router from './router'
import store from './store'
import './api/mock'
import Cookie from 'js-cookie';

Vue.config.productionTip = false

Vue.use(ElementUI);

router.beforeEach((to, from, next) => {
    const token = Cookie.get('token')
        // token不存在
    if (!token && to.name !== 'login') {
        next({ name: 'login' })
    } else if (token && to.name == 'login') { //token存在，说明登录
        next({ name: 'home' })
    } else {
        next()
    }
})


new Vue({
    router,
    store,
    render: h => h(App),
    created() {
        store.commit('addMenu', router)
    }
}).$mount('#app')