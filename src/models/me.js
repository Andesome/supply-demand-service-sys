import {getSolutions} from "../services/mycenter";

export default {
  namespace: 'me',

  state:{
    reqSolutions:[]
  },

  effects: {
    *saveSolutions({reqId},{call,put}){
      console.log("i am run");
      const response = yield call(getSolutions,reqId);
      yield put({
        type: 'save',
        payload: response,
      });
    }
  },

  reducers: {
    save(state, action) {
      return {
        ...state,
        reqSolutions: action.payload.data,
      };
    },
  }
}
