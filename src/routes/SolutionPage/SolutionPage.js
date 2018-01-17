import React from "react";
import { Card } from 'antd';
import TipPanel from "../../components/TipPanel/TipPanel";
import MySolutionList from "../../components/SolutionList/MySolutionList"
import {withRouter} from "dva/router";
import "./solution.less"


class SolutionPage extends React.Component{
  constructor(props){
    super(props);
  }



  render(){
    let data = this.props.data;
    /*let data = [{
      title:'需求1',
      id: 1,
      desc:'需求1需求1需求1需求1需求1需求1需求1需求1需求1需求1描述',
      budget: "1000.00",
      except_cycle: 1,
      req_type: "si",
      created_time: "2018-01-10 10:51:23"
    },{
      title:'需求1',
      id: 2,
      desc:'需求1需求1需求1需求1需求1需求1需求1需求1需求1需求1描述',
      budget: "1000.00",
      except_cycle: 1,
      req_type: "si",
      created_time: "2018-01-10 10:51:23"
    },{
      title:'需求1',
      id: 3,
      desc:'需求1需求1需求1需求1需求1需求1需求1需求1需求1需求1描述',
      budget: "1000.00",
      except_cycle: 1,
      req_type: "si",
      created_time: "2018-01-10 10:51:23"
    }]*/
    //将服务器代码转换成需求状态
    function getReqStatus(code) {
      switch (code){
        case 0:
          return '审核中';
        case 1:
          return '已审核';
        default:
          return '审核中'
      }
    }
    // console.log("SolutionPage:",data);
    return(
      <div className='solution-box'>
       {/* {
          data.length<1?
            <TipPanel tip="你还没有提交过方案"/>:
          data.map((val,key)=>(
            <Card
              title={val.title}
              extra={getReqStatus(val.status)}
              style={{ width: 300}}
              className='card-item'
              key={key}
            >
              <p>
                {val.desc}
                <More req_id={val.req_id} solution_id={val.id}/>
              </p>
            </Card>
          ))
        }*/}
        <MySolutionList data={data} viewOnly={true} />
      </div>
    )
  }
}

@withRouter
export class More extends React.Component{
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e){
    e.preventDefault();
    this.props.history.push(`/provide?viewOnly=on&req_id=${this.props.req_id}&solution_id=${this.props.solution_id}`);
  }

  render(){
    return(
     <a href="#" onClick={this.handleClick} className='more'>详情</a>
    )
  }
}

export default SolutionPage;
