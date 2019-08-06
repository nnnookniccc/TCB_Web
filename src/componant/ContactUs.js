import React from 'react';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Iframe from 'react-iframe'
import locateIcon from './../assets/images/locateIcon.png';
import telIcon from './../assets/images/telIcon.png';
import lineIcon from './../assets/images/lineIcon.png';
import worldIcon from './../assets/images/worldIcon.png';




function ContactUs() {
    return (
      <div className="contactus-bg">
        <Row>
          <Col lg={6} md={12} sm={12} xs={12}>
            <Row className="justify-content-center">
            <Col lg={12} md={12} sm={12} xs={12}>
            <div className="title-white mt-5 mb-4">
              Contact Us
            </div>
            </Col>
            </Row>
            <Row>
            <Col lg={2} md={2} sm={2} xs={1}></Col>
              <Col lg={1} md={1} sm={1} xs={2}>
              <img src={locateIcon} className="icon-contact"/>
              </Col>
              <Col lg={9} md={9} sm={9} xs={9}>
                <div className=" content-white-font pl-3 pr-sm-5 pr-xs-5">
                  <p>163 Ocean Insurance Tower 17th Floor Room 17GH Surawong Rd, Bangrak, Bangkok 10500 Thailand </p>
                  </div>
              </Col>
            </Row>
            <Row className="pt-2">
            <Col lg={2} md={2} sm={2} xs={1}></Col>
              <Col lg={1} md={1} sm={1} xs={2}>
              <img src={telIcon}  className="icon-contact"/>
              </Col>
              <Col lg={9} md={9} sm={9} xs={9}>
                <div className=" content-white-font pl-3">
                <p>02 634 4409</p>
                  </div>
              </Col>
            </Row>
            <Row className="pt-3">
            <Col lg={2} md={2} sm={2} xs={1}></Col>
              <Col lg={1} md={1} sm={1} xs={2}>              
              <img src={lineIcon} className="icon-contact1"/>
              </Col>
              <Col lg={9} md={9} sm={9} xs={9}>
                <div className=" content-white-font pl-3">
                <p>@techconsbiz</p>
                  </div>
              </Col>
            </Row>
            <Row className="pt-3">
            <Col lg={2} md={2} sm={2} xs={1}></Col>
              <Col lg={1} md={1} sm={1} xs={2}>
              <img src={worldIcon}  className="icon-contact1"/>
              </Col>
              <Col lg={9} md={9} sm={9} xs={9}>
                <div className=" content-white-font pl-3 pb-3">
                <p>http://www.wolftcb.com<br></br>http://www.wolfapprove.com</p>
                  </div>
              </Col>
            </Row>
          </Col>            
          <Col lg={6}>
            <Iframe  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15503.353358982544!2d100.5277994!3d13.7282354!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xce0863946d9077c2!2sTechcons+Biz+Co.%2C+Ltd.!5e0!3m2!1sen!2sth!4v1542945535834"
            width="100%"
            height="605px"
            frameBorder = "0"
            position="relative"/>          
          </Col>
        </Row>
      </div>
    );
  }

export default ContactUs ;