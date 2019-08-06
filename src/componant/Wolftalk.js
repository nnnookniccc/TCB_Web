import React from 'react';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import talkcontent1 from './../assets/images/talkcontent1.png';
import talkcontent2 from './../assets/images/talkcontent2.png';
import talkcontent3 from './../assets/images/talkcontent3.png';



function Wolftalk() {
    return (
      <div className="content-bg">
        <Row>
        <Col lg={12} md={12} sm={12} xs={12} className="mt-5">
            <div className="title-white">Wolf's talk</div>
          </Col>
        </Row>

        <Row className="justify-content-center">
          {/* <Col xs={1}></Col> */}
          <Col lg={3} md={10} sm={10} xs={10} className="cardbox-bg mt-5">
            <Col xs={12}><img src={talkcontent1} className = "piccardbox mt-4"/></Col>
            <Col xs={12}>
              <p className="titletextcardbox">5 สิ่งเกิดแน่! ในองค์กรของคุณหากไม่รีบใช้ "WOLF...</p>
              <p className="textcardbox mb-4">หลายองค์กรในปัจจุบันต่างให้ความสำคัญกับเทคโนโลยีในยุค 4.0 ด้วยการนำเทคโนโลยีมาใช้ควบคู่กันกับการ...</p>
            </Col>
          </Col>

          {/* <Col xs={1}></Col> */}
          <Col lg={3} md={10} sm={10} xs={10} className="cardbox-bg mr-5 ml-5 mt-5">
            <Col xs={12}><img src={talkcontent2} className = "piccardbox mt-4"/></Col>
            <Col xs={12}>
              <p className="titletextcardbox">3 สิ่งที่ผู้บริหารยุค 4.0 ขาดไม่ได้ หากอยากให้ธุรกิจไปรอด!</p>
              <p className="textcardbox mb-4">การที่จะเป็นผู้บริหารที่ดีที่สามารถนำพาธุรกิจ ให้ไปถึงฝั่งฝันและประสบความสำเร็จได้นั้น ใช่ว่าใครๆก็เป็นได้ ยิ่ง...</p>
            </Col>
          </Col>
          
          {/* <Col xs={1}></Col> */}
          <Col lg={3} md={10} sm={10} xs={10} className="cardbox-bg mt-5">
            <Col xs={12}><img src={talkcontent3} className = "piccardbox mt-4"/></Col>
            <Col xs={12}>
              <p className="titletextcardbox">ธุรกิจล้ำนำสมัยไม่ตกเทรนด์ไปกับ Cloud Computi</p>
              <p className="textcardbox mb-4">หากพูดถึง Cloud Computing หลายคนอาจจะรู้จักกันบ้างแล้ว เพราะไม่ใช่เทคโนโลยีใหม่ซะทีเดียว แต่ก็ยังมีอีก...</p>
            </Col>
          </Col>
        </Row>
        
        <Row className="mt-5 pb-5 justify-content-center">
          <Button className="button-borderyellow">Read more</Button>
        </Row>
      </div>
    );
  }

export default Wolftalk ;