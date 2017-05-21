import React from 'react'
import {Link} from 'react-router-dom'

import {
  AppBar,
  Drawer,
  MenuItem,
} from '../MaterialUI'

class Wrapper extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      open : false
    }
  }

  openDrawer(){
    this.setState({open: true})
  }

  render() {
    return (
      <div>
        <AppBar title="Title"
          iconClassNameRight="muidocs-icon-navigation-expand-more"
          onLeftIconButtonTouchTap={(open)=> this.openDrawer()}
          />
        {this.props.children}
        <Drawer
        docked={false}
        open={this.state.open}
        onRequestChange={(open) => this.setState({open})}>
          <Link to='/'><MenuItem>Home</MenuItem></Link>
          <Link to='/new'><MenuItem>Password Form</MenuItem></Link>
        </Drawer>
      </div>
    );
  }
}


export default Wrapper;