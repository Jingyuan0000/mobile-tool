const state = {
  exclude: [],
  appBack: '',
  name: '',
  id: '',
  code: '',
  inputSource: 9,
  domain: 'yn'
}
const getters = {}
const actions = {}
const mutations = {
  setConfig(state, result) {
    const {
      config,
      name,
      appid
    } = result
    const {
      appBack,
      exclude,
    }

  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}