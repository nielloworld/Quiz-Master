
var Questionaires = React.createClass({
  propTypes: {
    questionaires: React.PropTypes.array
  },
  getInitialState: function() {
    
    return {questionaire: '', answer: ''};
  },



  render: function() {

  var questionaires = this.props.questionaires.map(function(o) {
  var sconverter = new showdown.Converter();
  
    return (
      <tr key={o._id.$oid}>
      <th > <span dangerouslySetInnerHTML={{__html: sconverter.makeHtml(o.question)}} /> </th>
      <th > {o.answer} </th>
      <th className="col-md-4"><a href={'questionaires/' + o._id.$oid} className="btn">view</a><a href={'questionaires/destroy/' + o._id.$oid} className="btn" >delete</a></th></tr>
    );
  });
    return (
      <div className="row">
                    <div className="col-md-12">
                        <table className="table table-bordered striped ">
                            <thead>
                            <tr>
                                <th className="col-md-4">Question</th>
                                <th >Answer</th>
                                <th className="col-md-4">Option</th>
                            </tr>
                            </thead>
                            <tbody>
                              {questionaires}
                            </tbody>
                        </table>
                    </div>

                    <div className="center"><hr /><a href="questionaires/new" className="waves-effect waves-light btn">Add</a><a href="questionaires/home" className="waves-effect waves-light btn">Back</a></div>
                </div>
      
    )
  }
});