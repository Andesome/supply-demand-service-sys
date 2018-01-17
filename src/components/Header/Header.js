import React from "react";
import {Navbar, Nav, NavItem} from "react-bootstrap";
import {connect} from "dva";
import "./header.css";

@connect()
export default class Header extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    console.log("头部渲染好了");
    this.props.dispatch({
      type: 'demand/getAllDemands'
    });
  }

  render() {
    return (
      <header>
        <Navbar collapseOnSelect className="header">
          <Navbar.Header>
            <img src={require('../Footer/test1.png')} style={{height: '60px', float: 'left', marginLeft: '0px'}}/>
            <Navbar.Brand>
              <a href='#'>智能方案中心</a>
            </Navbar.Brand>
            <Navbar.Toggle/>
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav pullRight>
              <NavItem eventKey={1} href="#/publish">
                发布需求
              </NavItem>
              <NavItem eventKey={2} href="#/me">
                个人中心
              </NavItem>
              {/*<NavItem eventKey={2} href="#/published">*/}
              {/*我发布的需求*/}
              {/*</NavItem>*/}
              {/*<NavItem eventKey={2} href="#/solution">*/}
              {/*我提供的解决方案*/}
              {/*</NavItem>*/}
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </header>
    )
  }
}

