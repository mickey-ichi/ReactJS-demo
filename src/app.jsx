
var TodoList = React.createClass({
    render: function () {

        var todoList = this.props.todoList.map(function (todo) {
            return (
                <Todo name={todo.name} key={todo.id}/>
            );
        });

        return (
            <div className="commentList">
                {todoList}
            </div>
        );
    }
});

var Todo = React.createClass({

    render: function () {
        return (
            <div>
                <div className="checkbox">
                    <label>
                        <input type="checkbox"/>
                        <span>{this.props.name}</span>
                    </label>
                    <button className="btn btn-danger btn-xs margin-left-10" type="button">Delete</button>
                </div>
            </div>
        );
    }

});

var TodoForm = React.createClass({

    getInitialState: function () {
        return {
            name: ''
        };
    },

    handleNameChange: function (e) {
        this.setState(
            {
                name: e.target.value
            }
        );
    },

    handleTodoSubmit: function (e) {
        e.preventDefault();

        var name = this.state.name.trim();

        if (!name) {
            return;
        }
        this.props.onTodoSubmit(
            {
                id: Date.now(),
                name: name
            }
        );

        this.setState({name: ''});

    },

    render: function () {
        return (
            <form onSubmit={this.handleTodoSubmit}>
                <div className="form-inline">
                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="To do" value={this.state.name}
                               onChange={this.handleNameChange}/>
                    </div>
                    <button className="btn btn-primary margin-left-10" type="submit">Add</button>
                </div>
                <h3>{this.state.name}</h3>
            </form>
        );
    }
});

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

    render: function () {
        return (
            <div className="container-fluid">
                <h1>
                    Hi I'am Todo App.
                </h1>
                <TodoList todoList={this.state.todoList}/>
                <TodoForm onTodoSubmit={this.handleTodoSubmit}/>
            </div>
        );
    }
});

ReactDOM.render(
    <TodoApp promise={$.getJSON('api/todos.json')}/>,
    document.getElementById('example')
);