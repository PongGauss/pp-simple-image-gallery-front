import axios from 'axios'

const state = {
    usageData: [],
    overallData: []
};

const mutations = {
    'SET_OVERALL' (state, data) {
        state.overallData = data
    },
    'SET_USAGE' (state, data) {
        state.usageData = data
    },
};

const actions = {
    loadGalleryConclusionOverall: ({ commit, rootState }) => {
        const accessToken = rootState.auth.accessToken
        axios({
            url: 'http://localhost:8001/api/gallery/overall',
            method: 'get',
            headers: {
                'Authorization': `Bearer ${accessToken}`,
            }
        }).then(response => {
            commit('SET_OVERALL', response.data.message[0])
        }) .catch(err => {
            console.log(err);
        });
    },
    loadGalleryConclusionUsage: ({ commit, rootState }) => {
        const accessToken = rootState.auth.accessToken
        axios({
            url: 'http://localhost:8001/api/gallery/usage',
            method: 'get',
            headers: {
                'Authorization': `Bearer ${accessToken}`,
            }
        }).then(response => {
            commit('SET_USAGE', response.data.message)
        }) .catch(err => {
            console.log(err);
        });
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