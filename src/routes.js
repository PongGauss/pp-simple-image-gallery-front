import Login from './components/auth/Login.vue';
import Logout from './components/auth/Logout.vue';
import Register from './components/auth/Register.vue';
import Conclusion from './components/gallery/Conclusion.vue';
import Gallery from './components/gallery/Gallery.vue';

export const routes = [
    { path: '/home', component: Conclusion },
    { path: '/gallery', component: Gallery },
    { path: '/login', component: Login },
    { path: '/logout', component: Logout },
    { path: '/register', component: Register }
];