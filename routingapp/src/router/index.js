import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import AnotherPage from "../views/AnotherPage.vue";
import PageParam from "../views/PageParam.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/another_page",
    name: "AnotherPage",
    component: AnotherPage
  },
  {
    path: "/page_param/:id",
    name: "PageParam",
    component: PageParam
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
