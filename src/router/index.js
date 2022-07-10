import { createWebHistory, createRouter } from "vue-router";
import AccueilView from "@/views/AccueilView.vue";
import FormationsView from "@/views/FormationsView.vue";
import AboutView from "@/views/AboutView.vue";
import ContactView from "@/views/ContactView.vue";
import MentionsLegalesView from "@/views/MentionsLegalesView.vue";
import CgvView from "@/views/CgvView.vue";
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
    path: "/cgv",
    name: "CGV",
    component: CgvView,
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
  scrollBehavior (to, from, savedPosition) {
    return savedPosition || new Promise((resolve)=>{
      setTimeout(()=> resolve({ top:0 }))
    })
  }
})


export default router;
