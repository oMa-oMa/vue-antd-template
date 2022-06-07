const state = {
    spinning: false,
    delayTime: 200
}

const mutations = {
    set_spin(state, value) {
        state.spinning = value;
    },
    set_delay(state, value) {
        state.delayTime = value;
    }
}

export default{
    namespaced: true,
    state,
    mutations
}