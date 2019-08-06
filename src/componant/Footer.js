import React from 'react';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import wolfLogo from './../assets/images/wolfLogo.png';
import iconfacebook from './../assets/images/iconfacebook.png';
import iconline from './../assets/images/iconline.png';
import icontwitter from './../assets/images/icontwitter.png';
import iconyoutube from './../assets/images/iconyoutube.png';

library.add(fas, fab, far);

function Footer() {
    return (
      <div className="footer-bg">
        <Row className="pt-5">
          <Col lg={1}>
          </Col>
          <Col lg={4} md={12}>
            <Row className="pt-1 pl-xs-55 pl-sm-65">
                <img src={wolfLogo} style={{width:144, height: 36}}/>
            </Row>
            <Row className="pt-5 pl-sm-65 pr-sm-6 pr-lg-2 footer-font">
            DIGITAL TRANSFORM YOUR ORGANIZATION TO PAPERLESS PROCESS WITH THE EASY AND FAST SOLUTIONS WITH THE CONCEPT "FLOW FAST WITH WOLF".
            </Row>
          </Col>
          <Col lg={1} md={1} sm={1} xs={1}></Col>
          <Col lg={5} md={10} sm={10} xs={10} className="footer-form-font pt-4">
            <Form>
              <Row className="pl-lg-5 pl-sm-5 pl-xs-45">
                    <Form.Label>Name</Form.Label>
              </Row>
              <Row className="pl-lg-5 pl-sm-5 pl-xs-45">
                    <Form.Control type="text" className="form-sq"/>
              </Row>
              <Row className="pl-lg-5 pl-sm-5 pl-xs-45">
                    <Form.Label>E-mail</Form.Label>
              </Row>
              <Row className="pl-lg-5 pl-sm-5 pl-xs-45">
                    <Form.Control type="email" className="form-sq"/>
              </Row>
              <Row className="pl-lg-5 pl-sm-5 pl-xs-45">
                    <Form.Label>Message</Form.Label>
              </Row>
              <Row className="pl-lg-5 pl-sm-5 pl-xs-45">
                    <Form.Control as="textarea"  rows="3" className="form-sqtextarea"/>
              </Row>
              <Row className="mt-5 pb-5 justify-content-center">
                <Button className="button-borderyellow">Submit</Button>
              </Row>
            </Form>
          </Col>
        </Row>
        <Row className="pt-4 justify-content-center">
          <img src={iconfacebook} style={{width:50, height:50}} className="mt-2 mr-3"/>
          <img src={iconline} style={{width:50, height:50}} className="mt-2 mr-3"/>
          <img src={icontwitter} style={{width:50, height:50}} className="mt-2 mr-3"/>
          <img src={iconyoutube} style={{width:50, height:50}} className="mt-2"/>
        </Row>
        <Row className="pb-5">
          <Col lg={12} md={12} sm={12} xs={12} className="copyright-font mt-3">Copyright 2019 All rights reserved. Designed by WOLF.</Col>
        </Row>
      </div>
    );
  }

  export default Footer ;