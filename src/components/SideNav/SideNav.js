import React, { useState, Fragment } from 'react';
import './SideNav.css';
import { NavLink } from 'react-router-dom'

const SideNav = () => {
    const [open, setOpen] = useState(false);
    return (
        <Fragment>
            <button className="menu" onClick={() => { setOpen(!open) }} onBlur={() => { setOpen(false) }}>
                <span className={open ? 'halfLine' : ''}></span>
                <span></span>
                <span className={open ? 'halfLine' : ''}></span>
            </button>
            <nav className={open ? 'openNav' : ''}>
                <h3>Project To-Do</h3>
                <NavLink exact to='/'><i className="material-icons">settings</i> My Day</NavLink>
                <NavLink to='/important'><i className="material-icons">star</i> Important</NavLink>
                <NavLink to='/tasks'><i className="material-icons">work</i> Tasks</NavLink>
            </nav>
        </Fragment>
    )
}

export default SideNav;