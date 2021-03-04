import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Logout.css'

export default class Logout extends Component {
    constructor(props){
        super(props)
        localStorage.removeItem("token")
    }
    render() {
        return (
            <div>
              <h1>
                  logout
                  </h1>
                  <Link to="/Login">
                      Login again
                      </Link> 
            </div>
        )
    }
}