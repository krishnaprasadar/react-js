import React, { Component } from "react";
import axios from "axios";
const UserContext = React.createContext();

const reducer = (state, action) => {
  if(action.type === "DELETE USER"){
    return{
      ...state,
        users: state.users.filter((user) => action.payload !== user.id),
    }
  }
  else if(action.type === "ADD_USER"){
    return{
      ...state,
        users: [...state.users,action.payload]
    }
  }
  else{
    return state;
  }
};
export class UserProvider extends Component {
  state = {
    users: [],
    text:"tuna",
    dispatch: (action) => {
      this.setState((state) => reducer(state, action));
    },
  };
  componentDidMount = async () => { 
   const response = await axios.get("http://localhost:3005/users");
   this.setState({
    users: response.data
   })
  }
  render() {
    return (
      <UserContext.Provider value={this.state}>
        {this.props.children}
      </UserContext.Provider>
    );
  }
}

const UserConsumer = UserContext.Consumer;

export default UserConsumer;
