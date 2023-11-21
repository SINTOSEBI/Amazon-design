import React from 'react'

function Footer() {
  return (
    <div style={{height:'300px',backgroundColor:'#131A22',color:'white'}} className='d-flex justify-content-center align-items-center w-100 flex-column'>
      <div className='d-flex justify-content-evenly align-items-center w-100 mb-3'>
        <div className="abebooks">
          <h5 style={{fontWeight:'bold'}}>AbeBooks</h5>
          <h6>Books, art</h6>
          <h6> & collectibles</h6>
          
          <h5 style={{fontWeight:'bold'}}>Shopbop</h5>
          <h6>Designer</h6>
          <h6>Fashion Brands</h6>
        </div>
        <div className="amazonWebServices">
        <h5 style={{fontWeight:'bold'}}>Amazon Web Services</h5>
          <h6>Scalable Cloud</h6>
          <h6>Computing Services</h6>
          <h5 style={{fontWeight:'bold'}}>Amazon Business</h5>
          <h6>Everything For</h6>
          <h6>Your Business</h6>
        </div>
        <div className="audible">
        <h5 style={{fontWeight:'bold'}}>Audible</h5>
          <h6>Download</h6>
          <h6>Audio Books</h6>
          <h5 style={{fontWeight:'bold'}}>Prime Now</h5>
          <h6>2-Hour Delivery</h6>
          <h6>on Everyday Items</h6>
        </div>
        <div className="imdb">
        <h5 style={{fontWeight:'bold'}}>IMDB</h5>
          <h6>Movies, TV</h6>
          <h6>& Celebrities</h6>
          <h5 style={{fontWeight:'bold'}}>Prime Now</h5>
          <h6>100 milloin songs, ad-free</h6>
          <h6>Over 15 million podcast episodes</h6>
        </div>
      </div>
    <p>Conditions of Use & Sale  •  Privacy Notice  •  Interest-Based Ads <br />
<span className='ms-5'>© 1996-2023, Amazon.com, Inc. or its affiliates</span></p>
    </div>
  ) 
}

export default Footer