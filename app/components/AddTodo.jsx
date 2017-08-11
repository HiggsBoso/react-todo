var React = require('react');

var AddTodo = React.createClass({
  onSubmit: function (e) {
    e.preventDefault();
    var todoText = this.refs.todoText.value;

    if (todoText) {
      this.refs.todoText.value = '';
      this.props.onAddTodo(todoText);
    } else {
      this.refs.todoText.focus();
    }
  },
  render: function () {

    return (
      <div className="container__footer">
        <form onSubmit={this.onSubmit} ref="addTodoForm">
          <input type="text" placeholder="What do you need to do?" ref="todoText"/>
          <button className="button expanded">Add Todo</button>
        </form>
      </div>
    );
  }
});

module.exports = AddTodo;
