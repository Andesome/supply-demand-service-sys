import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import DemandList from "../../components/DemandList/DemandList";
import MyBreadcrumb from "../../components/MyBreadcrumb/MyBreadcrumb";
import {Layout} from "antd";
import {connect} from "dva";

const {Content} = Layout;

@connect(
  state=>({userinfo:state.user.userinfo,demandList:state.demand.demandList})
)
class HomePage extends React.Component{
  constructor(props){
    super(props);
  }

  componentDidMount(){
    console.log(this.props);
    this.props.dispatch({
      type:'user/fetch'
    })
  }

  render(){
    // console.log("----",this.props.demandList)
    return(
      <div>
        <Header/>
        <MyBreadcrumb/>
        <DemandList demandList={this.props.demandList} />
        <Footer/>
      </div>
    )
  }
}

export default HomePage;
