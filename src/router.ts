import Vue from 'vue';
import VueRouter from 'vue-router';

import HomeView from '@/views/HomeView.vue';
import ContactView from '@/views/ContactView.vue';
import JoinTheTeamView from '@/views/JoinTheTeamView.vue';
import OurTeamView from '../src/views/OurTeamView.vue';
import SponsorsView from '@/views/SponsorsView.vue'

Vue.use(VueRouter);

let routes;
routes= [
    {
        path: '/acasa',
        name: 'HomeView',
        component: HomeView,
    },
    {
        path: '/echipa-noastra',
        name: 'OurTeamView',
        component:OurTeamView,
    },
    {
        path: '/sponsori',
        name: 'SponsorsView',
        component:SponsorsView,
    },
    {
        path: '/contact',
        name: 'Contact',
        component: ContactView,
    },
    {
        path: '/alatura-te-echipei',
        name: 'JoinTheTeam',
        component:JoinTheTeamView,
    },
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
});

export default router;