// 存数据
// 酒店信息
export const state = () => ({
  hotelInfo: {
    city: '',
    cityId: ''
  }
})
// 同步设置修改state数据
export const mutations = {
  setHotelInfo(state,data) {
    state.hotelInfo = data
  }
}
// 异步设置修改state数据
export const actions = {
  // 获取所有酒店数据
  getAllHotel({commit},data) {
    return this.$axios({
      url: '/hotels',
      params: {
        city: data
      }
    })
    .then(res => {
      console.log(res,1234567)
    })
  }
}

