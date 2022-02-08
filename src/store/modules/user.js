import { login } from '@/api/login'

const state = {
  username: '',
  token: '',
}
const mutations = {
  SET_TOKEN: (state, token) => {
    state.token = token
  },
}

const actions = {
  Login({ commit }, userInfo) {
    return new Promise((resolve, reject) => {
      login(userInfo)
        .then((response) => {
          if (response.code == '200') {
            commit('SET_TOKEN', response.token)
            resolve(response)
          } else {
            reject(response)
          }
        })
        .catch((error) => {
          reject(error)
        })
    })
  },
}

export default {
  state,
  mutations,
  actions,
}
