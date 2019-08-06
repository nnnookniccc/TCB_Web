import React from 'react';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import microsoftLogo from './../assets/images/microsoftLogo.png'

function Partner() {
    return (
        <div style={{backgroundColor:'white'}}>
            <Row className="justify-content-center">
                <Col lg={12} md={12} sm={12} xs={12} className="mt-5 mb-4 title">
                    Partner
                </Col>
            </Row>
            <Row className="justify-content-center">
                <Col lg={7} md={9} sm={11} xs={11} className="partner-font">
                Suspendisse tincidunt, erat eget ullamcorper tempor, dui dui dignissim
                sit amet gravida est ipsum vitae orci.
                </Col>
            </Row>
            <Row className="justify-content-center">
                <Col lg={4} md={6} sm={7} xs={9} className="mt-5 mb-5"  style={{textAlign:"center"}}>
                <img src={microsoftLogo} className="logopartner"/>
                </Col>
            </Row>
            <Row className="justify-content-center">
                <Col lg={7} md={9} sm={10} xs={10} className="partner-font mb-5">
                Microsoft Corporation is global-leading software company, which provides the solutions on both cloud-based and on-premise.
                </Col>
            </Row>
        </div>
    );
}
  
export default Partner ;