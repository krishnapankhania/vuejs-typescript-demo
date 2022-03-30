import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import MyOrders from "@/views/MyOrders.vue";
import { useAuthStore } from "@/stores/auth";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/orders",
      name: "orders",
      component: MyOrders,
    },
  ],
});

/**
 * Protection for routes other than login
 */
router.beforeEach(async (to: any, from: any, next: any) => {
  const store = useAuthStore();
  if (to.name !== "home" && store.user === null) next({ name: "home" });
  next();
});
export default router;
