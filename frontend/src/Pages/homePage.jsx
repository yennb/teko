import React, { Component } from 'react';
import { connect } from 'react-redux';
import socketIOClient from "socket.io-client";
import { getUserCurrent, history } from '../_helpers';
import { userAction } from '../_actions';

class homePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      endpoint: "localhost:4001",
      userCurrent: getUserCurrent(),
    }
  }

  componentDidMount() {
    console.log('componentDidMount: ', this.state.userCurrent);
    if (this.state.userCurrent === null) {
      history.push('/login');
    }
    this.props.dispatch(userAction.getAllUser());
    if(this.state.userCurrent && this.state.userCurrent.id){
      const socket = socketIOClient(this.state.endpoint);
      socket.emit('online user', this.state.userCurrent.id);
    }
  }

  render() {
    let user = getUserCurrent();
    if (user === null) {
      history.push('/login');
    }
    let users = [];
    if (this.props.users) {
      users = this.props.users.dataUsers ? this.props.users.dataUsers.data : [];
    }

    const socket = socketIOClient(this.state.endpoint);
    var vm = this;
    socket.on('reload users', function(rows){
      console.log('socket reload rows: ', rows);
      if(vm.props.users && vm.props.users.dataUsers){
        vm.props.users.dataUsers.data = rows;
        vm.forceUpdate();
      }
    });

    return (
      <div>
        <table>
          <tbody>
            <tr>
              <td className="content-left"></td>
              <td className="content-right">
                {
                  users && users.map((userItem, index) => {
                    console.log('userItem: ', userItem);
                    return (
                      <p key={index}>
                        <i className={userItem.status === "online" ? "fas fa-user-circle" : "fas fa-power-off"}></i>
                        <span className="padding-left-7">{userItem.name}</span>
                      </p>
                    );
                  })
                }
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}

function mapStateToProps(state) {
  let { users } = state;
  return {
    users
  }
}

const component = connect(mapStateToProps)(homePage);
export { component as homePage };