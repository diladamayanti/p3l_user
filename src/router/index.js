import Vue from 'vue'
import Router from 'vue-router'

const DashboardLayout = () => import( /* webpackChunkName: "dashboard" */ '../components/dashboardLayout.vue')

function loadView(view) {
    return () => import( /* webpackChunkName: "view[request]" */ `../components/dashboardContents/${view}.vue`)
}
Vue.use(Router);
const routes = [{
    path: '/',
    component: DashboardLayout,
    children: [{
            name: 'Home',
            path: '/',
            component: loadView('home')
        },
        {
            name: 'Produk',
            path: '/produk',
            component: loadView('produk')
        },
    ]
}, ];

const router = new Router({
    mode: 'history',
    routes: routes,
    linkExactActiveClass: "active"
});

export default router