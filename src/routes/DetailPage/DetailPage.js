import React from "react";
import {Layout} from "antd";
import {Panel} from "../../components/Panel/Panel";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import SolutionList from "../../components/SolutionList/SolutionList";
import {queryString} from "../../utils/tools";
import {connect} from "dva";
import "./detail-page.less";

const {Content} = Layout;

@connect(
  state=>({...state})
)
class DetailPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      args: queryString.parse(window.location.href)
    }
  }

  componentDidMount() {
    console.log("详情也渲染好了--", this.state,this.props);
    if(this.state.args.viewOnly === 'on'){
      this.props.dispatch({
        type: "me/saveSolutions",
        reqId: this.state.args.req_id
      })
    }

  }

  render() {
    let args = this.state.args;
    return (
      <div>
        <Header/>
        <Content>
          <Panel reqId={args.req_id}/>
          {
            args.viewOnly === 'on' ?
              <div className='solutions-wrap'>
                <h2 className='title'>已提供方案列表</h2>
                <SolutionList data={this.props.me.reqSolutions}/>
              </div>
              :
              null
          }
        </Content>
        <Footer/>
      </div>
    )
  }
}

export default DetailPage;
