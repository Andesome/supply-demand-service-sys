import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import DemandList from "../../components/DemandList/DemandList";
import MyBreadcrumb from "../../components/MyBreadcrumb/MyBreadcrumb";
import TopBar from "../../components/TopBar/TopBar";
import {Layout,Pagination} from "antd";
import {connect} from "dva";
import "./home-page.less";

const {Content} = Layout;

@connect(
  state=>({userinfo:state.user.userinfo,demandList:state.demand.demandList,total:state.demand.total})
)
class HomePage extends React.Component{
  constructor(props){
    super(props);
    this.pageChange = this.pageChange.bind(this);
  }

  pageChange(page,pageSize){
    console.log(page,pageSize);
    this.props.dispatch({
      type: 'demand/getAllDemands',
      offset:(page-1)*pageSize,
      limit:pageSize
    });
  }

  componentDidMount(){
    // console.log(this.props);
    this.props.dispatch({
          type:'user/fetch'
      })
  }

  render(){
    console.log("首页props:",this.props)
    return(
      <div className='home-page'>
        <TopBar data={this.props.userinfo} />
        <Header/>
        <MyBreadcrumb/>
        <DemandList demandList={this.props.demandList} />
        <Pagination defaultCurrent={1} defaultPageSize={15} total={this.props.total} onChange={this.pageChange}/>
        <Footer/>
      </div>
    )
  }
}

export default HomePage;
