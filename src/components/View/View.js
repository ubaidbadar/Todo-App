import React, { Component, Fragment } from 'react';
import './View.css';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class View extends Component {
    state = {}
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
                            <h1>{this.state.todo.title} Todo</h1>
                            <div className='basicInfo'>
                                <table>
                                    <thead>
                                        <tr>
                                            <th>Status</th>
                                            <th>Important</th>
                                            <th>Expiry Date</th>
                                            <th>Expires In</th>
                                            <th className='location'>Location</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>{this.state.todo.completed ? 'Completed' : 'Incomplete'}</td>
                                            <td>{this.state.todo.important ? 'Yes' : 'No'}</td>
                                            <td>{this.state.expDate}</td>
                                            <td className={this.state.className}>{this.state.expiresIn}</td>
                                            <td>{this.state.todo.loc}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
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
        if (todo) {
            const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
            const exDate = new Date(todo.expiresIn);

            let date = exDate.getDate().toString();
            if (date.length < 2) {
                date = 0 + date
            }
            const expDate = months[exDate.getMonth()] + ' ' + date + ', ' + exDate.getFullYear();

            let className = ''
            let expiresIn = (exDate.getTime() - new Date().getTime()) / 3600000;
            
            if (expiresIn < 12 && expiresIn > 0 && !todo.completed) {
                className = 'expiring'
            }
            else if (expiresIn < 0 && !todo.completed) {
                className = 'expired'
            }

            if (expiresIn < 0) {
                expiresIn = '0 hour';
            }
            else if (expiresIn > 0 && expiresIn < 1) {
                expiresIn = 'Less than 1 hour'
            }
            else if (expiresIn < 2) {
                expiresIn = expiresIn.toFixed() + ' hour';
            }
            else {
                expiresIn = expiresIn.toFixed() + ' hours'
            }
            this.setState({ todo: todo, expDate: expDate, expiresIn: expiresIn, className: className });
        } else {
            this.props.history.push('/')
        }
    }
}

const mapStateToProps = (store) => {
    return {
        allTodos: store.allTodos
    }
}

export default connect(mapStateToProps)(View);