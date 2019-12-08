import React, { Component } from 'react';
import './Home.css';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import todoCompletedAction from '../../actions/todoCompletedAction';
import deleteTodoAction from '../../actions/deleteTodoAction';
import importantTodoAction from '../../actions/importantTodoAction';

class Home extends Component {
    state = {
        todos: [],
        title: ''
    }
    importantTodoHandler = (id) => {
        this.props.dispatch(importantTodoAction(id));
        const todos = this.state.todos.slice();
        const path = this.props.location.pathname;
        if (path === '/' || path === '/tasks') {
            this.setState({ todos: todos });
        }
        else if (path === '/important') {
            const importantTodos = todos.filter(todo => todo.important);
            this.setState({ todos: importantTodos });
        }
    }
    render() {
        return (
            <div className='home'>
                <Link to='/add' className="addBtn material-icons">add</Link>
                <header>
                    <h1>{this.state.title}</h1>
                    <h3>Today</h3>
                </header>

                {this.state.todos.map((todo, index) => {
                    let checked = '';
                    todo.completed ? checked = 'checked' : checked = 'check';
                    const expiresIn = (new Date(todo.expiresIn).getTime() - new Date().getTime()) / 3600000;
                    let expiresInClass;
                    expiresIn <= 12 && !todo.completed ? expiresInClass = 'expiresIn' : expiresInClass = '';
                    return (
                        <div className={'todoBox ' + expiresInClass} key={index}>
                            <i className='material-icons star' onClick={() => { this.importantTodoHandler(todo.id) }}>{todo.important ? 'star' : 'star_border'}</i>
                            <div className='todoTitle' onClick={() => { this.todoCompletationHandler(todo.id) }}>
                                <i className={'material-icons ' + checked}>check</i>
                                {todo.title}
                            </div>
                            <div className='actions'>
                                <Link to={'/view/' + todo.id} className="material-icons green">remove_red_eye</Link>
                                <Link to={'/edit/' + todo.id} className="material-icons marginLR grey">edit</Link>
                                <div className="material-icons red" onClick={() => { this.deleteTodo(todo.id) }}>delete</div>
                            </div>
                        </div>
                    )
                })}
            </div>
        )
    }
    componentDidMount() {
        this.setData(this.props.location.pathname)
    }
    shouldComponentUpdate(nxtProps, nxtState) {
        if (nxtProps !== this.props || nxtState !== this.state) {
            if (nxtProps.location.pathname !== this.props.location.pathname) {
                this.setData(nxtProps.location.pathname);
            }
            return true;
        }
    }
    deleteTodo = (id) => {
        let i;
        const todos = this.state.todos.slice();
        this.props.allTodos.find((todo, index) => {
            i = index;
            return todo.id === id;
        })
        this.props.dispatch(deleteTodoAction(i));
        todos.splice(i, 1);
        this.setState({ todos: todos });
    }
    todoCompletationHandler = (id) => {
        this.props.dispatch(todoCompletedAction(id));
        const todos = this.state.todos.slice();
        const path = this.props.location.pathname;
        if (path === '/' || path === '/important') {
            this.setState({ todos: todos });
        }
        else if (path === '/tasks') {
            const tasks = todos.filter(todo => !todo.completed);
            this.setState({ todos: tasks });
        }
    }
    setData = (path) => {
        const todos = this.props.allTodos;
        if (path === '/') {
            this.setState({ todos: todos, title: 'My Day' });
        }
        else if (path === '/important') {
            const importants = todos.filter(todo => todo.important);
            this.setState({ todos: importants, title: 'Important' })
        }
        else if (path === '/tasks') {
            const remainings = todos.filter(todo => !todo.completed);
            this.setState({ todos: remainings, title: 'Tasks' })
        }
    }
}

const mapStateToProps = (store) => {
    return {
        allTodos: store.allTodos
    }
}

export default connect(mapStateToProps)(Home);