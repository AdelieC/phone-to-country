const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("../views/HomeView.vue"),
    meta: { isNav: true, isHomepageButton: false },
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (About.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import("../views/AboutView.vue"),
    meta: { isNav: true, isHomepageButton: false },
  },
  {
    path: "/select-with-input",
    name: "Select with input",
    // route level code-splitting
    // this generates a separate chunk (About.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import("../views/SelectWithInputView.vue"),
    meta: { isNav: true, isHomepageButton: true },
  },
  {
    path: "/double-input",
    name: "Double input",
    // route level code-splitting
    // this generates a separate chunk (About.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import("../views/DoubleInputView.vue"),
    meta: { isNav: true, isHomepageButton: true },
  },
  {
    path: "/single-input",
    name: "Single input",
    // route level code-splitting
    // this generates a separate chunk (About.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import("../views/SingleInputView.vue"),
    meta: { isNav: true, isHomepageButton: true },
  },
];

export default routes;
