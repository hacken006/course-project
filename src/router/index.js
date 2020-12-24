import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const mode = "history";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "About",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path: "/course",
    name: "Course",
    component: () =>
      import(/* webpackChunkName: "course" */ "../views/Course.vue")
  },
  {
    path: "/code",
    name: "Code",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Code.vue")
  },
];

const router = new VueRouter({
  routes,
  mode
});

export default router;
