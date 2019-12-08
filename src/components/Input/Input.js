import React, { Component } from 'react';
import './Input.css';

class Input extends Component {
    state = {
        className: ''
    }
    onChange = (event) => {
        this.props.change(event, this.props.ki)
    }
    render() {
        let type = 'text';
        let className = ''
        if(this.props.type === 'date'){
            type = this.props.type;
            className = 'dateClass'
        }
        return (
            <label className={ className + ' input-field ' + this.state.className} ref='input'>
                {<p>{this.props.label}</p>}
                <input type={type}
                    value={this.props.value}
                    onFocus={this.onFocus}
                    onBlur={this.onBlur}
                    onChange={this.onChange}
                />
            </label>
        )
    }
    onFocus = () => {
        this.setState({ className: 'inputFocus' })
    }
    onBlur = (event) => {
        event.target.value !== '' ? this.setState({ className: 'inputBlur' }) : this.setState({ className: 'inputDanger' })
    }
    callBack = (className = 'inputDanger') => {
        this.setState({ className: className })
    }
    componentDidMount() {
        this.props.elm({ key: this.props.ki, cb: this.callBack })
        this.props.value && this.onFocus();
    }
    i = 0
    componentDidUpdate() {
        if (this.i === 0 && this.props.value !== '') {
            this.setState({ className: 'inputBlur' });
            this.i++;
        }
    }
}

export default Input;