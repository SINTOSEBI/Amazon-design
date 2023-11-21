import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
  return (
    <div>
        <Navbar expand="lg"  style={{backgroundColor:'#131A22'}}>
      <Container fluid>
        <Navbar.Brand href="#"><img src="https://imgs.search.brave.com/VwVXQxWB_hwEw7NifyfSYb3O-u_wnY7r11BVVnFnUNI/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jb21w/YW5pZXNsb2dvLmNv/bS9pbWcvb3JpZy9B/TVpOX0JJRy5ELThm/YjBiZTgxLnBuZz90/PTE2MzI1MjM2OTU" alt="Amazon logo" style={{height:'30px'}} /><span style={{color:'white'}}> .in </span></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '60px' }}
            navbarScroll
          >  
            <Nav.Link href="#action1" style={{color:'white',fontSize:'18px'}}><div className='d-flex'><i class="fa-solid fa-location-dot text-light mt-3 me-2"></i><div> <div style={{fontSize:'13px'}}>Enter</div> <div>Location</div></div></div></Nav.Link>
            <input className='ms-4 mt-2 rounded-start' type="search" placeholder='      Search Amazon.in' style={{width:'800px', fontSize:'20px',fontWeight:'bolder',height:'50px'}}/>
            <button style={{height:'50px',backgroundColor:'#FEBD69'}} className='btn mt-2 rounded-end'><i class="fa-solid fa-magnifying-glass text-black fs-5" style={{width:'21px',border:'none'}} ></i></button>
            
            <Nav.Link href="#action2" style={{color:'white',fontSize:'18px',marginLeft:'20px'}}> <div style={{fontSize:'13px'}}>Hello,sign in</div> <div>Accounts & Lists</div> </Nav.Link>
            <Nav.Link href="#action3" style={{color:'white',fontSize:'18px',marginLeft:'20px'}}> <div style={{fontSize:'13px'}}>Returns</div> <div>& Orders</div></Nav.Link>
            <Nav.Link href="#action4" style={{color:'white',fontSize:'30px',marginLeft:'20px'}}><i class="fa-solid fa-cart-shopping"></i>Cart</Nav.Link>
            
          </Nav>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default Header