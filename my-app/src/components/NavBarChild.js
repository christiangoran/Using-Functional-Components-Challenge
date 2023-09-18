import React from "react";

function NavBarChild(props) {
  return props.isLogged ? (
    <button onClick={props.handleClick}>Login</button>
  ) : (
    <form>
      <label htmlFor="username">Username:</label>
      <input id="username" placeholder="Username" />

      <label htmlFor="password">Password:</label>
      <input id="password" placeholder="Password" />

      <button onClick={props.handleClick}>Submit</button>
    </form>
  );
}

export default NavBarChild;
