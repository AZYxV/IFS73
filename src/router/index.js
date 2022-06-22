import { createWebHistory, createRouter } from "vue-router";
import AccueilComponent from "@/components/AccueilComponent.vue";
import FormationsComponent from "@/components/FormationsComponent.vue";
import AboutComponent from "@/components/AboutComponent.vue";
import ContactComponent from "@/components/ContactComponent.vue";
import MentionsLegalesComponent from "@/components/MentionsLegalesComponent.vue";
import NotFoundComponent from "@/components/NotFoundComponent.vue"

const routes = [
  {
    path: "/",
    name: "Accueil",
    component: AccueilComponent,
  },
  {
    path: "/formations",
    name: "Formations",
    component: FormationsComponent,
  },
  {
    path: "/about",
    name: "About",
    component: AboutComponent,
  },
  {
    path: "/contact",
    name: "Contact",
    component: ContactComponent,
  },
  {
    path: "/mentions-legales",
    name: "MentionsLegales",
    component: MentionsLegalesComponent,
  },
  {
    path: "/:PathMatch(.*)*",
    name: "NotFound",
    component: NotFoundComponent,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;