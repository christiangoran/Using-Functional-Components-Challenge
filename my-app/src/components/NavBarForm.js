import React from "react";
import css from "./css/NavBarForm.module.css";
import NavBarChild from "./NavBarChild";

class NavBarForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogged: true,
    };
  }

  handleClick = () => {
    this.setState((prevState, prevProps) => {
      return {
        isLogged: !prevState.isLogged,
      };
    });
  };

  render() {
    return (
      <div className={css.NavBar}>
        <h1>My Gallery</h1>
        <NavBarChild
          handleClick={this.handleClick}
          isLogged={this.state.isLogged}
        />
      </div>
    );
  }
}

export default NavBarForm;
