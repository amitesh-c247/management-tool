import React from 'react';
import ProfileComponent from '../../Components/profile';

class Profile extends React.Component {
  componentDidMount = () => {
    const data = localStorage.getItem("token")
    if (!data) {
      this.props.history.push('/')
    }
  }

  render() {
    return (
      <>
        <ProfileComponent />
      </>
    );
  }
}

export default Profile;
