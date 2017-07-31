var React = require('react');
var TodoList = require('TodoList');
var AddTodo = require('AddTodo');

var TodoApp = React.createClass({
  getInitialState: function () {
    return {
      todos: [
        {
          id: 1,
          text: 'Buy Macbook Pro'
        }, {
          id: 2,
          text: 'Walk a dog'
        }, {
          id: 3,
          text: 'Go the groceries store'
        }, {
          id: 4,
          text: 'Watch React lessons'
        }
      ]
    }
  },
  handleAddTodo: function (todoText) {
    alert('New todo has been added: ' + todoText);
  },
  render: function () {
    var {todos} = this.state;

    return (
      <div>
        <TodoList todos={todos}/>
        <AddTodo onAddTodo={this.handleAddTodo}/>
      </div>
    );
  }
});

module.exports = TodoApp;
