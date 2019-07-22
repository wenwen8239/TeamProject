// 存数据
// 酒店信息
export const state = () => ({
  cityId: 0
})
// 同步设置修改state数据
export const mutations = {
  setCityId(state,data) {
    state.cityId = data
  }
}
// 异步设置修改state数据
export const actions = {
  // 封装获取景点
  getAllScenics(store,name) {
    // 获取城市景点
    return this.$axios({
      url: '/cities',
      params: {
        name
      }
    })
    .then(res => {
      console.log(res)
      // this.scenics = res.data.data[0].scenics
      // this.scenicsLength = res.data.data[0].scenics.length
      return res.data
    })
  }
}

