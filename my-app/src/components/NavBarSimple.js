import React from "react";
import css from "./css/NavBarSimple.module.css";

class NavBarSimple extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Hello Guest!",
      message: "Login",
    };
  }

  handleClick() {
    this.setState(
      (prevState, prevProps) => {
        return {
          name:
            prevState.name === "Hello Guest!"
              ? "Welcome Back, user!"
              : "Hello Guest!",
          message: prevState.message === "Login" ? "Logout" : "Login",
        };
      },
      () => {
        console.log(this.state.message);
      }
    );
  }

  render() {
    return (
      <div className={css.NavBar}>
        <h1>My Gallery</h1>
        <div>
          <span>{this.state.name}</span>
          <button onClick={() => this.handleClick()}>
            {this.state.message}
          </button>
        </div>
      </div>
    );
  }
}

export default NavBarSimple;
