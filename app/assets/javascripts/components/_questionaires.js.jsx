var Questionaires = React.createClass({
  propTypes: {
    questionaires: React.PropTypes.array
  },
  getInitialState: function() {
  console.log(this.props.questionaires);
    return {questionaire: '', answer: ''};
  },


  render: function() {
  var questionaires = this.props.questionaires.map(function(o) {
    return (
      <tr >
      <th > {o.question} </th>
      <th > {o.answer} </th>
      <th className="col-md-4"><a href={'questionaires/' + o._id.$oid} className="btn">edit</a><a href={'questionaires/destroy/' + o._id.$oid} className="btn" >delete</a></th></tr>
    );
  });
    return (
      <div className="row">
                    <div className="col-md-12">
                        <table className="table table-bordered">
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
                    <div className="center"><a href="questionaires/new" className="waves-effect waves-light btn">Add</a><a href="questionaires/home" className="waves-effect waves-light btn">Back</a></div>
                </div>
      
    )
  }
});