/**
 * Created by yuzhenfan on 2017/6/21.
 */
import http from '@/service/http'

export function login (username, password) {
  return http.post('user/login', {
    username,
    password
  })
}
