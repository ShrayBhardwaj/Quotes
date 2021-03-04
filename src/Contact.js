import React, { Component } from 'react'
import './Contact.css'
import {  Redirect } from 'react-router-dom'

export default class Contact extends Component {
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
                      <h1>This is heading 1</h1>
<p>This is some text.</p>
<hr />
            </div>
        )
    }
}
