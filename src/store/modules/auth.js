import UserAuthService from '@/services/user_auth'
const userService = new UserAuthService()

const state = {
    accessToken:""    
};

const mutations = {
    'SET_TOKEN' (state, accessToken) {
        state.accessToken = accessToken
    },
    'REMOVE_TOKEN' (state) {
        state.accessToken = null
    }
};

const actions = {
    retrieveToken: (context, credential) => {
        const token = userService.authUser(credential.email, credential.password)
        return token;
    },
    saveToken: ({commit}, accessToken) => {
        commit('SET_TOKEN', accessToken)
        //interim solution to persist state
        localStorage.setItem("accessToken", accessToken)
    },
    loadAccessToken: ({commit}) => {
        commit('SET_TOKEN', localStorage.getItem("accessToken"))
    },
    removeToken: ({commit}) => {
        commit('REMOVE_TOKEN', localStorage.getItem("accessToken"))
        localStorage.removeItem("accessToken");
    },
};

const getters = {

};

export default {
    state,
    mutations,
    actions,
    getters
};