import React from "react";
import { Link } from "react-router-dom";
import { DropdownButton, Dropdown } from "react-bootstrap";

class Header extends React.Component {
  logOut = () => {
    localStorage.removeItem("data");
    this.props.history.push("/login");
  };

  render() {
    const { token } = this.props;
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            Navbar
          </Link>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              {/* <li className="nav-item">
                <Link className="nav-link active" to="/">
                  Home
                </Link>
              </li> */}
            </ul>

            <ul className={"nav ml-auto"}>
              <li className="nav-item ml-auto">
                {!token ? (
                  <Link className="nav-link active" to="/login">
                    Login
                  </Link>
                ) : (
                  <div className={"d-flex"}>
                    <DropdownButton
                      id="dropdown-basic-button nav-link"
                      title="Rohit Taur"
                    >
                      <Dropdown.Item>
                        <Link className="nav-link active" to="/dashboard">
                          Dashboard
                        </Link>
                      </Dropdown.Item>
                      <Dropdown.Item>
                        <Link className="nav-link" to="/profile">
                          User Profile
                        </Link>
                      </Dropdown.Item>
                      <Dropdown.Item>
                        <Link className="nav-link" to={"/editor"}>
                          Editor
                        </Link>
                      </Dropdown.Item>
                      <Dropdown.Item onClick={() => this.logOut()}>
                        <span className="cursor-pointer">Logout</span>
                      </Dropdown.Item>
                    </DropdownButton>
                  </div>
                )}
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Header;
