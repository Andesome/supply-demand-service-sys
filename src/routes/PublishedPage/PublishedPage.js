import React from "react";
import DemandList from "../../components/DemandList/DemandList"

class PublishedPage extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    // console.log("我发布的需求页面",this.props);
    let myDemandList = this.props.data;
    return(
      <div>
        <DemandList viewOnly={true} demandList={myDemandList} />
      </div>
    )
  }
}

export default PublishedPage;
