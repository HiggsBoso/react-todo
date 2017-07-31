var React = require('react');
var TodoList = require('TodoList');

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
  render: function () {
    var {todos} = this.state;

    return (
      <div>
        <TodoList todos={todos}/>
      </div>
    );
  }
});

module.exports = TodoApp;
