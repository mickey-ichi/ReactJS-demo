var TodoList = React.createClass({


    onDelete : function(todo) {
        this.props.todoList.splice(this.props.todoList.indexOf(todo), 1);
        this.props.onDelete(this.props.todoList);
    },

    render: function () {

        var todoList = this.props.todoList.map(function (todo) {
            return (
                <Todo key={todo.id} todo={todo} onDelete={this.onDelete}/>
            );
        }, this);

        return (
            <div className="commentList">
                {todoList}
            </div>
        );
    }
});

var Todo = React.createClass({

    handleDelete: function (event) {
        this.props.onDelete(
            this.props.todo
        );
    },
    render: function () {
        return (
            <div>
                <div className="checkbox">
                    <label>
                        <span>{this.props.todo.name}</span>
                    </label>
                    <button className="btn btn-danger btn-xs margin-left-10"
                            onClick={this.handleDelete} type="button">Delete</button>
                </div>
            </div>
        );
    }

});

module.exports  = TodoList;