import React from 'react'
import Products from './Products'
import Middlebottom from './Middlebottom'
import "./middleSection.css"


function Middilesection() {
    return (<div>
            <div className="filterBarWrapper">
                <div className="filterSortBar">
                    <button className="filter">Filter</button>
                    <button className="sort">Sort by</button>
                </div>
            </div>
            <Products />
            <p className="endOfResults">END OF RESULTS</p>
            <Middlebottom />
            </div>
            
    )
}

export default Middilesection
