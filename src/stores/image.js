import { defineStore } from "pinia";

const imageStore = defineStore ({
    id: "image",
    state: () => ({
        list: [
            {
                slug: 'figma',
                title: 'DESAIN ANTARMUKA PEMESANAN TIKET',
                img: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80'
            },
            {
                slug: 'game',
                title: 'GAME FLAPPY FISH',
                img: 'https://images.unsplash.com/photo-1553481187-be93c21490a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80'
            },
            {
                slug: 'analisis',
                title: 'ANALISIS CREDIT SCORING',
                img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=815&q=80'
            }
        ]
    }),
    actions: {},
    getters: {
        g$list: ({ list }) => list,
    },

});

export default imageStore;