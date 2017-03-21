var Questionaires_add = React.createClass({
  propTypes: {
    questionaire: React.PropTypes.array
  },
  getInitialState: function() {
  console.log(this.props.questionaires);
    return {questionaire: '', answer: ''};
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
                <label htmlFor="icon_prefix">Question</label>
              </div>
              <div className="input-field col s6">
                <i className="material-icons prefix">lock</i>
                <input ref='password' id="icon_password" type="password" className="validate" value={ this.state.password } onChange={ this.handlePasswordChange } />
                <label htmlFor="icon_password">Answer</label>
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