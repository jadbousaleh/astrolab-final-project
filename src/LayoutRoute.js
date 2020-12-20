import { colors } from '@material-ui/core';
import React from 'react';
import { Route, Link } from 'react-router-dom';
import NavBar from './NavBar';
import CopyrightIcon from '@material-ui/icons/Copyright';

const LayoutRoute = (props) => {
    return (

        <React.Fragment>
            <NavBar navLabel="Publisher Views" extraComponent={
                <React.Fragment>
                <Link to="/login" className="btn btn-dark">Sign In</Link>
                <Link to="/register" className="btn btn-dark">Register</Link>
                </React.Fragment>
            }>
            <Link to="/" className="btn btn-dark">Home</Link>
            <Link to="/about" className="btn btn-dark">About</Link>
            <Link to="#" className="btn btn-dark">Contact</Link>
            </NavBar>

            <Route path={props.path} exact={props.exact} component={props.component}
            />


            <NavBar extraComponent={
                <React.Fragment>
                <CopyrightIcon/> 2020
                </React.Fragment>
            }>
            <Link to="/" className="btn btn-dark">Home</Link>
            <Link to="/about" className="btn btn-dark">About</Link>
            <Link to="#" className="btn btn-dark">Contact</Link>
            </NavBar>


        </React.Fragment>
    )
}

export default LayoutRoute;