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
            <div className="img">
				<div class="container">
	<div class="card">
	<h2>Oscar Wilde</h2>
	<img src="https://i.guim.co.uk/img/media/7a770bbbaaf6ca9d56022829c6d31977b1d6f646/0_261_2520_1511/master/2520.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=db925f9d71adde000f2fff5aca7ffb3e" />
	<p>“Be yourself; everyone else is already taken.” </p>
	<a href="#">Know More</a>
	<div class="flip">
		<ul>
			<li><a href="#">“You don’t love someone for their looks, or their clothes, or for their fancy car, but because they sing a song only you can hear.” </a></li>
			<li><a href="#">“Keep love in your heart. A life without it is like a sunless garden when the flowers are dead.” </a></li>
			<li><a href="#">“Who, being loved, is poor?” </a></li>
			<li><a href="#">“The very essence of romance is uncertainty.” </a></li>
		</ul>
	</div>
</div>
<div class="card">
	<h2> Marcus Tullius Cicero</h2>
	<img src="https://i2.wp.com/www.pilloledistoria.it/wp-content/uploads/2017/03/tullio-cicerone-750x585.jpg?fit=750%2C585&ssl=1" />
	<p>“A room without books is like a body without a soul.” </p>
	<a href="#">Know More</a>
	<div class="flip">
		<ul>
			<li><a href="#">“Within the character of the citizen, lies the welfare of the nation.”</a></li>
			<li><a href="#">“When you have no basis for an argument, abuse the plaintiff.”</a></li>
			<li><a href="#">“If I had more time, I would have written a shorter letter.”</a></li>
			<li><a href="#">“What society does to its children, so will its children do to society.”</a></li>
		</ul>
	</div>
</div>

<div class="card">
	<h2>Mae West</h2>
	<img src="https://s3.amazonaws.com/criterion-production/editorial_content_posts/hero/7212-/9vc9IQ9l9CDm8Q2Yu4JArRVIpjGSEq_original.jpg" />
	<p>“You only live once, but if you do it right, once is enough.” </p>
	<a href="#">Know More</a>
	<div class="flip">
		<ul>
			<li><a href="#">“You only live once, but if you do it right, once is enough.”</a></li>
			<li><a href="#">“There are no good girls gone wrong - just bad girls found out.”</a></li>
			<li><a href="#">“I generally avoid temptation unless I can't resist it.”</a></li>
			<li><a href="#">“Every man I meet wants to protect me. I can't figure out what from.”</a></li>
		</ul>
	</div>
</div>


{/*<div class="card">
	<h2>UX Consultant</h2>
	<img src="https://picsum.photos/200" />
	<p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. </p>
	<a href="#">Know More</a>
	<div class="flip">
		<h2>Follow me<br />on Social Channels</h2>
		<ul>
			<li><a href="#">Facebook</a></li>
			<li><a href="#">Twitter</a></li>
			<li><a href="#">Instagram</a></li>
			<li><a href="#">LinkedIn</a></li>
			<li><a href="#">Github</a></li>
		</ul>
	</div>
</div> */}


<div class="card">
	<h2> Albert Einstein</h2>
	<img src="https://cdn.britannica.com/s:900x675,c:crop/59/23359-131-42CFFC3D/Albert-Einstein.jpg" />
	<p>“Few are those who see with their own eyes and feel with their own hearts.”  </p>
	<a href="#">Know More</a>
	<div class="flip">
		<ul>
			<li><a href="#">“Unthinking respect for authority is the greatest enemy of truth.” </a></li>
			<li><a href="#">“Try not to become a man of success, but rather try to become a man of value.” </a></li>
			<li><a href="#">“All religions, arts and sciences are branches of the same tree. </a></li>
			<li><a href="#">“The most beautiful experience we can have is the mysterious.” </a></li>
		</ul>
	</div>
</div>

<div class="card">
	<h2>Mahatma gandhi</h2>
	<img src="https://www.welt.de/img/debatte/die-welt-in-worten/mobile101961056/3282508917-ci102l-w1024/ghandi-DW-Vermischtes-Hamburg-jpg.jpg" />
	<p>“Live as if you were to die tomorrow. Learn as if you were to live forever.” </p>
	<a href="#">Know More</a>
	<div class="flip">
		<ul>
		   	<li><a href="#">“It is better to be hated for what you are than to be loved for what you are not.”</a></li>
			<li><a href="#">“A man is but a product of his thoughts. What he thinks he becomes.”</a></li>
			<li><a href="#">“Nobody can hurt me without my permission.”</a></li>
			<li><a href="#">“Happiness is when what you think, what you say, and what you do are in harmony.”</a></li>
		</ul>
	</div>
</div>                               
</div>
			</div>
        )
    }
}
