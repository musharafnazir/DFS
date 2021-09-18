import React from 'react'
import "./contactSection.css"

function Contactsection() {
    return (
        <div className="contactSectionContainer">
            <div className="contactWrapper">
              <ul>
                <li>Contact</li>
                <li><a href="https://www.dfs.co.uk/content/talk-to-an-advisor">Talk to an Advisor</a></li>	
				<li><a href="//www.dfs.co.uk/store-directory">Store Directory</a></li>	
				<li><a href="//www.dfs.co.uk/shop/StoreLocatorDefaultCmd?storeId=10202&amp;pageType=CC&amp;departmentId=14543&amp;urlRequestType=Base&amp;categoryId=28505&amp;catalogId=10101&amp;langId=-1">Store Locator</a></li>	
				<li><a href="https://www.dfs.co.uk/content/faqs">Contact Us</a></li>	
			  </ul>
              <ul>
                <li>About</li>
                <li><a href="#">About DFS</a></li>
                <li><a href="#">Testimonials</a></li>
                <li><a href="#">Investor Relations</a></li>
                <li><a href="#">Community Partnerships</a></li>
                <li><a href="#">Timber Sourcing Policy</a></li>
                <li><a href="#">Leather Sourcing Policy</a></li>
                <li><a href="#">Modern Slavery Statement</a></li>
              </ul>
              <ul>
                <li>Careers</li>
                <li><a href="#">Why Join DFS?</a></li>
                <li><a href="#">Jobs</a></li>
                <li><a href="#">Our Culture</a></li>
                <li><a href="#">Meet the People</a></li>
                <li><a href="#">Pay with Benefits</a></li>
                <li><a href="#">How to Apply</a></li>
              </ul>
              <ul>
                <li>Customer Service</li>
			    <li><a href="/content/inspiration">Inspiration &amp; Help</a></li>	
				<li><a href="www.dfs.co.uk/trackmyorder">Track Your Order</a></li>
                <li><a href="https://www.dfs.co.uk/content/finance">4 Years Interest Free Credit</a></li>
              </ul>
            </div>
        </div>
    )
}

export default Contactsection
