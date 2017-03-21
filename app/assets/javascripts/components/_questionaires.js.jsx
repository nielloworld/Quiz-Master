var Questionaires = React.createClass({
  propTypes: {
    user: React.PropTypes.array
  },
  getInitialState: function() {
    return {name: '', password: ''};
  },
  handleNameChange: function(e) {
    this.setState({ name: e.target.value });
  },
  handlePasswordChange: function(e) {
    this.setState({ password: e.target.value });
  },
  handleSubmit: function(e) {
    e.preventDefault();
    var name = this.state.name.trim();
    var password = this.state.password.trim();
    if (!name || !password) {
      return;
    }
    this.setState({ name: '', password: ''});

    var user = {user: this.state.user}
    this.setState({data: user});
    $.ajax({
      url: '/users/new',
      dataType: 'json',
      type: 'POST',
      data: {user: user},
      success: function(data) {
        this.setState({data: user});
      }.bind(this),
      error: function(xhr, status, err) {
        this.setState({data: user});
       console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  },

  render: function() {
    return (
     <div className="center row cardWelcome">
        <div className="col s6 offset-s3">
          <div className="card ">
            <div className="card-content ">
              <span className="card-title">Welcome!</span>
              <p>This is a Quiz Master App. Please Login</p>
            </div>
            <div className="card-action">
              <div className="row">
              <form onSubmit={this.handleSubmit}>
			        <div className="input-field col s6">
			          <i className="material-icons prefix">account_circle</i>
			          <input ref='name' id="icon_prefix" type="text" className="validate" value={this.state.name} onChange={this.handleNameChange} />
			          <label htmlFor="icon_prefix">Name</label>
			        </div>
			        <div className="input-field col s6">
			          <i className="material-icons prefix">lock</i>
			          <input ref='password' id="icon_password" type="password" className="validate" value={ this.state.password } onChange={ this.handlePasswordChange } />
			          <label htmlFor="icon_password">password</label>
			        </div>
			        <input type="submit"  className="waves-effect waves-dark btn" value="Login" />
			 </form>
			</div>

            </div>
          </div>
        </div>
      </div>

      
    )
  }
});