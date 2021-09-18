import React from 'react'
import './middleBottom.css'
import star from "./middleSectionAssets/star.png"
import starBar from "./middleSectionAssets/starBar.png"

function Middlebottom() {
    return (
        <div className="middleBottomWrapper">
           <div className="midddleBottomContainer">
               <h2>Take 4 years free credit</h2>
               <h3>No deposit, no interest - ever!</h3>
               <h4>0% APR representative</h4>
           </div>
           <div className="midddleBottomContainer">
               <h3 className="star"><img  src={star} alt="star"/>Trustpilot</h3>
               <img className="starBar" src={starBar} alt="star rating"/>
               <ul className="ratingContainer">
                   <li><p>TrustScore <strong>4.7</strong></p></li>
                   <li><p><strong>134,168</strong> reviews</p></li>
               </ul>
           </div>
           <div className="midddleBottomContainer">
               <h2>Save time - order direct</h2>
               <h3>Call free on 0808 149 5880</h3>
               <h4>Lines open 8am - 11pm</h4>
           </div>
        </div>
    )
}

export default Middlebottom
