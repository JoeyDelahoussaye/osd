const React = require('react');
const Utilities = require('../utilities');

class Welcome extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      clicked: 0,
    };
  }

  handleEmailChange(event) {
    this.setState({ email: event.target.value });
  }

  handlePasswordChange(event) {
    this.setState({ password: event.target.value });
  }

  addUser() {
    const { email } = this.state;
    const { password } = this.state;
    Utilities.addNewUser(email, password);
    this.renderPage('businessForm');
  }

  renderPage(page) {
    this.state.clicked++;
    if (this.state.clicked > 0) {
      this.props.changePage(page);
    }
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-6">
            <h3>
              Official Sponsors of Democracy
            </h3>
            <dl>
              <dt>
                Support Your Employees
              </dt>
              <dd>
            Bolster employee morale by letting them know that you support their right to vote
              </dd>
              <dt>
                Logistics Made Easy
              </dt>
              <dd>
                We create a logistical gameplan custom-tailored to each employee voter
              </dd>
              <dt>
                No Surprises
              </dt>
              <dd>
                Get ahead of election-day scheduling so business goes smoothly
              </dd>
            </dl>
          </div>
          <div className="col-md-6">
            <div role="form">
              <div className="form-group">

                <label htmlFor="exampleInputEmail1">
                  Email address
                  <input type="email" className="form-control" id="exampleInputEmail1" email={this.value} onChange={this.handleEmailChange.bind(this)} />
                </label>
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputPassword1">
                  Password
                  <input type="password" className="form-control" id="exampleInputPassword1" password={this.value} onChange={this.handlePasswordChange.bind(this)} />
                </label>
              </div>
              <button type="submit" className="btn btn-primary" onClick={this.addUser.bind(this)}>
                  Submit
              </button>
            </div>
            <div>
              Already a member?
              <button type="button" id="existingMember" className="btn btn-background" onClick={this.renderPage.bind(this, "login")}>
                Sign In Here
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

module.exports = Welcome;