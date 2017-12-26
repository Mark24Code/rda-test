import dva from 'dva';

export default {
    namespace:'products',
    state:[],
    reducers:{
        'delete'(state,{playload:id}){
            return state.filter(item=> item.id !=id);
        }
    }
}