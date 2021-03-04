import React, { Component } from 'react'
import './About.css'
import {  Redirect } from 'react-router-dom'

export default class About extends Component {
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
                  <h1>hms</h1>
            </div>
        )
    }
}
