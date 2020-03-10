export default {
    state: {
        toggle: false,
        usersArray: [],
        editUser: {},
    },
    mutations: {
        TOGGLE_POP_UP: (state, payload) => {
            state.toggle = payload;
        },
        SAVE_NEW_USER: (state, payload) => {
            state.usersArray.push(payload);
        },
        EDIT_USER: (state, payload) => {
            state.editUser = payload;
        },
        SAVE_EDITED_USER: (state, payload) => {
            state.usersArray[payload.id] = payload.data;
        },
    },
    actions: {
        TOGGLE_POP_UP({ commit }, payload) {
            commit('TOGGLE_POP_UP', payload);
        },
        SAVE_NEW_USER({ commit }, payload) {
            commit('SAVE_NEW_USER', payload);
        },
        EDIT_USER({ commit }, payload) {
            commit('EDIT_USER', payload);
        },
        SAVE_EDITED_USER({ commit }, payload) {
            console.log(payload.one);
            commit('SAVE_EDITED_USER', payload);
        },
    },
};
