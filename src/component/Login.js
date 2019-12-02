import React from 'react'
import logo from '../logo.jpg'
import { withRouter } from 'react-router'
import {Button,Input} from '@material-ui/core'


class Login extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      fields: {
        email: '',
        password: ''
      }
    }

  }

  handleChange (event) {
    let name = event.target.name
    let changeFields = this.state.fields
    changeFields[name] = event.target.value
    this.setState({ fields: changeFields })
  }

    handleEmail (e) {
    this.setState({ ...this.state, fields: { ...this.state.fields, email: e.target.value } })
  }

  render () {
    console.log('pppppp', this.props)
    return (
      <div className='container'>
        <div className='loginPage'>
          <img src={logo} width='90px' style={{ alignSelf: 'center' ,borderRadius:'70%'}} />
          <Input type='text' placeholder='Email'
            name='email'
            onChange={(e) => this.handleEmail(e)}
            className='input'
          />
          <Input
            type='password'
            name='password'
            onChange={(event) => this.handleChange(event)}
            placeholder='Password' 
            className='input'/>
            <div target="_blank" className='forgot'>Forgot your password?</div>
            
                    <Button className='button' >
            Login
          </Button>
        </div>
      </div>
    )
  }
}

export default withRouter(Login)
