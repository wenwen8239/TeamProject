// 存数据
// 酒店信息
export const state = () => ({
  city: '',
  cityId: 0,
  totle:0
})
// 同步设置修改state数据
export const mutations = {
  setCity(state,data) {
    state.city = data
  },
  setCityId(state,data) {
    state.cityId = data
  },
  setTotle(state,data){
    state.totle = data
  }
}
// 异步设置修改state数据
export const actions = {
  // 获取所有酒店数据
  getAllHotel({commit},id) {
    return this.$axios({
      url: '/hotels',
      params: {
        city: id
      }
    })
    .then(res => {
      const {total} = res.data
      commit('setTotal',total)
    })
  }
}

