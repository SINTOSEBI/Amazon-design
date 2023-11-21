import React from 'react'
import Card from 'react-bootstrap/Card';
import { Row,Col } from 'react-bootstrap';

function Inside() {
  return (
    <div style={{backgroundColor:'#d0d5da'}}>
        <div>
            < img src="https://images-eu.ssl-images-amazon.com/images/G/31/AmazonBusiness/980_AB_GIF_Wave04_SP_TopBanner_Unrec_1242x450.jpg" alt="" style={{width:'100%',marginTop:'-16px',zIndex:'-1',marginBottom:'-130px'}}/>
        </div> 
        <div>
        <Row className='ms-5 me-3'>
           <Col className='mb-5' sm={6} md={6} lg={4} xl={3}>
             <Card>
              <Card.Body>
                <Card.Title className='fw-bolder'>Shop deals in Fashion</Card.Title>
                <div className='d-flex '>
                           <img src="https://m.media-amazon.com/images/I/81G9Q+FuEeL._AC_UY1100_.jpg" alt="" style={{width:'40%',marginLeft:'10PX',height:'150px',marginBottom:'10px'}} />
                          <img src="https://www.mydesignation.com/wp-content/uploads/2020/08/theyyam-tshirt-mydesignation-image-.jpg" alt="" style={{width:'45%',marginLeft:'40px',marginBottom:'10px'}} />
                       </div>
                       <div className='d-flex'>
                          <img src="https://www.campusshoes.com/cdn/shop/products/RAISE_22L-129_ANGLFALS-MUNLT.jpg?v=1670325436" alt="" style={{width:'40%',marginLeft:'10PX',height:'150px'}} />
                          <img src="https://images.unsplash.com/photo-1564557287817-3785e38ec1f5?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aG9vZGllfGVufDB8fDB8fHww" alt="" style={{width:'45%',marginLeft:'40px',height:'150px'}} />
                       </div>
              </Card.Body>
             </Card>
           </Col>
           <Col className='mb-5' sm={6} md={6} lg={4} xl={3}>
             <Card>
              <Card.Body>
                <Card.Title className='fw-bolder'>Refresh your space</Card.Title>
                <div className='d-flex '>
                           <img src="https://images-na.ssl-images-amazon.com/images/G/01/launchpad/2023/Gateway/January/DesktopQuadCat_186x116_LP-HP_B08MYX5Q2W_01.23._SY116_CB619238939_.jpg" alt="" style={{width:'40%',marginLeft:'10PX',height:'150px',marginBottom:'10px'}} />
                          <img src="https://images-na.ssl-images-amazon.com/images/G/01/launchpad/2023/Gateway/January/DesktopQuadCat_186x116_home_B08RCCP3HV_01.23._SY116_CB619238939_.jpg" alt="" style={{width:'45%',marginLeft:'40px',marginBottom:'10px'}} />
                       </div>
                       <div className='d-flex'>
                          <img src="https://images-na.ssl-images-amazon.com/images/G/01/launchpad/2023/Gateway/January/DesktopQuadCat_186x116_kitchen_B0126LMDFK_01.23._SY116_CB619238939_.jpg" alt="" style={{width:'40%',marginLeft:'10PX',height:'150px'}} />
                          <img src="https://images-na.ssl-images-amazon.com/images/G/01/launchpad/2023/Gateway/January/DesktopQuadCat_186x116_health-beauty_B07662GN57_01.23._SY116_CB619238939_.jpg" alt="" style={{width:'45%',marginLeft:'40px',height:'150px'}} />
                       </div>
              </Card.Body>
             </Card>
           </Col>
           <Col className='mb-5' sm={6} md={6} lg={4} xl={3}>
             <Card>
              <Card.Body>
                <Card.Title className='fw-bolder'>Home décor under $50</Card.Title>
                <img src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2023/EBF23/Fuji_Desktop_Single_image_EBF_1x_v6._SY304_CB573698005_.jpg" alt="" style={{width:'100%',height:'310px'}} />
              </Card.Body>
             </Card>
           </Col>
           <Col className='mb-5' sm={6} md={6} lg={4} xl={3}>
             <Card>
              <Card.Body>
                <Card.Title className='fw-bolder'>Small gifts under $20</Card.Title>
                <img src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2023/EBF23/Fuji_Desktop_Single_image_EBF_1x_v2._SY304_CB573698005_.jpg" alt="" style={{width:'100%',height:'310px'}} />
              </Card.Body>
             </Card>
           </Col>
           
        </Row>

        <Row className='ms-5 me-3'>
        <Col className='mb-5' sm={6} md={6} lg={4} xl={3}>
             <Card>
              <Card.Body>
                <Card.Title className='fw-bolder'>Deals in PCs</Card.Title>
                <img src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2023/EBF23/Fuji_Desktop_Single_image_EBF_1x_v1._SY304_CB573698005_.jpg" alt="" style={{width:'100%',height:'310px'}} />
              </Card.Body>
             </Card>
           </Col>
           <Col className='mb-5' sm={6} md={6} lg={4} xl={3}>
             <Card>
              <Card.Body>
                <Card.Title className='fw-bolder'>Toys under $25</Card.Title>
                <img src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2023/EBF23/Fuji_Desktop_Single_image_EBF_1x_v3._SY304_CB573698005_.jpg" alt="" style={{width:'100%',height:'310px'}} />
              </Card.Body>
             </Card>
           </Col>
           <Col className='mb-5' sm={6} md={6} lg={4} xl={3}>
             <Card>
              <Card.Body>
                <Card.Title className='fw-bolder'>Holiday deals in fashion</Card.Title>
                <img src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2023/EBF23/Fuji_Desktop_Single_image_EBF_1x_v4._SY304_CB573698005_.jpg" alt="" style={{width:'100%',height:'310px'}} />
              </Card.Body>
             </Card>
           </Col>
           <Col className='mb-5' sm={6} md={6} lg={4} xl={3}>
             <Card>
              <Card.Body>
                <Card.Title className='fw-bolder'>Shop holiday gift guides</Card.Title>
                <img src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2023/GiftGuides/Fuji_Holiday_Gift_guide_Desktop_Card_1x_379x304_EN._SY304_CB576347904_.jpg" alt="" style={{width:'100%',height:'310px'}} />
              </Card.Body>
             </Card>
           </Col>
        </Row>
        </div>      
    </div>
  )
}

export default Inside

