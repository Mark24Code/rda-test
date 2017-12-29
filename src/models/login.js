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
      const data = yield call(LOGIN,user_data);
      console.log('effects获取到：',JSON.stringify(data));
    },
  },

  reducers: {
    save(state, action) {
      return {...state, ...action.payload};
    },
  },

};
