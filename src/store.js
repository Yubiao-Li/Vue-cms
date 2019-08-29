import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)


export default new Vuex.Store({
    state: {
        car: JSON.parse(localStorage.getItem("car")) || []
    },
    mutations: {
        addToCar(state, item)
        {
            let flag = false
            state.car.some(v =>
            {
                if (v.id == item.id) {
                    v.count += item.count
                    flag = true
                    return true
                }
            })
            if (!flag) { state.car.push(item) }

            localStorage.setItem("car", JSON.stringify(state.car))
        },


        // 修改count
        updateGoodsInfo(state, item)
        {
            state.car.some(v =>
            {
                if (v.id == item.id) {
                    v.count = item.count
                    return true
                }
            })

            localStorage.setItem("car", JSON.stringify(state.car))
        },

        deleteGoodsInfo(state, id)
        {
            state.car.some((v, index) =>
            {
                if (v.id == id) {
                    state.car.splice(index, 1)
                    return true
                }
            })

            localStorage.setItem("car", JSON.stringify(state.car))
        },

        // 修改select
        selectChange(state, id)
        {
            state.car.some((v) =>
            {
                if (v.id == id) {
                    v.select = !v.select
                    return true
                }
            })

            localStorage.setItem("car", JSON.stringify(state.car))

        }
    },
    getters: {
        getCountAndAmount(state)
        {
            let c = 0
            let amount = 0
            state.car.forEach(item =>
            {
                if (item.select) {
                    c += item.count
                    amount += item.count * item.price
                }
            })
            return {
                count: c,
                amount
            }
        },


    }
})