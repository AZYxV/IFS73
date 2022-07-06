import { createWebHistory, createRouter } from "vue-router";
import AccueilView from "@/views/AccueilView.vue";
import FormationsView from "@/views/FormationsView.vue";
import AboutView from "@/views/AboutView.vue";
import ContactView from "@/views/ContactView.vue";
import MentionsLegalesView from "@/views/MentionsLegalesView.vue";
import NotFoundView from "@/views/NotFoundView.vue"

const routes = [
  {
    path: "/",
    name: "Accueil",
    component: AccueilView,
  },
  {
    path: "/formations",
    name: "Formations",
    component: FormationsView,
  },
  {
    path: "/about",
    name: "About",
    component: AboutView,
  },
  {
    path: "/contact",
    name: "Contact",
    component: ContactView,
  },
  {
    path: "/mentions-legales",
    name: "MentionsLegales",
    component: MentionsLegalesView,
  },
  {
    path: "/:PathMatch(.*)*",
    name: "NotFound",
    component: NotFoundView,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;