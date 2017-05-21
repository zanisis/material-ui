import React from 'react'
import {connect} from 'react-redux'

import {addPassword} from '../../actions/passwordAction'
import Wrapper from '../Wrapper'

import{
  Paper,
  TextField,
  RaisedButton,
} from '../../MaterialUI'

const styles = {
  container:{
    display: 'flex',
    justifyContent: 'center'
  },
  paper: {
    margin: 20,
    padding: 30,
    textAlign: 'center',
    display: 'inline-block',
  }
};

class PasswordForms extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      form : {
        url:'',
        username:'',
        password:''
      }
    }
  }

  componentWillMount(){
    //
  }

  componentDidMount(){
    //
  }

  handleChange(e){
    let { name, value } = e.target
    let { form }  = this.state
    let newState = { form }
    newState.form[name] = value
    this.setState(newState)
  }

  postPassword(){
    let pwd = this.state.form.password
    let upperCase = /[A-Z]/.test(pwd)
    let lowerCase = /[a-z]/.test(pwd)
    let specialCase = /[^a-zA-Z0-9]/.test(pwd)
    let numberCase = /[0-9]/.test(pwd)
    let lengthCase = pwd.length >= 5
    let isValid = upperCase && lowerCase && specialCase && numberCase && lengthCase

    if(isValid){
      let { form } = this.state
      let newPassword = {
        id : Number(new Date()),
        ...form
      }
      this.props.addPassword(newPassword)
      this.setState({
        form : {
          url:'',
          username:'',
          password:''
        }
      })
    } else {
      alert('Password is to be spesific')
    }


  }

  renderValidationText(type, text){
    let pwd = this.state.form.password
    let upperCase = type === 1 && /[A-Z]/.test(pwd)
    let lowerCase = type === 2 && /[a-z]/.test(pwd)
    let specialCase = type === 3 && /[^a-zA-Z0-9]/.test(pwd)
    let numberCase = type === 4 && /[0-9]/.test(pwd)
    let lengthCase = type === 5 && pwd.length >= 5
    let result = upperCase || lowerCase || specialCase || numberCase || lengthCase

    const style = {
      textDecoration: result ? 'line-through' : ''
    }

    return(
      <h3 style={style}>
        {text}
      </h3>
    )
  }

  render() {
    return (
      <Wrapper>
        <div style={styles.container}>
          <Paper style={styles.paper} zDepth={2}>
            <div>
            <h3>New Password</h3>
            <TextField
              name="url"
              floatingLabelText="Url"
              type="text"
              value={this.state.form.url}
              onChange={this.handleChange.bind(this)}
              /><br/>
              <TextField
                name="username"
                floatingLabelText="Username"
                type="text"
                value={this.state.form.username}
                onChange={this.handleChange.bind(this)}
                /><br/>
              <TextField
                name="password"
                floatingLabelText="Password"
                type="password"
                value={this.state.form.password}
                onChange={this.handleChange.bind(this)}
                /><br/>
              <RaisedButton
              label="Save"
              onClick={()=> this.postPassword()}/>
              <div>
              <h3>Password Strength</h3>
              {this.renderValidationText(1, 'Password harus memiliki setidaknya satu karakter huruf besar (upper-case)')}
              {this.renderValidationText(2, 'Password harus memiliki setidaknya satu karakter huruf kecil (lower-case)')}
              {this.renderValidationText(3, 'Password harus memiliki setidaknya satu karakter spesial(#$@!&%...)')}
              {this.renderValidationText(4, 'Password harus memiliki setidaknya satu angka')}
              {this.renderValidationText(5, 'Password harus memiliki panjang (length) lebih dari 5 karakter')}
              </div>
            </div>
            </Paper>
        </div>
      </Wrapper>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  addPassword : data => dispatch(addPassword(data))
})

export default connect(null, mapDispatchToProps)(PasswordForms)