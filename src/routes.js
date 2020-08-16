// import Home from './components/Home.vue';
// import Gallary from './components/portfolio/Portfolio.vue';
// import Stocks from './components/stocks/Stocks.vue';

import HelloWorld from './components/HelloWorld.vue';
import HelloWorldNew from './components/HelloWorldNew.vue';
import Login from './components/auth/Login.vue';
import Logout from './components/auth/Logout.vue';
import Register from './components/auth/Register.vue';

export const routes = [
    { path: '/home', component: HelloWorldNew },
    { path: '/gallery', component: HelloWorld },
    { path: '/login', component: Login },
    { path: '/logout', component: Logout },
    { path: '/register', component: Register }
];