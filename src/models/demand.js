import {postDemand,getAllDemand,getMyDemand,removeDemand} from "../services/demand";

export default {
  namespace: 'demand',

  state:{
    demandList:[],
    myDemandList:[]
  },

  effects: {
    *postDemand({payload},{call,put}){
      const response = yield call(postDemand,payload);
      yield put({
        type: 'save',
        payload: response,
      });
    },
    *getAllDemands(_,{call,put}){
      const response = yield call(getAllDemand);
      yield put({
        type: 'saveAll',
        payload: response,
      });
    },
    *getMyDemands({userId},{call,put}){
      const response = yield call(getMyDemand,userId);
      yield put({
        type: 'saveMyDemands',
        payload: response,
      });
    },
    *deleteDemand({reqId},{call,put}){
      const response = yield call(removeDemand,reqId);
      if(response.rescode==='10000'){
        yield put({
          type: 'deleteMyDemand',
          reqId: reqId,
        });
      }
    }
  },

  reducers: {
    save(state, action) {
      return {
        ...state,
        demandList: [...state.demandList,...action.payload.data],
      };
    },
    saveAll(state, action) {
      return {
        ...state,
        demandList: [...action.payload.data],
      };
    },
    saveMyDemands(state,action){
      return {
        ...state,
        myDemandList:[...action.payload.data]
      }
    },
    deleteMyDemand(state,action){
      return {
        ...state,
        myDemandList:state.myDemandList.filter((val)=>{
          return val.id !== action.reqId>>0;
        })
      }
    }
  }
}
