import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import FacebookLogin from "react-facebook-login";

import { appId } from "../../config/appId";

class FBlogin extends Component {
   state = {
      isLoggedIn: false,
      userID: "",
      name: "",
      email: "",
      picture: "",
      redirect: false
   };

   responseFacebook = response => {
      this.setState({
         isLoggedIn: true,
         userID: response.userID,
         name: response.name,
         email: response.email,
         picture: response.picture.data.url
      });
   };

   logout = () => {
      this.setState({
         isLoggedIn: false
      });
   };

   setRedirect = () => {
      this.setState({
         redirect: true
      });
   };
   renderRedirect = () => {
      if (this.state.redirect) {
         return <Redirect to="/index" />;
      }
   };

   render() {
      let fbContent, buttons;

      if (this.state.isLoggedIn) {
         fbContent = (
            <div
               style={{
                  width: "400px",
                  margin: "auto",
                  background: "#f4f4f4",
                  padding: "10px"
               }}
            >
               <img
                  src={this.state.picture}
                  alt={this.state.name}
                  style={{ width: "100px" }}
               />
               <p className="lead">Welcome {this.state.name}</p>
               {/* Email: {this.state.email} */}
            </div>
         );
         buttons = (
            <div>
               <br />
               <div className="row">
                  <button
                     type="button"
                     className="btn btn-outline-danger col-6"
                     onClick={this.logout}
                  >
                     Logout
                  </button>
                  <button
                     type="button"
                     className="btn btn-outline-success col-6"
                     onClick={this.setRedirect}
                  >
                     Next
                  </button>
               </div>
            </div>
         );
      } else {
         fbContent = (
            <FacebookLogin
               appId={appId}
               autoLoad={true}
               fields="name,email,picture"
               callback={this.responseFacebook}
            />
         );
      }
      return (
         <div>
            <main role="main" class="inner cover">
               <h1 className="cover-heading">Facebook Login</h1>
               <p className="lead">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Laborum modi deleniti, libero aut eligendi velit tempora ut
                  sunt repellendus maxime mollitia error? Omnis aperiam culpa
                  esse incidunt ipsam perspiciatis laboriosam.
               </p>
               {this.renderRedirect()}
               {fbContent}
               {buttons}
            </main>
         </div>
      );
   }
}

export default FBlogin;
