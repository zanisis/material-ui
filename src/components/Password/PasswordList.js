import React from 'react'
// import axios from 'axios'
import {connect} from 'react-redux'


import {deletePassword, editPassword} from '../../actions/passwordAction'
import PasswordEdit from './PasswordEdit'

import {
  Dialog, FlatButton, CircularProgress, Table,
  TableBody, TableHeader, TableHeaderColumn,
  TableRow, TableRowColumn,
} from '../../MaterialUI'

class PasswordLists extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      form : {
        id:0,
        url:'',
        username:'',
        password:''
      },
      open: false,
    }
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

  handleOpen = () => {
    this.setState({open: true});
  };

  handleClose = () => {
   this.setState({open: false});
 };

  renderEditForm(){
    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onTouchTap={this.handleClose}
      />,
      <FlatButton
        label="Save"
        primary={true}
        onTouchTap={()=>{
          this.handleClose()

          this.props.editPassword(this.state.form)
        }}
      />,
    ];
    return (
      <Dialog
          title="Dialog With Actions"
          actions={actions}
          modal={true}
          open={this.state.open}
        >
        <PasswordEdit
          {...this.state.form}
          handleChange={this.handleChange.bind(this)}
        />
        </Dialog>
    )
  }

  renderTBody(){
    return(
      <TableBody displayRowCheckbox={false}>
      { this.props.passwords.data.map(item =>(
        <TableRow key={item.id}>
          <TableRowColumn>{item.id}</TableRowColumn>
          <TableRowColumn>{item.url}</TableRowColumn>
          <TableRowColumn>{item.username}</TableRowColumn>
          <TableRowColumn>{item.password}</TableRowColumn>
          <TableRowColumn>
          <button
          type='button'
          onClick={()=> {
            this.handleOpen()
            this.setState({
            form:{
              id: item.id,
              url: item.url,
              username: item.username,
              password: item.password
            }
            })
          }}>
          Edit
          </button>
            <button
            type='button'
            onClick={()=>this.props.deletePassword(item.id)}>
            Delete
            </button>
          </TableRowColumn>
        </TableRow>
      ))}
      </TableBody>
    )
  }

  render() {
    return (
      <div>
        <Table>
          <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
            <TableRow>
              <TableHeaderColumn> ID </TableHeaderColumn>
              <TableHeaderColumn> Url </TableHeaderColumn>
              <TableHeaderColumn> Username </TableHeaderColumn>
              <TableHeaderColumn> Password </TableHeaderColumn>
              <TableHeaderColumn> Delete </TableHeaderColumn>
            </TableRow>
          </TableHeader>
          {this.renderTBody()}
        </Table>
        {this.renderEditForm()}
        {
          // <PasswordEdit {...this.state.form} handleChange={this.handleChange.bind(this)}/>
        }
      </div>
    )
  }
}

const mapStateToProps = state => ({
  passwords : state
})

const mapDispatchToProps = dispatch => ({
  deletePassword : id => dispatch(deletePassword(id)),
  editPassword : data => dispatch(editPassword(data)),
})

export default connect(mapStateToProps, mapDispatchToProps)(PasswordLists)