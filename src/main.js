// main.js
import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router'; // Import Vue Router
import App from './App.vue';
import Menu from './components/Menu.vue';
import Payment from './components/Payment.vue';
import Hamburger from './components/Hamburger.vue';
import HelloWorld from './components/HelloWorld.vue';
import KnowCollage from './components/KnowCollage.vue';
import ActiveCollage from './components/ActiveCollage.vue';
import OutsideCollage from './components/OutsideCollage.vue';
import TrainingCollage from './components/TrainingCollage.vue';
import LocationCollage from './components/LocationCollage.vue';
import LibraryCollage from './components/LibraryCollage.vue';

// Define your routes
const routes = [
  {
    path: '/',
    component: Menu
  },
  {
    path: '/Payment',
    component: Payment
  },
  {
    path: '/Hamburger',
    component: Hamburger
  },
  {
    path: '/HelloWorld',
    component: HelloWorld
  },
  {
    path: '/KnowCollage',
    component: KnowCollage
  },
  
  {
    path: '/ActiveCollage',
    component: ActiveCollage
  },
  
  {
    path: '/OutsideCollage',
    component: OutsideCollage
  },
  
  {
    path: '/TrainingCollage',
    component: TrainingCollage
  },
  
  {
    path: '/LocationCollage',
    component: LocationCollage
  },
  
  {
    path: '/LibraryCollage',
    component: LibraryCollage
  },
  
  
];

// Create the router instance
const router = createRouter({
  history: createWebHistory(),
  routes
});

// Mount the app with the router
createApp(App)
  .use(router) // Use Vue Router
  .mount('#app');
