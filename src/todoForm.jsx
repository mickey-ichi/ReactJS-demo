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
