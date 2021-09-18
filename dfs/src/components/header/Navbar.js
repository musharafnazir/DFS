import React from 'react'
import "./navBar.css"


function Navbar() {
    return (
        <div className="navWrapper">
            <nav className="navBar">
                <a className="offerClearence" href="https://www.dfs.co.uk/offers/all-offers"><span>Offers</span></a>
                <a href="https://www.dfs.co.uk/fabric-sofas/all-fabric-sofas"><span>Fabric Sofas</span></a>
                <a href="https://www.dfs.co.uk/leather-sofas/all-leather-sofas"><span>Leather Sofas</span></a>
                <a href="https://www.dfs.co.uk/corner-sofas/all-corner-sofas"><span>Corner Sofas</span></a>
                <a href="https://www.dfs.co.uk/recliner-sofas/all-recliner-sofas"><span>Recliners</span></a>
                <a href="https://www.dfs.co.uk/sofa-beds/all-sofa-beds"><span>Sofa Beds</span></a>
                <a href="https://www.dfs.co.uk/beds-and-mattresses/beds"><span className="bedAndMatt">Beds and Mattresses</span></a>
                <a href="https://www.dfs.co.uk/furniture/dining-tables-and-chairs"><span>Furniture</span></a>
                <a href="https://www.dfs.co.uk/home-accessories/chairs"><span>Accessories</span></a>
                <a className="offerClearence" href="https://www.dfs.co.uk/clearance/all-clearance"><span>Clearance</span></a>
                <a href="https://www.dfs.co.uk/content/inspiration"><span>Help</span></a>
            </nav>
        </div>
    )
}

export default Navbar
