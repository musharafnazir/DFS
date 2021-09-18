import React from 'react'
import "./products.css"
import sofaOne from "./middleSectionAssets/sofaOne.jpeg"
import colourWheel from "./middleSectionAssets/colourWheel.png"
import sizes from "./middleSectionAssets/sizes.png"
import honey from "./middleSectionAssets/honey.jpeg"
import laze from "./middleSectionAssets/laze.jpeg"
import edd from "./middleSectionAssets/edd.jpeg"
import binky from "./middleSectionAssets/binky.jpeg"
import paulo from "./middleSectionAssets/paulo.jpeg"
function Products() {
    return (
        <div className="productWrapper">
            <div className="productContainer">
                <a href="https://www.dfs.co.uk/lulu/luu14emrp?origin=All_Corner_Sofas">
                    <img src={sofaOne} alt="sofa One"/>
                    <div className="colourSizes">
                     <p><img src={colourWheel} alt="More Colors"/>More colours avaliable</p>
                     <p><img src={sizes} alt="More sizes"/>More sizes avaliable</p>
                    </div>
                </a>
                <div className="productDetailsContainer">
                    <div className="pd-leftContainer">
                     <p className="detailHeader"><strong>LuLu</strong> Pillow Back 4 Seater Lounger</p>
                     <p className="productPrice">Only £699</p>
                     <p className="instalment"><span>£14.56</span> a monthfor 4 years</p>
                     <p className="instalment">0%APR - No deposit</p>
                    </div>
                    <div className="pd-rightContainer">
                      <a href="https://www.dfs.co.uk/lulu/luu14emrp?origin=All_Corner_Sofas">Find out more</a>
                      <button className= "addtoshortlist"><span className="heart"/>Add to shortlist</button> 
                    </div>
                </div>
            </div>
            <div className="productContainer">
                <a href="https://www.dfs.co.uk/honey/hoy14ehno?origin=All_Corner_Sofas">
                    <img src={honey} alt="sofa One"/>
                    <div className="colourSizes">
                     <p><img src={colourWheel} alt="More Colors"/>More colours avaliable</p>
                     <p><img src={sizes} alt="More sizes"/>More sizes avaliable</p>
                    </div>
                </a>
                <div className="productDetailsContainer">
                    <div className="pd-leftContainer">
                     <p className="detailHeader"><strong>Honey</strong> Pillow Back 4 Seater Lounger</p>
                     <p className="productPrice">Only £699</p>
                     <p className="instalment"><span>£14.56</span> a monthfor 4 years</p>
                     <p className="instalment">0%APR - No deposit</p>
                    </div>
                    <div className="pd-rightContainer">
                      <a href="https://www.dfs.co.uk/honey/hoy14ehno?origin=All_Corner_Sofas">Find out more</a>
                      <button className= "addtoshortlist"><span className="heart"/>Add to shortlist</button> 
                    </div>
                </div>
            </div>
            <div className="productContainer">
                <a href="https://www.dfs.co.uk/edd/edd13ewol?origin=All_Corner_Sofas">
                    <img src={laze} alt="sofa One"/>
                    <div className="colourSizes">
                     <p><img src={colourWheel} alt="More Colors"/>More colours avaliable</p>
                     <p><img src={sizes} alt="More sizes"/>More sizes avaliable</p>
                    </div>
                </a>
                <div className="productDetailsContainer">
                    <div className="pd-leftContainer">
                     <p className="detailHeader"><strong>Laze</strong> Left Hand Facing Large Lounger</p>
                     <p className="productPrice">Only £699</p>
                     <p className="instalment"><span>£14.56</span> a monthfor 4 years</p>
                     <p className="instalment">0%APR - No deposit</p>
                    </div>
                    <div className="pd-rightContainer">
                      <a href="https://www.dfs.co.uk/laze/lze13shbn?origin=All_Corner_Sofas">Find out more</a>
                      <button className= "addtoshortlist"><span className="heart"/>Add to shortlist</button> 
                    </div>
                </div>
            </div>
            <div className="productContainer">
                <a href="https://www.dfs.co.uk/binky/biy14eaon?origin=All_Corner_Sofas">
                    <img src={edd} alt="sofa One"/>
                    <div className="colourSizes">
                     <p><img src={colourWheel} alt="More Colors"/>More colours avaliable</p>
                     <p><img src={sizes} alt="More sizes"/>More sizes avaliable</p>
                    </div>
                </a>
                <div className="productDetailsContainer">
                    <div className="pd-leftContainer">
                     <p className="detailHeader"><strong>Edd</strong> 3 Seater Lounger</p>
                     <p className="productPrice">Only £699</p>
                     <p className="instalment"><span>£14.56</span> a monthfor 4 years</p>
                     <p className="instalment">0%APR - No deposit</p>
                    </div>
                    <div className="pd-rightContainer">
                      <a href="https://www.dfs.co.uk/edd/edd13ewol?origin=All_Corner_Sofas">Find out more</a>
                      <button className= "addtoshortlist"><span className="heart"/>Add to shortlist</button> 
                    </div>
                </div>
            </div>
            <div className="productContainer">
                <a href="https://www.dfs.co.uk/lulu/luu14emrp?origin=All_Corner_Sofas">
                    <img src={binky} alt="sofa One"/>
                    <div className="colourSizes">
                     <p><img src={colourWheel} alt="More Colors"/>More colours avaliable</p>
                     <p><img src={sizes} alt="More sizes"/>More sizes avaliable</p>
                    </div>
                </a>
                <div className="productDetailsContainer">
                    <div className="pd-leftContainer">
                     <p className="detailHeader"><strong>Binky</strong>4 Seater Lounger</p>
                     <p className="productPrice">Only £699</p>
                     <p className="instalment"><span>£14.56</span> a monthfor 4 years</p>
                     <p className="instalment">0%APR - No deposit</p>
                    </div>
                    <div className="pd-rightContainer">
                      <a href="https://www.dfs.co.uk/binky/biy14eaon?origin=All_Corner_Sofas">Find out more</a>
                      <button className= "addtoshortlist"><span className="heart"/>Add to shortlist</button> 
                    </div>
                </div>
            </div>
            <div className="productContainer">
                <a href="https://www.dfs.co.uk/paulo/pua14ebn1?origin=All_Corner_Sofas">
                    <img src={paulo} alt="sofa One"/>
                    <div className="colourSizes">
                     <p><img src={colourWheel} alt="More Colors"/>More colours avaliable</p>
                     <p><img src={sizes} alt="More sizes"/>More sizes avaliable</p>
                    </div>
                </a>
                <div className="productDetailsContainer">
                    <div className="pd-leftContainer">
                     <p className="detailHeader"><strong>Paulo</strong> 4 Seater Lounger</p>
                     <p className="productPrice">Only £699</p>
                     <p className="instalment"><span>£14.56</span> a monthfor 4 years</p>
                     <p className="instalment">0%APR - No deposit</p>
                    </div>
                    <div className="pd-rightContainer">
                      <a href="https://www.dfs.co.uk/paulo/pua14ebn1?origin=All_Corner_Sofas">Find out more</a>
                      <button className= "addtoshortlist"><span className="heart"/>Add to shortlist</button> 
                    </div>
                </div>
            </div>
           
        </div>
    )
}

export default Products
