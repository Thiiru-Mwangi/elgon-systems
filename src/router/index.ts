import {
  createRouter,
  createWebHistory,
  createMemoryHistory,
} from "vue-router";
import AboutPage from "../pages/AboutPage.vue";
import ServicesPage from "../pages/ServicesPage.vue";
import ContactsPage from "../pages/ContactsPage.vue";
import Service from "../components/Service.vue";

const routes = [
  {
    path: "/",
    name: "About",
    component: AboutPage,
  },
  {
    path: "/services",
    name: "Services",
    component: ServicesPage,
  },
  {
    path: "/contact",
    name: "Contact",
    component: ContactsPage,
  },
  {
    path: '/services/:serviceName',
    name: 'Service',
    component: Service
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
