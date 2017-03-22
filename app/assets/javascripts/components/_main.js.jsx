var Main = React.createClass({
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

    var user = {name: name,
    			password: password,
    			admin: "0"}
    var success = false;
    for (x in this.props.users) {
	    if (name == this.props.users[x]['name']){
	    	if (password == this.props.users[x]['password']){
	    	 success = true;
	    	 window.sessionStorage.setItem("user", this.props.users[x]);
				$.ajax({
			     url: 'welcome/modify_session_variables',
			     type: 'GET',
			     data: {
			       current_user: this.props.users[x],
			       current_name: this.props.users[x]['name'],
			       current_admin: this.props.users[x]['admin']
			     },
			     success: function() {
			          Materialize.toast("Login Successful", 1000, 'rounded');      
			     var root = location.protocol + '//' + location.host;
     			window.location.pathname = '/home/show';
			     }

			   });
	    	}
	    }
	}
    this.setState({data: user});
    if (success){


    }else{
    	Materialize.toast("Login Failed", 1000, 'rounded'); 
    }
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
			          <input ref='name' id="icon_prefix" type="text" className="validate" value={this.state.name} onChange={this.handleNameChange} required={true}
          minCharacters={3} maxcharacters={10} />
			          <label htmlFor="icon_prefix">Name</label>
			        </div>
			        <div className="input-field col s6">
			          <i className="material-icons prefix">lock</i>
			          <input ref='password' id="icon_password" type="password" className="validate" value={ this.state.password } onChange={ this.handlePasswordChange } required={true}
          minCharacters={3} maxcharacters={10} />
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