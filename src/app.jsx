var React = require('react');
var ReactDOM = require('react-dom');
var TodoApp = require('../build/todoApp.js');
ReactDOM.render(
    <TodoApp promise={$.getJSON('api/todos.json')}/>,
    document.getElementById('example')
);