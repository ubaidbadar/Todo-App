import React, { Component } from 'react';
import './Select.css'

class Select extends Component {
    state = {
        className: ''
    }
    render() {
        return (
            <div className='SelectMain'>
                <label className={'input-field ' + this.state.className + ' select'} ref='input'>
                    {<p>{this.props.label}</p>}
                    <div className='dropIcon'></div>
                    <input type='text' value={this.props.value}
                        onFocus={this.onFocus}
                        onBlur={this.onBlur}
                        onChange={() => { }}
                    />
                </label>
                <div className='SelectOptions'>
                    {this.props.children} sdkjdk
                </div>
            </div>
        )
    }
    onFocus = () => {
        this.setState({ className: 'inputFocus' })
    }
    onBlur = (event) => {
        event.target.value !== '' ? this.setState({ className: 'inputBlur' }) : this.setState({ className: 'inputDanger' })
    }
    callBack = () => {
        this.setState({ className: 'inputDanger' })
    }
    componentDidMount() {
        this.props.elm({ key: this.props.ki, cb: this.callBack })
    }
}

export default Select;