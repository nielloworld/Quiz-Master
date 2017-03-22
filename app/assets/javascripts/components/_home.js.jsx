
var Home = React.createClass({
  propTypes: {
    current_name: React.PropTypes.string
  },
  getInitialState: function() {
  	console.log(this.props.current_name);
    return {name: '', password: ''};
  },

  render: function() {
    return (
      <div className="center card small">
            <div className="card-content ">
              <span className="card-title">Welcome {this.props.current_name}!</span>
              <p>you may choose to:</p>
            </div>
            <div className="card-action">
              <div className="row">
              <a href="start" className="waves-effect waves-light btn">Take the quiz</a>
              <a href="review" className="waves-effect waves-light btn">review your quiz</a>
              <a href="logout" className="waves-effect waves-light btn">Logout</a>
			       </div>
            </div>
          </div>
			
      
    )
  }
});