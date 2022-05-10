import Index from '@/views/index.vue'
import Console from '@/views/console.vue'
import Login from '@/views/login.vue'
import NotFound from '@/views/notFound.vue'

import Switch from '@/views/switch.vue'
import Table from '@/views/table.vue'
import Button from '@/views/button.vue'



export const routes = [{
        path: '/login',
        component: Login
    },
    {
        path: '/',
        component: Index,
        children: [{
                path: '/console',
                name: 'console',
                component: Console
            },
            {
                path: '/switch',
                name: 'switch',
                component: Switch
            },
            {
                path: '/table',
                name: 'table',
                component: Table
            },
            {
                path: '/button',
                name: 'button',
                component: Button
            },
            {
                path: '/404',
                component: NotFound
            }
        ]
    },
    {
        path: '*',
        redirect: {
            path: '/404'
        }
    }
]
