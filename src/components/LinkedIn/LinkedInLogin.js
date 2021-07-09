import React, { Component } from 'react';
import _ from 'lodash';
import { withRouter } from 'react-router-dom';
import { loginTalent } from '../../api/talentApi';
import axios from 'axios';
import { HEADER } from '../../constants/header';
import { ID } from '../../constants/header';
import { Button } from '@material-ui/core';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import { blue } from '@material-ui/core/colors';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: blue,
  },
});

class LinkedInLogin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isAuthorized: false,
      linkedInId: null,
      name: null,
      surname: null,
      linkedinUrl: null,
      proilePhoto: null,
    };
  }

  componentDidMount() {
    
    window.addEventListener('message', this.handlePostMessage);
  }

  handlePostMessage = async event => {
    if (event.data.type === 'profile') {
      const profile = event.data.profile;
      this.updateProfile(profile);
      let body = {
        linkedInId: _.get(profile, 'id', ''),
      };
      const userInformations = await loginTalent({ body: body });
      if (userInformations !== null || undefined) {
        axios.defaults.headers.token = userInformations.tokenCode;
        HEADER.tokenCode = userInformations.tokenCode;
        ID._id = userInformations._id;
        this.props.history.push({
          pathname: `/load`,
          search: `?id=${_.get(profile, 'id', '')}`,
        });
      }

      alert(
        `Sign up successful: ${profile.localizedFirstName} ${
          profile.localizedLastName
        }`
      );
    }
  };

  updateProfile = profile => {
  
    this.setState({
      isAuthorized: true,
      linkedInId: _.get(profile, 'id', ''),
      name: _.get(profile, 'localizedFirstName', ''),
      surname: _.get(profile, 'localizedLastName', ''),
      linkedinUrl: `https://www.linkedin.com/in/${_.get(
        profile,
        'vanityName',
        ''
      )}`,
      proilePhoto: _.get(
        _.last(_.get(profile, 'profilePicture.displayImage~.elements', '')),
        'identifiers[0].identifier',
        ''
      ),
    });
  };

  requestProfile = () => {
    var oauthUrl = `https://www.linkedin.com/oauth/v2/authorization?response_type=code&client_id=78dk4hnmv0ey5o&scope=r_liteprofile&state=123456&redirect_uri=http://talentzoom.us-east-2.elasticbeanstalk.com/callback`;
    var width = 450,
      height = 730,
      left = window.screen.width / 2 - width / 2,
      top = window.screen.height / 2 - height / 2;

    window.open(
      oauthUrl,
      'Linkedin',
      'menubar=no,location=no,resizable=no,scrollbars=no,status=no, width=' +
        width +
        ', height=' +
        height +
        ', top=' +
        top +
        ', left=' +
        left
    );
  };

  render() {
    return (
      <div
        type="submit"
        style={{ height: '40px', width: '215px', marginTop: '10px' }}>
        <ThemeProvider theme={theme}>
          <Button
            onClick={this.requestProfile}
            style={{
              fontSize: '1rem',
              fontWeight: '400',
              fontFamily: 'Ubuntu',
              textTransform: 'none',
              backgroundColor: 'transparent',
            }}
            color="primary"
            startIcon={<LinkedInIcon />}>
            Log in with LinkedIn
          </Button>
        </ThemeProvider>
      </div>
    );
  }
}

export default withRouter(LinkedInLogin);
