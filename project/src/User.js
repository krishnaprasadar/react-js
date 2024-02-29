import React, { Component } from "react";
import PropTypes from "prop-types";
import UserConsumer from "./context";
import axios from "axios";
class User extends Component {
  state = {
    isVisible: false,
  };
  static defaultProps = {
    name: "Bilgi yok",
    salary: "Bilgi yok",
    department: "Bilgi yok",
  };
  onClickEvent = (e) => {
    this.setState({
      isVisible: !this.state.isVisible,
    });
  };

  onDeleteUser = async (dispatch, e) => {
    const { id } = this.props;
    await axios.delete(`http://localhost:3005/users/${id}`); 
    dispatch({ type: "DELETE USER", payload: id });
  };
  render() {
    const { name, salary, department } = this.props;
    const { isVisible } = this.state;
    return (
      <UserConsumer>
        {(value) => {
          const { dispatch } = value;

          return (
            <div className="col-md-8 mb-4">
              <div className="card" style={isVisible ? {backgroundColor: "#62848d",color: "#fff"} : null}>
                <div
                  className="card-header d-flex justify-content-between align-items-center"
                  onClick={this.onClickEvent}
                >
                  <h4 className="d-inline">{name}</h4>
                  <i
                    onClick={this.onDeleteUser.bind(this, dispatch)}
                    className="far fa-trash-alt"
                    style={{ cursor: "pointer" }}
                  ></i>
                </div>
                {isVisible ? (
                  <div className="card-body">
                    <p className="card-text">Maaş: {salary}</p>
                    <p className="card-text">Departman: {department}</p>
                  </div>
                ) : null}
              </div>
            </div>
          );
        }}
      </UserConsumer>
    );
    //
  }
}

User.propTypes = {
  name: PropTypes.string.isRequired,
  salary: PropTypes.string.isRequired,
  department: PropTypes.string.isRequired,
  id:PropTypes.string.isRequired
};

export default User;
