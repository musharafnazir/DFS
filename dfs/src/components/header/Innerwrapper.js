import React from 'react'
import cameraIcon from './headerAssets/cameraIcon.jpeg'
import basket from './headerAssets/basket.png'
import "./innerwrapper.css"

function Innerwrapper() {
return (<div className="wrapper">
            <div className="logo">
                <a href="https://www.dfs.co.uk/">
                    <img src={"https://www.dfs.co.uk/wcsstore/DFSStorefrontAssetStore/FE/images/dfs_logo.svg"} alt="DFS Logo"/>
                </a> 
            </div>
            <div className="wrapperright">
            <div className= "inputSearch">
                <input type="text" placeHolder="Search for products & inspiration" name="searchKeys"/>
                <button type="submit"/>
            </div>
            <div className= "innerWrapperImg">
                <a href="#"><img src={cameraIcon} alt="Search by Touta"/></a>
            </div>
            <div className="contact">
                    <h2>Save Time - order direct</h2>
                    <p>Call free <span>0808 231 7216</span> 8am - 11pm</p>
            </div>
            <div className="callBackButton">
                    <button>Request a call back</button>
            </div>
            <div className= "basket">
                    <a href="#" ><img src={basket} alt="basket" /></a>
                    <p>£ <span>0.00</span></p>
            </div>
            </div>
    </div>)
}

export default Innerwrapper
