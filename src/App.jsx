import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'




function Header() {
  return(
      <div className="header">
          <img className="me" src="./headshot.jpg"/>
          <h1>Gracelyn Prajna</h1>
          <h4>Aspiring Web Developer</h4>
          <span><a href="#">gracelynprajna@gmail.com</a></span>
          <div className="buttons">
              <button className="btn-email">Email</button>
              <button className="btn-github">Github</button>
          </div>    
      </div> 
  )
}

function About(){
  return(
    <div className='about'>
      <h4>About Me</h4>
      <p>I am currently a web development fellow at The Knowledge House perfecting my skill in HTML, CSS, Javascript, and React. I am always looking for new things to learn and how I can upskill.</p>
    </div>
  )
}

function Interests(){
  return(
    <div classname="interests">
      <h4>Interests</h4>
      <p>Other than looking for inspiration for my next projects, I enjoy trying new coffee shops, exploring different restaurants, and cooking.</p>
    </div>
  )
}


function Footer() {
  return(
      <div className="footer">
      <img src=""/>
      </div>
  )
}


function App() {

  return (
    <div className="app">
      <Header/>
      <About/>
      <Interests/>
      <Footer/>
    </div>
  )
}



export default App
