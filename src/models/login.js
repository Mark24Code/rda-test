// import {userLogin} from '../services/login';

export default {

  namespace: 'login',

  state: {
    username: '',
    password: '',
  },

  subscriptions: {
    setup({ dispatch, history }) {  // eslint-disable-line
    },
  },

  effects: {
    *fetch({ payload }, { call, put }) {  // eslint-disable-line
      yield put({ type: 'save' });
    },
    *login({ payload }, { call, put }){
      console.log('effces 收到');
      // const data = yield call(userLogin);
      // console.log(`Effects :${data}`);
    },
  },

  reducers: {
    save(state, action) {
      return { ...state, ...action.payload };
    },
  },

};
