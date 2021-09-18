import React from 'react';
import './topBar.css'
import roomplanner from './headerAssets/roomplanner.png';
import deliveryIcon from './headerAssets/deliveryIcon.png';
import locator from './headerAssets/locator.png'
import shortlist from './headerAssets/shortlist.png'
import login from './headerAssets/login.png'

function Topbar() {
    return (
        <div className="topbarWrapper">
            <ul className="topbarList">
                <li className="topbarListItem"><a href="https://www.dfs.co.uk/content/room-planner"><img src={roomplanner} alt="Room placer" />Room Planner</a></li> 
                <li className="topbarListItem"><a href="https://www.dfs.co.uk/trackmyorder"><img src={deliveryIcon} alt="delivery Icon" />Track My Order</a></li>
                <li className="topbarListItem"><a href="https://www.dfs.co.uk/corner-sofas/all-corner-sofas/q/sort/prod_v9_prod_uk_products_priceSort/p/14#storeLocator"><img src={locator} alt="store locator" />Store Locator</a></li>
                <li className="topbarListItem"><a href="https://www.dfs.co.uk/register"><img src={shortlist} alt="short list"/>Shortlist</a></li>
                <li className="topbarListItem"><a href="https://www.dfs.co.uk/register"><img src={login} alt="login"/>My Account</a></li>
            </ul>    
   
        </div>
    )
}

export default Topbar
