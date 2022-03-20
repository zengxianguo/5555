export default {
  state: () => ({
    routes: ['哈哈哈哈哈'],
  }),
  mutations: {
    SET_ROUTES(state, payload) {
      state.routes = payload
    }
  },
  actions: {
    generateRoutes(context, payload) {
      context.commit('SET_ROUTES', payload)
    }
  },
  getters: {
    // 获取到最终的数据结果
    getCount(state){
      return state.routes
    }
  }
}