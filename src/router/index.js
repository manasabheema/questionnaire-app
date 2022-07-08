import { createRouter, createWebHistory } from "vue-router";
import TestIntroView from "../views/TestIntroView.vue";
import TestsView from "../views/TestsView.vue";
import ResultView from "../views/ResultView.vue";
import NotFound from "../views/NotFound.vue";

const routes = [
  {
    path: "/",
    name: "TestIntro",
    component: TestIntroView,
  },
  {
    path: "/test",
    name: "TestsView",
    component: TestsView,
  },
  {
    path: "/result",
    name: "Result",
    component: ResultView,
  },
  {
    path: "/:catchAll(.*)",
    name: "NotFound",
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  linkActiveClass: "active",
});

export default router;
