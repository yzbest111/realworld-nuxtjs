import { request } from "../plugins/request"

// 用户登陆
export const login = (body) => {
  return request({
    method: 'POST',
    url: '/api/users/login',
    data: body
  })
}

// 用户注册
export const register = (body) => {
  return request({
    method: 'POST',
    url: '/api/users',
    data: body
  })
}