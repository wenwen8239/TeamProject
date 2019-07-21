export const state = ()=>{
    return{
        //侧边栏
        Side:[

        ]
    }
}
export const mutations = {
    setSide(state,data){
        state.Side = data
        console.log(state.Side)
    }
}