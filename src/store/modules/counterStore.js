import { createSlice } from "@reduxjs/toolkit"

//Create Store
const counterStore = createSlice({
    name: 'counter',
    initialState:{
        //initial state
        count: 0
    },
    //修改数据的方法 同步方法 支持直接修改
    reducers:{
        increment(state){
            state.count++
        },
        decrement(state){
            state.count--
        },
        addToNum(state, action){
            state.count = action.payload
        }
    }
})

// 解构actionCreator函数
const {increment, decrement, addToNum} = counterStore.actions

//Get reducer
const reducer = counterStore.reducer

//以按需导出的方式导出actionCreator
export {increment, decrement, addToNum}

//以默认导出的方式导出reducer
export default reducer