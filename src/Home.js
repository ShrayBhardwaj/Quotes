import React, { Component } from 'react'
import './Home.css'
import { Link, Redirect } from 'react-router-dom'

export default class Home extends Component {
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
         
                <div className="home" >
                    <img className="img" src="https://images.ctfassets.net/hrltx12pl8hq/4plHDVeTkWuFMihxQnzBSb/aea2f06d675c3d710d095306e377382f/shutterstock_554314555_copy.jpg"  alt="Quotes">
                    
                    </img>
                <h1 className="h1">Quotes</h1>
                <div className="para">
                <p className="p">
                "Life brings us as many joyful moments as it does downfalls,
                 and although there are days we wish there was a manual to follow, 
                 it simply wouldn’t be the same without the spontaneity. 
                 The journey of life may not become easier as we grow older,
                  but we do seem to understand it better as our perspectives evolve. 
                  Whether you’re embarking on a new adventure right out of school or you want to explore different paths 
                  in your personal life, it’s never too late to change what the future looks like."
        
                </p>
                <p className="p2">
                “I've learned that people will forget what you said, 
                people will forget what you did, but people will never forget 
                how you made them feel.”
                </p>
                <p className="p3">
                “I believe that everything happens for a reason. 
                People change so that you can learn to let go, 
                things go wrong so that you appreciate them when they're right, 
                you believe lies so you eventually learn to trust no one but yourself, 
                and sometimes good things fall apart so better things can fall together.”
                </p>
                </div>
                <Link className="logout_home" to="/logout">
                    Logout
                </Link>
        
                </div>
        )
    }
}
