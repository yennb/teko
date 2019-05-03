import React, { Component } from 'react';
import { connect } from 'react-redux';
import GoogleLogin from 'react-google-login';
import { userAction } from '../_actions';
import { history, setUserInLocalStorage, getUserCurrent } from '../_helpers';

class loginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      token: '',
      name: '',
      email: ''
    }
    this.responseGoogle = this.responseGoogle.bind(this);
  }

  componentDidMount(){
    let user = getUserCurrent();
    if(user && user.email){
      history.push('/');
    }
  }

  responseGoogle(response){
    console.log('responseGoogle: ',response);
    this.setState({
      token: response.accessToken,
      email: response.w3.U3,
      name: response.w3.ig
    });
    this.props.dispatch(userAction.loginWithGoogle(response.accessToken, response.w3.U3, response.w3.ig, this.successCallback));
  }

  successCallback = (userId) => {
    console.log('successCallback login: ', this.props);
    if(this.props && this.props.users && this.props.users.loggedIn){
      let user = {
        'token': this.state.token,
        'email': this.state.email,
        'name': this.state.name,
        'id': userId
      }
      setUserInLocalStorage(user);
      history.push('/');
    }
  }

  render() {
    return (
      <div className="login">
        <GoogleLogin
          clientId="250162352220-mskp8vljtjksv4orq1ujabocb382shu4.apps.googleusercontent.com"
          buttonText="Login With Google"
          onSuccess={this.responseGoogle}
        />
      </div>
    )
  }
}

function mapStateToProps(state){
  const { users } = state;
  return { users };
}

const component = connect(mapStateToProps)(loginPage);
export { component as loginPage };