import React from "react";
import {Breadcrumb} from "antd";
import {withRouter} from "dva/router";
import {routeConfig} from "../../constant/routeConfig";
import "./my-breadcrumb.less";

@withRouter
class MyBreadcrumb extends React.Component{

  render(){
    console.log("面包屑路径：",this.props.match.path);
    let path = this.props.match.path;
    return(
      <div className='bread-wrap'>
        <Breadcrumb>
          <Breadcrumb.Item ><a href={'#/'}>首页</a></Breadcrumb.Item>
          {
            path === "/"?
              null:
              <Breadcrumb.Item><a href={`#${path}`}>{routeConfig[path]}</a></Breadcrumb.Item>
          }
         {/* <Breadcrumb.Item><a href={path}>{routeConfig[path]}</a></Breadcrumb.Item>
          <Breadcrumb.Item><a href={'#/me'}>列表</a></Breadcrumb.Item>
          <Breadcrumb.Item>编辑</Breadcrumb.Item>*/}
        </Breadcrumb>
      </div>
    )
  }
}

export default MyBreadcrumb;
