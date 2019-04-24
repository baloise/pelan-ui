import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'dashboard',
            component: () => import('./views/Secure/Dashboard.vue'),
            meta: {
                requiresAuth: true,
                requiresAdmin: false
            }
        },
        {
            path: '/plan',
            name: 'plan',
            component: () => import('./views/Secure/Plan.vue'),
            meta: {
                requiresAuth: true,
                requiresAdmin: false
            }
        },
        {
            path: '/plansettings',
            name: 'plansettings',
            component: () => import('./views/Secure/PlanSettings.vue'),
            meta: {
                requiresAuth: true,
                requiresAdmin: true
            }
        },
        {
            path: '/help',
            name: 'help',
            component: () => import('./views/Secure/Help.vue'),
            meta: {
                requiresAuth: true,
                requiresAdmin: false
            }
        },
        {
            path: '/settings',
            name: 'settings',
            component: () => import('./views/Secure/Settings.vue'),
            meta: {
                requiresAuth: true,
                requiresAdmin: false
            }
        },
        {
            path: '/401',
            name: 'nopermission',
            component: () => import('./views/Shared/NoPermission'),
            meta: {
                requiresAuth: null,
                requiresAdmin: false
            }
        },
        {
            path: '*',
            name: 'notfound',
            component: () => import('./views/Shared/NotFound'),
            meta: {
                requiresAuth: null,
                requiresAdmin: false
            }
        }
    ]
})