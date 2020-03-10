import Vue from 'vue';
import Vuex from 'vuex';
import newUser from '@/store/modules/newUser';


Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        newUser,
    },
    state: {},
    mutations: {},
    actions: {},
    plugins: [(store) => {
        store.subscribeAction((action, state) => {
            console.log('Action Type: ', action.type);
            console.log('Action Payload: ', action.payload);
            console.log('Current State: ', state);
        });
    }],
});
