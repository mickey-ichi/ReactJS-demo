var TodoApp = React.createClass({

    getInitialState: function () {
        return {
            todoList: [],
            error: null
        };
    },

    componentDidMount() {
        this.props.promise.then(
            todos => this.setState({loading: false, todoList: todos}),
            error => this.setState({loading: false, error: error})
        );
    },
    handleTodoSubmit: function (todo) {
        this.state.todoList.push(todo);
        this.setState(
            {
                todoList: this.state.todoList
            }
        );

    },

    handleDeleteTodo: function (todos) {
        this.setState(
            {
                todoList: todos
            }
        );
    },

    render: function () {
        return (
            <div className="container-fluid">
                <h1>
                    Hi I'am Todo App.
                </h1>
                <TodoList onDelete={this.handleDeleteTodo} todoList={this.state.todoList}/>
                <TodoForm onTodoSubmit={this.handleTodoSubmit}/>
            </div>
        );
    }
});
