
import {getAllSolutions,getMySolutionDetail,postSolution} from "../services/solutions";

export default {
  namespace: 'solutions',

  state: {
    solutionsList: [],
    reqSolution:{}
  },

  effects: {
    *getMySolutions({userId}, {call, put}) {
      const response = yield call(getAllSolutions,userId);
      yield put({
        type: 'saveAll',
        payload: response,
      });
    },
    *fetchSolutionDetail({userId,reqId},{call,put}){
      const response = yield call(getMySolutionDetail,userId,reqId);
      console.log("获取方案详情数据",response)
      yield put({
        type: 'saveDetail',
        payload: response,
      });
    },
    *postSolution({payload},{call,put}){
      const response = yield call(postSolution,payload);
      yield put({
        type: 'save',
        payload: payload,
      })
    }
  },

  reducers: {
    save(state,action){
      return {
        ...state,
        solutionsList: [...state.solutionsList,action.payload],
      };
    },
    saveAll(state, action) {
      return {
        ...state,
        solutionsList: [...action.payload.data],
      };
    },
    saveDetail(state,action){
      return {
        ...state,
        reqSolution: {...action.payload.data},
      };
    }
  }
}
