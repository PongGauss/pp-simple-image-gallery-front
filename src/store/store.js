import Vue from 'vue';
import Vuex from 'vuex';

import auth from './modules/auth';
import gallery from './modules/gallery';

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        auth,
        gallery
    }
});