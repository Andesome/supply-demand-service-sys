import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import WrappedNormalRequestForm from "../../components/NormalRequestForm/NormalRequestForm";
import {Steps, Popover} from 'antd';
import {connect} from "dva";
const Step = Steps.Step;


const customDot = (dot, {status, index}) => (
  <Popover content={<span>step {index} status: {status}</span>}>
    {dot}
  </Popover>
);


//发布页面
@connect(
  state=>({user:state.user,demandList:state.demandList})
)
class PublishPage extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount(){
    // console.log("props",this.props);
  }

  render() {
    console.log("PublishPage",this.props);
    return (
      <div>
        <Header/>
        <div className='ly-container'>
          <Steps current={0} progressDot={customDot}>
            <Step title="In Progress" description="发布需求"/>
            <Step title="Waiting" description="平台审核需求"/>
            <Step title="Waiting" description="发布成功"/>
            <Step title="Waiting" description="选择服务商家方案"/>
          </Steps>
          <WrappedNormalRequestForm/>
        </div>
        <Footer/>
      </div>
    )
  }
}

export default PublishPage;
