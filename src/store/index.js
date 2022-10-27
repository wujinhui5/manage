import Vue from 'vue';
import Vuex from 'vuex';

import '../mock';
import user from './js/user'
import permission from './js/permission'

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        user,
        permission
    }
})