import React from 'react'

function Upperf() {
  return (
    <div style={{height:'400px',backgroundColor:'#232F3E',color:'white'}} className='d-flex justify-content-center align-items-center w-100 flex-column'>
        <div className='d-flex justify-content-evenly align-items-center w-100 mb-5'>
            <div className="1">
                <h5 style={{fontWeight:'bold'}}>Get to Know Us</h5>
                <h6>About Us</h6>
                <h6>Careers</h6>
                <h6>Press Releases</h6>
                <h6>Amazon Science</h6>
            </div>
            <div className="2">
                <h5 style={{fontWeight:'bold'}}>Connect with Us</h5>
                <h6>Facebook</h6>
                <h6>Twitter</h6>
                <h6>Instagram</h6>
                <h6>Whatsapp</h6>
            </div>
            <div className="3">
                <h5 style={{fontWeight:'bold'}}>Make Money With Us</h5>
                <h6>Sell on Amazon</h6>
                <h6>Sell under Amazon Accelerator</h6>
                <h6>Protect and Build Your Brand</h6>
                <h6>Amazon Global Selling</h6>
            </div>
            <div className="4">
                <h5 style={{fontWeight:'bold'}}>Let Us Help You</h5>
                <h6>COVID-19 and Amazon</h6>
                <h6>Your Account</h6>
                <h6>Amazon App Download</h6>
                <h6>Help</h6>
            </div>
        </div>
        <div style={{width:'100%',height:'1px',backgroundColor:'#3a4553'}}></div>
        <img src="https://imgs.search.brave.com/VwVXQxWB_hwEw7NifyfSYb3O-u_wnY7r11BVVnFnUNI/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jb21w/YW5pZXNsb2dvLmNv/bS9pbWcvb3JpZy9B/TVpOX0JJRy5ELThm/YjBiZTgxLnBuZz90/PTE2MzI1MjM2OTU" style={{height:'50px',marginTop:'30px'}} alt="" />
        <ul className='w-50 ms-5 text-white align-items-center'  style={{listStyleType:'none',display:'flex',justifyContent:'space-between',height:'43px',fontSize:'16px'}}>
            <li>Australia</li>
            <li>Brazil</li>
            <li>Canada</li>
            <li>China</li>
            <li>France</li>
            <li>Germany</li>
            <li>Italy</li>
            <li>Japan</li>
            <li>Mexico</li>
            <li>Netherlands</li>
        </ul>
    </div>
  )
}

export default Upperf