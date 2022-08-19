import Vue from 'vue';
import VueRouter from 'vue-router';

import HomeView from '@/views/HomeView.vue';
import ContactView from '@/views/ContactView.vue';
import JoinTheTeamView from '@/views/JoinTheTeamView.vue';
import OurTeamView from '../src/views/OurTeamView.vue';
import SponsorsView from '@/views/SponsorsView.vue'
import PageNotFound from '../src/views/PageNotFoundView.vue';
import JoinTheTeamForm from '../src/components/JoinTheTeamForm.vue'
import FormSucces from '../src/components/FormSucces.vue'
import InConstructionView from '@/views/InConstructionView.vue'
import SponsorsList2022 from '@/components/Sponsors/SponsorsList2021-2022.vue'

Vue.use(VueRouter);

let routes;
routes= [
    {
        path: '/',
        name: 'HomeView',
        component: InConstructionView,
    },
    {
        path: '/echipa-noastra',
        name: 'OurTeamView',
        component:PageNotFound,
    },
    {
        path: '/sponsori',
        name: 'SponsorsView',
        component:SponsorsView,
        children:[
            {
                path:'2021-2022',
                component:SponsorsList2022
            }
        ]
    },
    {
        path: '/contact',
        name: 'Contact',
        component: ContactView,
    },
    {
        path: '/alatura-te-echipei',
        component:JoinTheTeamView,
    }
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
});

export default router;