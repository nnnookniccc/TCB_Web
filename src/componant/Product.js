import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button'
import approveIcon from './../assets/images/approveIcon.png'
import consultIcon from './../assets/images/consultIcon.png'

function Product(){
    return(
        <div className="product-bg">
            <Row className="justify-content-center">
                <Col lg={12} md={12} sm={12} xs={12} className="mt-5 mb-4 title-white">
                Our Product
                </Col>
            </Row>
            <Row className="justify-content-center">
                <Col lg={9} md={9} sm={11} xs={11} className="product-font1">
                DIGITAL TRANSFORM YOUR ORGANIZATION TO PAPERLESS PROCESS WITH THE EASY AND FAST SOLUTIONS WITH THE CONCEPT "FLOW FAST WITH WOLF".
                </Col>
            </Row>
            <Row className="justify-content-center">
                <Col lg={5} md={11} sm={11} xs={11} className=" mt-5">
                    <Row className="justify-content-center">
                       <img src={approveIcon} className="logoProduct"/> 
                    </Row>
                    <Row className="justify-content-center title-white mt-4">
                        Wolf Approve 
                    </Row>      
                    <Row className="product-font3 mt-4 pl-5 pr-5">
                    Proin laoreet metus ut cursus sodales. Vivamus dictum elementum risus, sit amet facilisis leo suscipit sed.
                    </Row>  
                    <Row className="product-font3 mt-4 pl-5 pr-5 justify-content-center">
                    <Button className="button-yellow mb-5">Read more</Button>
                    </Row>    
                </Col>
                <Col lg={5} md={11} sm={11} xs={11} className=" mt-5">
                    <Row className="justify-content-center">
                       <img src={consultIcon} className="logoProduct"/> 
                    </Row>
                    <Row className="justify-content-center title-white mt-4">
                        Wolf Consult 
                    </Row>    
                    <Row className="product-font3 mt-4 pl-5 pr-5">
                    Proin laoreet metus ut cursus sodales. Vivamus dictum elementum risus, sit amet facilisis leo suscipit sed.
                    </Row>  
                    <Row className="product-font3 mt-4 pl-5 pr-5 justify-content-center">
                    <Button className="button-yellow mb-5">Read more</Button>
                    </Row>    
                </Col>
            </Row>
        </div>
    );
}
export default Product;