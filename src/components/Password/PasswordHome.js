import React from 'react'
import {connect} from 'react-redux'


import Wrapper from '../Wrapper'
import PasswordList from './PasswordList'
import {fetchPassword} from '../../actions/passwordAction'

class PasswordHome extends React.Component {
  constructor(props){
    super(props);
  }
  componentWillMount(){
    this.props.fetchPassword()
  }

  render() {
    return (
      <div>
        <Wrapper>
          <PasswordList />
        </Wrapper>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  fetchPassword : () => dispatch(fetchPassword())
})

export default connect(null, mapDispatchToProps)(PasswordHome);