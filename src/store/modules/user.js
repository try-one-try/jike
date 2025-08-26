import { createSlice } from '@reduxjs/toolkit'
import { request } from '@/utils'
const userStore = createSlice({
  name: 'user',
  // 数据状态
  initialState: {
    token: localStorage.getItem('token_key') || ''
  },
  // 同步修改方法
  reducers: {
    setToken(state, action) {
      state.userInfo = action.payload
      // 将token存储到本地
      localStorage.setItem('token_key', action.payload)
    }
  }
})

// 解构出actionCreater
const { setToken } = userStore.actions

// 获取reducer函数
const userReducer = userStore.reducer

// 异步方法
// 登录获取token
const fetchLogin = (loginForm) => {
  return async (dispatch) => {
    const res = await request.post('/authorizations', loginForm)
    dispatch(setToken(res.data.token))
    // 如果没有 return，返回 undefined
    return res
  }
}

export { fetchLogin }

export default userReducer