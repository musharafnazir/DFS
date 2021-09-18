import React from 'react'
import "./lowerFooter.css"

function Lowerfooter() {
    return (
        <div className="lowerFooterContainer">
            <div className="lowerFooterWrapper">
                <ul className="footerLinks">
                    <li>@DFS 2021</li>
                    <li><a href="https://www.dfs.co.uk/content/cookies">Cookie Policy</a></li>
                    <li><a href="https://www.dfs.co.uk/content/terms-and-conditions">Terms and Conditions</a></li>
                    <li><a href="https://www.dfs.co.uk/content/data-protection">Privacy Policy</a></li>
                    <li><a href="https://www.dfs.co.uk/content/sitemap">Site Map</a></li>
                    <li><a href="#">Cookie Settings</a></li>
                </ul>
         
                <form>
                    <select className="selectCountry">
                        <option value="default">Choose your country</option>
                        <option className="irelandFlag" value="https://www.dfs.ie">Ireland</option>
                        <option value="https://www.dfs-banken.nl">Netherlands</option>
                        <option value="https://www.dfsspain.com">Spain</option>
                        <option value="#" selected="selected">United Kingdom</option>
                    </select>
                </form>
            </div>
        </div>
    )
}

export default Lowerfooter
