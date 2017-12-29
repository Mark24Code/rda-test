import request from '../utils/request';
import {APISERVER} from '../config';

export function userLogin() {
  console.log('server func run!');
  return request(`${APISERVER}/api/users`);
}
