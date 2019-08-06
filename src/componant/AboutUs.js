import React from 'react';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Iframe from 'react-iframe'

function AbooutUs(){
    return(
        <div style={{backgroundColor:'white'}}>
            <Row>
                <Col lg={1}>
                </Col>
                <Col lg={5} md={12} sm={12} xs={12} className="mt-5 pl-5" style={{textAlign:'left'}}>
                    <Row className="title">
                        Who We Are
                    </Row>
                    <Row className="aboutus-font mt-3 pr-5">
                    WOLF, a new brand of TechCons Biz, is an IT Consulting company who are specialized in paperless and business process management  (BPM) or workflow solutions..
                    </Row>
                    <Row className="title mt-4">
                    Wolf Mission
                    </Row>
                    <Row className="aboutus-font mt-3 pr-5">
                    Digital transform your organization to paperless process with the easy and fast solutions with the concept "FLOW FAST WITH WOLF".
                    </Row>
                </Col>
                <Col lg={6} md={12} sm={12} xs={12} className="mt-5 pl-5 pr-5 justify-content-center">
                <Iframe width="100%" height="315" src="https://www.youtube.com/embed/BT8mtkWapts" 
                frameborder="0" 
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                allowfullscreen></Iframe>
                </Col>
            </Row>
            <Row className="mt-5 pb-5 justify-content-center">
                <Button className="button-borderyellow">About Us</Button>
            </Row>
        </div>
    );
}
export default AbooutUs ;