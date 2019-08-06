import React from 'react';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import ascendLogo from './../assets/images/ascendLogo.png';
import secLogo from './../assets/images/secLogo.png';
import Toyotaicon from './../assets/images/ToyotaLogo.png';
import PTTLogo from './../assets/images/PTTLogo.png';
import siampiwatLogo from './../assets/images/siampiwatLogo.png';
import cpnLogo from './../assets/images/cpnLogo.png';
import vstLogo from './../assets/images/vstLogo.png';
import scgLogo from './../assets/images/scgLogo.png';


function Clients() {
    return (
      <div className="partner-bg">
        <Row>
        <Col lg={12} md={12} sm={12} xs={12} className="mt-5">
            <div className="title">Clients</div>
          </Col>
        </Row>
        <Row>
          <Col lg={1} md={2}></Col>
          <Col lg={2} md={2} xs={6} style={{textAlign:"center"}}>
          <img src={ascendLogo} className="logoclient1"/>
          </Col>
          <Col lg={2} md={2} xs={6} style={{textAlign:"center"}}>
          <img src={secLogo} className="logoclient2"/>
          </Col>
          <Col lg={3} md={2} xs={6} style={{textAlign:"center"}}>
          <img src={Toyotaicon} className="logoclient3"/>
          </Col>
          <Col lg={3} md={2} xs={6} style={{textAlign:"center"}}>
          <img src={PTTLogo} className="logoclient4"/>
          </Col>
          <Col lg={1} md={2} xs={6} >
          </Col>
        </Row>
        <Row>
          <Col lg={1} md={2}></Col>
          <Col lg={2} md={2} xs={6} style={{textAlign:"center"}}>
          <img src={siampiwatLogo} className="logoclient5"/>
          </Col>
          <Col lg={2} md={2} xs={6} style={{textAlign:"center"}}>
          <img src={cpnLogo} className="logoclient6"/>
          </Col>
          <Col lg={3} md={2} xs={6} style={{textAlign:"center"}}>
          <img src={vstLogo} className="logoclient7"/>
          </Col>
          <Col lg={3} md={2} xs={6} style={{textAlign:"center"}}>
          <img src={scgLogo} className="logoclient8"/>
          </Col>
          <Col lg={1} md={2} xs={6} >
          </Col>
        </Row>
        <Row className="mt-5 pb-5 justify-content-center">
          <Button className="button-borderyellow">See more</Button>
        </Row>
      </div>
    );
  }

  export default Clients ;