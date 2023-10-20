import React from 'react'
import './App.css'

function App() {
  return (
    <>
    <div className='background'>
      <div className='navbar'>
        <h2>Real Estate</h2>
        <ul>
          <li><a href="">Home</a></li>
          <li><a href="">About</a></li>
          <li><a href="">Type of house</a></li>
          <li><a href="">Contact</a></li>
        </ul>
        <button><a href="">Login</a></button>
      </div>
      <div className="text">
            <h1>Find Real Estate </h1>
            <h1>That Suits You.</h1>
            <p>We provides a complete service for the sale,</p> 
            <p>purchase or rental of real estate</p>
           </div>
      
      
       <div className="sbox">
        <div className="small">
            <h3>250+</h3>
            <p>Google Reviews</p>
        </div>
        <div className="small">
            <h3>12+</h3>
            <p>Your Experience</p>
        </div>
        <div className="small">
            <h3>50+</h3>
            <p>Winning Awards</p>
        </div>
       </div>
    </div>
    <div className="line">
        <div className="first">
            {/* <i class="fa-solid fa-globe"></i> */}
            <p>Location</p>
            <h4>Faizalabad,</h4>
              <h4> Pakistan</h4>
        </div>
        <div className="second">
            {/* <i class="fa-solid fa-house"></i> */}
            <p>Property Type</p>
            <h4>Delux</h4>
            
        </div>
        <div className="third">
            {/* <i class="fa-solid fa-tag"></i> */}
            <p>Average Price</p>
            <h4>$5000/7000</h4>
            
        </div>
        <button><a href="">Search</a></button>
    </div>
    </>
  )
}

export default App
