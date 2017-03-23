
var Result = React.createClass({
  propTypes: {
    result: React.PropTypes.object
  },
 
  render: function() {
    var sconverter = new showdown.Converter();
    return (
      <div className="row">
        <div className="col-md-12 center">
         { this.props.result.map((o,p) => <div className="card center" key={o._id.$oid}><div className="card-title blue lighten-4">QUESTION</div>
            <div className="card-content" > <span dangerouslySetInnerHTML={{__html: sconverter.makeHtml(o.question)}} /> </div>
                  <div className="col-md-4"></div><hr /> <label htmlFor="answer">Answer</label>
                  <div>{o.answer}</div><div>{o.useranswer}</div><div>{o.correct}</div>
              </div>
          )}         

        </div>
       
      </div>
      
    )
  }
});