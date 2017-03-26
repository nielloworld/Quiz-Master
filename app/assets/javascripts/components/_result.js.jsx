
var Result = React.createClass({
  propTypes: {
    result: React.PropTypes.object
  },

   getInitialState: function() {
      console.log(this.props.result)
        return {name: '', password: ''};
  },
  render: function() {
    var sconverter = new showdown.Converter();
    var newArrayDataOfObject = Object.values(this.props.result);
    console.log(newArrayDataOfObject);
    return (
      <div className="row center">
        <div className="col-md-12 center">
         { newArrayDataOfObject.map((o,p) => <div className="card center" key={o.id}><div className="card-title blue lighten-4">QUESTION</div>
            <div className="card-content" > <span dangerouslySetInnerHTML={{__html: sconverter.makeHtml(o.question)}} /> </div>
                  <div className="col-md-4"></div><hr /> <label htmlFor="answer">correct Answer</label>
                  <div>{o.answer}</div><label htmlFor="answer">your Answer</label><div>{o.useranswer}</div><hr /><div><h4>{o.correct}</h4></div>
              </div>
          )}         

        </div>
        <a href="home" className="waves-effect waves-light btn center">go back</a>
      </div>
      
    )
  }
});