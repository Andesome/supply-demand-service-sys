import React from "react";
import {Menu, Dropdown, Icon} from 'antd';
import {connect} from "dva";
import {logout,login} from "../../services/user";
import "./topbar.css";

@connect(
  state=>({...state})
)
export default class TopBar extends React.Component {
  constructor(props){
    super(props);
    this.logoutAccout = this.logoutAccout.bind(this);
  }

  /*登出账号*/
  logoutAccout(){
   logout()
  }

  //登录账号
  loginAccount(){
    login();
  }

  componentDidMount(){
    // console.log(this.props);
    this.props.dispatch({
      type:'user/fetch'
    })
  }

  render() {
    console.log(this.props);
    let user = this.props.user.userinfo;
    return (
      <div className="container">
        <span className="welcome">{/*欢迎光临工业魔方-智能方案解决中心*/}</span>
        {
          user.id ?
            <div className="topBar-right">
              <div className="user-login">
                <Icon type="user" style={{fontSize: '14px', marginRight: '5px'}}/>
                <span>{user.username}</span>
                <Icon type="down" style={{fontSize: '12px', marginRight: '5px'}} className="arrow"/>
              </div>
              <div className="logo-out" onClick={this.logoutAccout}>退出登录</div>
            </div> :
            <div className="login-register">
              <a onClick={this.loginAccount}>登录</a>
              <span>｜</span>
              <a href="javascript:;">注册</a>
            </div>
        }
      </div>
    )
  }
}

