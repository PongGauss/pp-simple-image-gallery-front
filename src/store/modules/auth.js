import UserAuthService from '@/services/user_auth'
import axios from 'axios'

const userService = new UserAuthService()

const state = {
    accessToken:"",
    userName: ""    
};

const mutations = {
    'SET_TOKEN' (state, accessToken) {
        state.accessToken = accessToken
    },
    'SET_USERNAME' (state, username) {
        state.userName = username
    },
    'REMOVE_TOKEN' (state) {
        state.accessToken = null
    }
};

const actions = {
    retrieveToken: (context, credential) => {
        const token = userService.authUser(credential.email, credential.password)
        return token
    },
    retrieveUserInfo: (context) => {
        const accessToken = context.state.accessToken
        axios({
            url: 'http://localhost:8001/api/user',
            method: 'get',
            headers: {
                'Authorization': `Bearer ${accessToken}`,
            }
        }).then(response => {
            //console.log(response.data)
            context.commit('SET_USERNAME', response.data.name)
            //interim solution to persist state
            localStorage.setItem("userName", response.data.name)
        }) .catch(err => {
            console.log(err);
        });
    },
    saveToken: ({commit}, accessToken) => {
        commit('SET_TOKEN', accessToken)
        //interim solution to persist state
        localStorage.setItem("accessToken", accessToken)
    },
    loadAccessToken: ({commit}) => {
        commit('SET_TOKEN', localStorage.getItem("accessToken"))
    },
    loadUserName: ({commit}) => {
        commit('SET_USERNAME', localStorage.getItem("userName"))
    },
    removeToken: ({commit}) => {
        commit('REMOVE_TOKEN', localStorage.getItem("accessToken"))
        localStorage.removeItem("accessToken");
    },
    register: (context, credential) => {
        const token = userService.registerUser(credential.name, credential.email, credential.password, credential.cPassword)
        return token
    }
};

const getters = {

};

export default {
    state,
    mutations,
    actions,
    getters
};