export default {
        namespaced:true, // 定义 为独立的命名空间
        state:{
                count: 0
        },
        getters:{
                tenTimesCount(state,getters,rootState,rootGetters){
                        console.log(state,getters,root)
                }
        }
}