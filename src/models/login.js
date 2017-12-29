import {LOGIN} from '../services/login';

export default {

  namespace: 'login',

  state: {
    username: '',
    password: '',
  },

  subscriptions: {
    // setup({ dispatch, history }) {  // eslint-disable-line
    // },
  },

  effects: {
    *fetch({payload}, {call, put}) {  // eslint-disable-line
      yield put({type: 'save'});
    },
    *login({payload:user_data}, {call, put}){
      console.log('effces 收到:', user_data);
      const resp = yield call(LOGIN,user_data);
      const data = resp.data;
      console.log('effects获取到：',resp);
      console.log('effects获取到：',data);
      if(data.user_token && data.user_token!==''){
        localStorage.setItem('user_token', data.user_token);
      }
    },
  },

  reducers: {
    save(state, action) {
      return {...state, ...action.payload};
    },
    set_token(state,action){

    }


  },

};
