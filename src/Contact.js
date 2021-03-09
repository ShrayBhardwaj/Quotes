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
            <div className="contactus">
          <h3> Expanding Minds Daily</h3>
          <hr />
          <br />
            <p>
This is the largest, most user-friendly quotation site on the web. We are a quality educational resource and provide free access to our extensive database of prominent historical figures and today's newsmakers - famous celebrities, athletes, politicians, authors and other public figures.
Our content, combined with its ease of use and ease of access, makes the world of quotations simple and fun. 
We attract students, writers, journalists, media professionals and quote-lovers of all ages. 
our other sites are free services, 
supported by ad revenue generated from ads that appear on our sites.
</p>
            <hr />
            <br />
            <h3>Contact-Us</h3>
            <br />
            <p>
                9023689908<br />
                shray2037@gmail.com <br />

            </p>
            <img className="contactpage" src="https://www.ledger.in/media/images/contact-banner.jpg">
                    
                </img>
            </div>
        )
    }
}
