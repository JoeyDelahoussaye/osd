const React = require('react');
const Welcome = require('./Welcome.jsx');
const BusinessForm = require('./BusinessForm.jsx');
const BusinessLogin = require('./BusinessLogIn.jsx');
const Profile = require('./Profile.jsx');
const SignupComplete = require('./SignupComplete.jsx');
const Utilities = require('../utilities');

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      renderThis: 'welcome',
      businessInfo: 'goodbye',
    };
  }



  changePage(pageId, id) {
    console.log(id, "in change page")
    if (pageId === 'profile') {
      Utilities.getBusinessInfo(id).then(this.setState(() => {
        return { businessInfo: "hello", renderThis: pageId };
      }));
      
    } else {
      this.setState(() => {
        return { renderThis: pageId };
      });
    }
  }
  // changePage(pageId) {
  //   console.log(pageId, " in change page")
   
  //   this.setState(() => {
  //     return { renderThis: pageId };
  //   });
  // }

  render() {
    if (this.state.renderThis === 'welcome') {
      return (
        <div className="container-fluid">
          <Welcome changePage={this.changePage.bind(this)} />
        </div>
      );
    }  
    if (this.state.renderThis === 'businessForm') {
      return (
        <div className="container-fluid">
          <BusinessForm changePage={this.changePage.bind(this)} />
        </div>
      );
    }
    if (this.state.renderThis === 'login') {
      return (
        <div className="container-fluid">
          <BusinessLogin changePage={this.changePage.bind(this)} />
        </div>
      );
    }
    if (this.state.renderThis === 'profile') {
      return (
        <div className="container-fluid">
          <Profile info={this.state.businessInfo} changePage={this.changePage.bind(this)} />
        </div>
      );
    }
    if (this.state.renderThis === 'signupcomplete') {
      return (
        <div className="container-fluid">
          <SignupComplete changePage={this.changePage.bind(this)} />
        </div>
      );
    }
  }
}

module.exports = App;
