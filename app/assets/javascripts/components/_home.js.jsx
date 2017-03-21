
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
      <div className="center card medium">
            <div className="card-content ">
              <span className="card-title">Welcome!{this.props.current_name}</span>
              <p>you may now choose:</p>
            </div>
            <div className="card-action">
              <div className="row">
    <button></button><button></button>
			</div>

            </div>
          </div>
			
      
    )
  }
});