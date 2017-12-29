import request from '../utils/request';
// import axios from 'axios';
import {APISERVER} from '../config';

export function LOGIN(user_data) {
  console.log('server func run!');
  console.log('server got',user_data);
  return request(`${APISERVER}/api/login`,{
    method: 'POST',
    body:JSON.stringify({
      username:user_data.username,
      password:user_data.password
    })
  });
}
