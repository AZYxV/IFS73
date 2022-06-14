import { createWebHistory, createRouter } from "vue-router";
import AccueilComponent from "@/components/AccueilComponent.vue";
import FormationsComponent from "@/components/FormationsComponent.vue";
import AboutComponent from "@/components/AboutComponent.vue";
import ContactComponent from "@/components/ContactComponent.vue";
import MentionsLegalesComponent from "@/components/MentionsLegalesComponent.vue";

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
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;