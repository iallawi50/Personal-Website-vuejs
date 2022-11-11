import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "@/views/HomeView.vue";
import SkillsView from '@/views/SkillsView';
import PortfolioView from "@/views/PortfolioView";
import ServicesView from "@/views/ServicesView";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/skills",
    name: "skills",
    component: SkillsView,
  },
  {
    path: "/services",
    name: "services",
    component: ServicesView,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: PortfolioView,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
