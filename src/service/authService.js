import request from './xhr/axios'
/**
 * 用户相关API
 */
export function getLogin (user) {
  return request({
    url: '/login',
    method: 'post',
    data: user
  })
}
