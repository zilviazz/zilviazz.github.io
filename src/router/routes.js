
const routes = [
    {
        path: '/',
        children :[
            {
                path: '/',
                name: 'home',
                // route level code-splitting
                // this generates a separate chunk (About.[hash].js) for this route
                // which is lazy-loaded when the route is visited.
                component: () => import('../views/HomeView.vue')
            },
            {
                path: 'project',
                name: 'project',
                component: () => import('../views/ProjectView.vue')
            },
            {
                path: 'contact',
                name: 'contact',
                component: () => import('../views/ContactView.vue')
            },
            {
                path: 'detail/:id',
                name: 'detail',
                component: () => import('../views/DetailView.vue')
            }
        ]
      },
];
    

export default routes;