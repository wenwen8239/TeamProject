export const state = () => {
  return {
    createForm:[
      {
        title: '123',
        content: '456',
        city: '广州'
      }
    ]
  }
}

export const mutations = {
  // 草稿数据
  setInfoData(state, data) {
    state.createForm.unshift(data)
    if(state.createForm.length>5){
      state.createForm.length = 5
    }
  },
  // 删除草稿数据
  delInfoData(state, data) {
    state.createForm.splice(data,1)
  },

}
