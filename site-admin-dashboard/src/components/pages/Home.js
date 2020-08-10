import React, { Component } from "react"
import background from "../../assets/background.png"
import GoogleLogin from 'react-google-login'

class Home extends Component {

  responseGoogle=(response)=>{
    console.log(response);
    console.log(response.profileObj);
  }

  render() {
    return (   
      <div>
        {/* <img
        src={background}
        style={{height: '100%',  width: '100%'}} /> */}
        <br />

        <GoogleLogin 
        clientId="573292673851-j44aqq6nae92a10ogpcu26ealqhr4hf3.apps.googleusercontent.com"
        buttonText="Create New Account"
        onSuccess={this.responseGoogle}
        onFailure={this.responseGoogle}
        cookiePolicy={'single_host_origin'}        
        
        />

        <h1 style={{ marginTop: 100, fontWeight: 80, textAlign: 'center' }}>Disabling inhibitions to excel in sports...</h1>
      </div>
    );
  }
}

export default Home;
