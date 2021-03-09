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
                 <img className="aboutpage" src="https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHw%3D&w=1000&q=80">

                 </img>

                 <h3 className="h3about">Site</h3>
                 <p className="pabout">This site is used to increase your knowledge and this quotes is gonna change your life
                 <br /> This quotes is help to put out your depression and Depression is unfocused self-pity. </p>
                
            </div>
        )
    }
}
