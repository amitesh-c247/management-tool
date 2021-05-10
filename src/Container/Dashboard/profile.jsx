import React from 'react';
import ProfileComponent from '../../Components/profile';

class Profile extends React.Component {
  componentDidMount = () => {
    const data = JSON.parse(localStorage.getItem("data"))
    if (data && !data.token) {
      this.props.history.push('/')
    }
  }

  render() {
    const data = JSON.parse(localStorage.getItem("data"))
    return (
      <>
        <ProfileComponent data={data} />
      </>
    );
  }
}

export default Profile;
