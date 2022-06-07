const getters = {
    token: state => state.user.token,
    name: state => state.user.name,
    avatar: state => state.user.avatar,
    spinning: state => state.spin.spinning,
    delayTime: state => state.spin.delayTime
}

export default getters;