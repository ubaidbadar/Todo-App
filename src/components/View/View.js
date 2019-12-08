import React, { Component, Fragment } from 'react';
import './View.css';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class View extends Component {
    state = {
        todo: undefined
    }
    render() {
        return (
            <Fragment>
                <Link to='/add' className="addBtn material-icons">add</Link>
                {this.state.todo &&
                    <div className='view'>
                        <header>
                            <h1>{this.state.todo.title}</h1>
                            <h3>Todo</h3>
                        </header>
                        <div className='card'>
                            <h1>{this.state.todo.title}</h1>
                            <div className='basicInfo'>
                                <div>
                                    <h3>Status:</h3>
                                    {this.state.todo.completed ? 'Completed' : 'Incomplete'}
                                </div>
                                <div>
                                    <h3>Important:</h3>
                                    {this.state.todo.important ? 'Yes' : 'No'}
                                </div>
                                <div>
                                    <h3>Expires In:</h3>
                                    {this.state.todo.expiresIn}
                                </div>
                            </div>
                            <h3>Location:</h3>
                            {this.state.todo.loc}
                            <h3>Description:</h3>
                            {this.state.todo.desc}
                        </div>
                    </div>
                }
            </Fragment>
        )
    }
    componentDidMount() {
        const todo = this.props.allTodos.find(todo => todo.id === this.props.match.params.id)
        todo ? this.setState({ todo: todo }) : this.props.history.push('/');
    }
}

const mapStateToProps = (store) => {
    return {
        allTodos: store.allTodos
    }
}

export default connect(mapStateToProps)(View);