import React, { Component } from 'react'
import posed from 'react-pose';
import UserConsumer from "./context";
import axios from 'axios';
const Animation = posed.div({
    visible : {
        opacity:1,
        applyAtStart:{
            display:"block"
        }
    },
    hidden:{
        opacity:0,
        applyAtEnd:{
            display:"none"
        }
    }
});
class AddUser extends Component {
    state = {
        visible:false,
        name:"",
        department:"",
        salary:""
    }
    changeVisibility = (e) => {
        this.setState({
            visible: !this.state.visible
        })
    }
    changeInput = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    addUser = async (dispatch,e) => {
        e.preventDefault();
        const {name,salary,department} = this.state;
        const newUser = {
            name,
            salary,
            department,
        }
        const response = await axios.post("http://localhost:3005/users",newUser);
        dispatch({type: "ADD_USER",payload:response.data});
    }
  render() {
    const {visible,name,salary,department} = this.state;
    return(
        <UserConsumer>
            {
                value => {
                    const {dispatch} = value;
                    return (
                        <div className='col-md-8 mb-4'>
                          <button onClick={this.changeVisibility} className='btn btn-dark w-100 mt-2 mb-2'>{visible ? "Hide Form":"Show Form"}</button>
                          <Animation pose={visible ? "visible": "hidden"}>
                              <div className='card'>
                                  <div className='card-header'>
                                      <h4>Add User Form</h4>
                                  </div>
                                  <div className='card-body'>
                                      <form onSubmit={this.addUser.bind(this,dispatch)}>
                                          <div className='form-group mt-2 mb-2'>
                                              <label htmlFor='name'>Name</label>
                                              <input type="text" name="name" id="name" placeholder='Enter Name' className='form-control' value={name} onChange={this.changeInput}/>
                                          </div>
                                          <div className='form-group mt-2 mb-2'>
                                              <label htmlFor='department'>Department</label>
                                              <input type="text" name="department" id="id" placeholder='Enter Department' className='form-control' value={department} onChange={this.changeInput}/>
                                          </div>
                                          <div className='form-group mt-2 mb-2'>
                                              <label htmlFor='salary'>Salary</label>
                                              <input type="text" name="salary" id="salary" placeholder='Enter Salary' className='form-control' value={salary} onChange={this.changeInput}/>
                                          </div>
                                          <button type="submit" className='btn btn-danger mt-2 mb-2 w-100'>Add User</button>
                                      </form>
                                  </div>
                              </div>
                          </Animation>
                        </div>
                      ) 
                }
            }
        </UserConsumer>
    )
  }
}
export default AddUser;