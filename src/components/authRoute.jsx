// 封装一个组件，用于判断用户是否登录
// 有token，则正常渲染子组件，没有token，则跳转到登录页

import { Navigate } from 'react-router-dom'

const AuthRoute = ({ children }) => {
  const token = localStorage.getItem('token_key')
  if (token) {
    return children
  }
  return <Navigate to="/login" />
}

export default AuthRoute