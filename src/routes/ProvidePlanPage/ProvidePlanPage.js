import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import {PanelHeader} from "../../components/Panel/Panel";
import MyBreadcrumb from "../../components/MyBreadcrumb/MyBreadcrumb"
import {Layout} from "antd";
import WrappedNormalProvideForm from "../../components/ProvideForm/NormalProvideForm";
import {queryString} from "../../utils/tools";
import {connect} from "dva";
import "./provide-plan-page.less";
const {Content} = Layout;

@connect(
  state=>({demandList:state.demand.demandList,reqSolution:state.solutions.reqSolution})
)
class ProvidePlanPage extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      args: queryString.parse(window.location.href)
    }
  }

  componentDidMount(){

    this.props.dispatch({
      type: "me/saveSolutions",
      reqId: this.state.args.req_id
    })

    let userId = window.sessionStorage.getItem("user_id");
    if(this.state.args.viewOnly==='on'){
      //请求我的方案详情
      this.props.dispatch({
        type: "solutions/fetchSolutionDetail",
        userId: userId,
        reqId:this.state.args.req_id
      });
    }
  }

  render(){
    let args = queryString.parse(window.location.href);
    let currReqData = this.props.demandList.filter((val)=>{
      return val.id == args["req_id"];
    });
    // console.log("ProvidePlanPage",this.props);

    return(
      <div className='provide-plan-page'>
        <Header/>
        <MyBreadcrumb/>
        <Content>
          <div className='ly-panel'>
            <PanelHeader data={currReqData[0]}/>
          </div>
          <WrappedNormalProvideForm {...args} {...this.props}/>
        </Content>
        <Footer/>
      </div>
    )
  }
}

export default ProvidePlanPage;
