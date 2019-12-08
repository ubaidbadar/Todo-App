import React, { Component } from 'react';
import './EditCreate.css'
import Input from '../Input/Input';
import { connect } from 'react-redux';
import addTodoAction from '../../actions/addTodoAction';
import editTodoAction from '../../actions/editTodoAction';

class EditCreate extends Component {
    state = {
        editMode: false,
        title: '',
        loc: '',
        desc: '',
        expiresIn: '',
        alert: '',
        success: false,
    }
    onSubmit() {
        const todo = {
            title: this.state.title,
            loc: this.state.loc,
            desc: this.state.desc,
            expiresIn: this.state.expiresIn,
            important: false,
            completed: false,
            id: Math.random().toString(),
        }
        if (this.state.editMode) {

            this.props.dispatch(editTodoAction({ index: this.index, todo: todo }));
            this.props.history.push('/');
            return true;
        }
        this.props.dispatch(addTodoAction(todo));
        this.setState({ title: '', loc: '', desc: '', expiresIn: '', alert: '', success: true });
        for (let elm of this.elms) {
            elm.cb('');
        }
        setTimeout(() => {
            this.setState({ success: false });
        }, 1500);
    }
    render() {
        return (
            <div className='EditCreate'>
                <header>
                    <h1>{this.state.editMode ? 'Edit Existing' : 'Add New'}</h1>
                    <h3>Todo</h3>
                </header>
                {this.state.success && <p className='successMessage'>Your Todo has been Saved</p>}
                <form action='/' onSubmit={this.validation} className='card'>
                <h1>{this.state.editMode ? 'Edit Existing' : 'Add New'} Todo</h1>
                    <Input label='Title' change={this.getValue} ki="title" value={this.state.title} elm={this.getElements} />
                    <Input label='Location' change={this.getValue} ki="loc" value={this.state.loc} elm={this.getElements} />
                    <Input label='Description' change={this.getValue} ki="desc" value={this.state.desc} elm={this.getElements} />
                    <Input label='Expires In' change={this.getValue} type='date' ki="expiresIn" value={this.state.expiresIn} elm={this.getElements} />
                    {this.state.alert !== '' && <p className='alert'>{this.state.alert}</p>}
                    <button className='btn'>{this.state.editMode ? 'Edit' : 'Create'} Todo</button>
                </form>
            </div>
        )
    }
    elms = [];
    getElements = (elm) => {
        this.elms.push(elm);
    }
    getValue = (event, key) => {
        if (key === 'expiresIn') {
            this.setState({ expiresIn: event.target.value });
            return true
        }
        this.setState({ [key]: event.target.value });
    }
    validation = (e) => {
        e.preventDefault()
        let check = true;
        for (let elm of this.elms) {
            if (this.state[elm.key] === '') {
                elm.cb();
                check = false;
                this.setState({ alert: 'Please fill all the fields' })
            }
            if (elm.key === 'expiresIn' && this.state.expiresIn !== '') {
                if (new Date(this.state.expiresIn).getTime() < new Date().getTime()) {
                    elm.cb();
                    check = false;
                    this.setState({ alert: 'Please select a future date' });
                }
            }
        }
        check && this.onSubmit()
    }
    index = 0
    componentDidMount() {
        const id = this.props.match.params.id;
        if (id) {
            const todo = this.props.allTodos.find((td, index) => {
                this.index = index;
                return td.id === id
            });
            if (todo) {
                this.setState({ title: todo.title, editMode: true, desc: todo.desc, loc: todo.loc, expiresIn: todo.expiresIn });
            } else {
                this.props.history.push('/');
            }
        }
    }
}

const mapStateToProps = (store) => {
    return {
        allTodos: store.allTodos
    }
}

export default connect(mapStateToProps)(EditCreate);