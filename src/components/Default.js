import React, { Component } from 'react'
import { Link } from "react-router-dom"
import {ButtonContainer} from "./Button"

export default class Default extends Component {
    render() {
        return (
            <div className="container">
            <div className="row">
            <div className="col-10 mx-auto text-title text-center text-uppercase pt-5">
                <h1 className="display-3"> 404</h1>
                <h1>error</h1>
                <h2>page not found</h2>
                <h4>the url you requested<span className="text-danger">
                    {this.props.location.pathname}
                </span> {" "}is invalid,wrong or does not exist</h4>
                <Link to="/">
                    <ButtonContainer className="text-capitalize">
                        <span><i className='fas fa-cart-plus'></i></span>
                        back to store
                    </ButtonContainer>
                </Link> 
            </div>                
            </div>               
            </div>
        )
    }
}