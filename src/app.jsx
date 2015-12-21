ReactDOM.render(
    <TodoApp promise={$.getJSON('api/todos.json')}/>,
    document.getElementById('example')
);