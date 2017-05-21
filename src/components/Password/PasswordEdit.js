import React from 'react'

import {editPassword} from '../../actions/passwordAction'


class PasswordEdit extends React.Component {
  constructor(props){
    super(props)
  }

  componentWillMount(){
    //
  }

  componentDidMount(){
    //
  }

  handleChange(e){
    let newState = {
      form : {
        ...this.state.form
      }
    }
    newState.form[e.target.name] = e.target.value
    this.setState(newState)
  }

  render() {
    return (
      <div>
        <form>
          <label>
            Url
          </label>
          <input
          name="url"
          type="text"
          value={this.props.url}
          onChange={this.props.handleChange.bind(this)} /><br />
          <br />
          <label>
            Username
          </label>
          <input
          name="username"
          type="text"
          value={this.props.username}
          onChange={this.props.handleChange.bind(this)} /><br />
          <br />
          <label>
            Password
          </label>
          <input
          name="password"
          type="password"
          value={this.props.password}
          onChange={this.props.handleChange.bind(this)} />
          <br />
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  editPassword : data => dispatch(editPassword(data))
})

export default PasswordEdit