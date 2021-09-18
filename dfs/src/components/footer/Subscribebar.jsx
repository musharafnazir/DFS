import React from 'react'
import "./subscribeBar.css"

function Subscribebar() {
    return (
        <div className="subscribeContainer">
            <div className="subscribeWrapper">
                <div className="subscribeLeft">
                    <h2>Subscribe to our newsletter</h2>
                    <p>Be the first to know about our latest offers, new products and the latest trends​.</p>
                </div>
                <div className="subscribeRight">
                    <form className="emailForm">
                        <input  type="email" placeholder="enter email address"/>
                        <button type="submit">Submit</button>
                    </form>
                    <p className="privacyNotice">Please find our privacy notice <a className="privacyNoticeLink" href="https://www.dfs.co.uk/content/data-protection">here</a>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Subscribebar
