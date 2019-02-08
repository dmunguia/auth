import React, { Component } from 'react';
import { Panel, ControlLabel, Glyphicon } from 'react-bootstrap';
  
class Profile extends Component {
  componentWillMount() {
    this.setState({ profile: {} });
    const { userProfile, getProfile } = this.props.authService;
    if (!userProfile) {
      getProfile((err, profile) => {
        this.setState({ profile });
      });
    } else {
      this.setState({ profile: userProfile });
    };
  }

  renderProfile() {
    const { profile } = this.state;
    if (profile) {
      return (
        <div className="profile-area">
          <h1>{profile.name}</h1>
          <Panel header="Profile">
            <img src={profile.picture} alt="profile"/>
            <div>
              <ControlLabel><Glyphicon glyph="user"/>Nickname</ControlLabel>
              <h3>{profile.nickname}</h3>
            </div>
            <pre>{JSON.stringify(profile, null, 2)}</pre>
          </Panel>
        </div>
      );
    } else {
      return (
        <h3>Couldn't find an user profile, are you logged in?</h3>
      );
    }
  }

  render() {
    return (
      <div className="container">
        { this.renderProfile() }
      </div>
    );
  }
}

export default Profile;
