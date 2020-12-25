import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const mode = "history";
const linkExactActiveClass = "navbar-active";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    props: true
  },
  {
    path: "/about",
    name: "About",
    props: true,
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path: "/course/:slug",
    name: "Course",
    props: true,
    component: () =>
      import(/* webpackChunkName: "course" */ "../views/Course.vue"),
    children: [
      {
        path: ":learnSlug",
        name: "courseDetails",
        props: true,
        component: () =>
          import(/* webpackChunkName: "course-details" */ "../views/Learning.vue")
      }
    ]
  },
  {
    path: "/courses/",
    name: "Courses",
    props: true,
    component: () =>
      import(/* webpackChunkName: "courses" */ "../views/Courses.vue")
  },
  {
    path: "/code",
    name: "Code",
    props: true,
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Code.vue")
  },
];

const router = new VueRouter({
  routes,
  mode,
  linkExactActiveClass
});

export default router;
