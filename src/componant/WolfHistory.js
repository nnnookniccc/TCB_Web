import React from 'react';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import WOLFHistoryimage from './../assets/images/WOLFHistoryimage.png'


function WolfHistory(){
    return(
        <div style={{backgroundColor:'white'}}>
            <Row className="justify-content-center">
                <Col lg={12} md={12} sm={12} xs={12} className="mt-5 mb-4 title">
                Wolf History
                </Col>
            </Row>
            <Row className="justify-content-center">
                <Col lg={12} md={12} sm={12} xs={12} className="mb-4 title">
                <img src={WOLFHistoryimage} className="WOLFHistoryimage"/> 
                </Col>
            </Row>
        </div>
    );
}

export default WolfHistory;

