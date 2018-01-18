import {postDemand,getAllDemand,getMyDemand,removeDemand} from "../services/demand";

export default {
  namespace: 'demand',

  state:{
    demandList:[],
    myDemandList:[],
    total:0
  },

  effects: {
    *postDemand({payload},{call,put}){
      const response = yield call(postDemand,payload);
      yield put({
        type: 'save',
        payload: response,
      });
    },
    *getAllDemands({offset,limit},{call,put}){
      const response = yield call(getAllDemand,offset,limit);
      console.log("model所有需求响应、",response);
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
        total:action.payload.headers["x-content-total"]>>0
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
