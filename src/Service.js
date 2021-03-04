import React, { Component } from 'react'
import './Service.css'
import {  Redirect } from 'react-router-dom'

export default class Service extends Component {
    constructor(props){
        super(props)
        const token = localStorage.getItem("token")
    
        let loggedIn = true
        if(token == null){
            loggedIn =false
        }
        
        this.state ={
            loggedIn
        }
      
    }
    
    render() {
        if(this.state.loggedIn === false){
            return <Redirect to="/Login" />
        }

        return (
            <div>
                <h1>h</h1>
            </div>
        )
    }
}
