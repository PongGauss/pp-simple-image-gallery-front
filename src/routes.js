// import Home from './components/Home.vue';
// import Gallary from './components/portfolio/Portfolio.vue';
// import Stocks from './components/stocks/Stocks.vue';

import HelloWorld from './components/HelloWorld.vue';
import HelloWorldNew from './components/HelloWorldNew.vue';

export const routes = [
    { path: '/home', component: HelloWorldNew },
    { path: '/gallery', component: HelloWorld },
    { path: '/login', component: HelloWorld },
    { path: '/register', component: HelloWorld }
];