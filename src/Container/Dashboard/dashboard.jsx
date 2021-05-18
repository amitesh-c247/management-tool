import React from "react";
import DashboardComponents from "../../Components/dashboard";

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount = () => {
    const data = localStorage.getItem("token");
    console.log(data, "=====data====");
    if (!data) {
      this.props.history.push("/");
    }
  };

  render() {
    return (
      <>
        <DashboardComponents />
      </>
    );
  }
}

export default Dashboard;
