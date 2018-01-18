import React from "react";
import { Menu, Dropdown, Icon } from 'antd';
import "./topbar.css";


export default class TopBar extends React.Component{
  render(){
    return(
      <div className="container">
        <span className="welcome">欢迎光临工业魔方-智能方案解决中心</span>
        {/*<div className="login-register">
          <a href="javascript:;">登录</a>
           <span>｜</span>
          <a href="javascript:;">注册</a>
        </div>*/}
        <div className="topBar-right">  
                  <div className="user-login">
                    <Icon type="user" style={{fontSize:'14px',marginRight:'5px'}} />
                    <span>152656121</span>
                    <Icon type="down" style={{fontSize:'12px',marginRight:'5px'}} className="arrow"/>
                  </div>
                  <div className="logo-out">退出登录</div>  
                </div>

      </div>
    )
  }
}

