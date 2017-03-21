class Navbar extends React.Component {
  render () {
    return (
		  <nav>
		    <div className='nav-wrapper'>
		      <a href="#" className="brand-logo center">{this.props.title}</a>
		    </div>
		  </nav>
        );
  }
}
