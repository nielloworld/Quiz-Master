
var QuizAdmin = React.createClass({
  propTypes: {
    questionaires: React.PropTypes.array
  },
  getInitialState: function() {
      var answers = this.props.questionaires.map(function(o) {
      var sample= [];
      var initiate = "answer" + o._id.$oid;
      sample.push(initiate);
    return sample ;
  });
  console.log(this.props.questionaires);
  var trya = {};
    for(x=0; x < answers.length; x++){
    trya[answers[x]] = '';
    
    }
    return trya;
  },

  handleAnswerChange: function(e) {
  var answers = this.props.questionaires.map(function(o) {
      var sample= [];
      var initiate = "answer" + o._id.$oid;
      sample.push(initiate);
    return sample ;
  });
  var trya = {};
    for(x=0; x < answers.length; x++){
      if (e.target.id == answers[x]){
        trya[answers[x]] = e.target.value;
        this.setState(trya);
      }
    }
  },

  handleSubmit: function(e) {
    e.preventDefault();
    var answers = this.props.questionaires.map(function(o) {
      var sample= [];
      var initiate = "answer" + o._id.$oid;
      sample.push(initiate);
    return sample ;
    });
    var trya = {};
    var states = [];
      for(x=0; x < answers.length; x++){
      states[answers[x]] = this.state[answers[x]];
        if (e.target.id == answers[x]){
          trya[answers[x]] = '';

          this.setState(trya)
        }
      }    
  var QAs = this.props.questionaires.map(function(o) {
    var initiate = [o._id.$oid, o.question, o.answer, states["answer" + o._id.$oid].trim()];
    return initiate ;
  });
  sendResult = {};
  for(x=0; x< QAs.length; x++){
    sendResult["param"+x] = {id: QAs[x][0], question:QAs[x][1], answer:QAs[x][2], useranswer:QAs[x][3], correct: ''}
  }
        $.ajax({
           url: 'result',
           type: 'GET',
           data: {
           resultquiz: sendResult},
           success: function() {
                Materialize.toast("Login Successful", 1000, 'rounded');      
           var root = location.protocol + '//' + location.host;
           }

         });

  },

  render: function() {
    var sconverter = new showdown.Converter();
    return (
      <div className="row">
        <div className="col-md-12 center">
        <form onSubmit={this.handleSubmit}>
         { this.props.questionaires.map((o) => <div className="card center" key={o._id.$oid}><div className="card-title blue lighten-4">QUESTION</div>
            <div className="card-content" > <span dangerouslySetInnerHTML={{__html: sconverter.makeHtml(o.question)}} /> </div>
                  <div className="col-md-4"></div><hr /> <label htmlFor="answer">Answer</label>
                  <input ref={"answer" +o._id.$oid} className="center" id={"answer" +o._id.$oid } type="text" value={ this.state["answer" +o._id.$oid] } onChange={ this.handleAnswerChange } className="validate" required={true} />
              </div>
          )}         

          <input type="submit" className="waves-effect waves-dark btn" value="Submit" />
       </form>
          
        </div>
       
      </div>
      
    )
  }
});