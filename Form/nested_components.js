var Badge = React.createClass({
  render() {
    return <button>
      {this.props.title} - {this.props.number}
    </button>
  }
});
var Form = React.createClass({
  render() {
    return <div>
      < Badge title={this.props.title} number={this.props.number} />
    </div>
  }
});

// create form

var options = {
  title: 'inbox',
  number: 5
}
React.createElement(Form, options)
