import React from 'react';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function AboutWolf(){
    return(
        <div style={{backgroundColor:'white'}}>
            <Row className="justify-content-center">
                <Col lg={12} md={12} sm={12} xs={12} className="mt-5 mb-4 title">
                About Wolf
                </Col>
            </Row>
            <Row className="justify-content-center">
                <Col lg={9} md={9} sm={10} xs={10} className="content-font">
                leading company.was founded in 2011 by a 25 years experiences IT Professional from Microsoft , a global paperless and business process management (BPM) or workflow solutions. The company WOLF, a new brand of TechCons Biz, is an IT Consulting company who are specialized in paperless and business process management (BPM) or workflow solutions. The company was founded in 2011 by a 25 years experiences IT Professional from Microsoft , a global leading company.
                </Col>
            </Row>
            <Row className="justify-content-center mt-4">
                <Col lg={9} md={9} sm={10} xs={10} className="content-font">
                Key Success Story <div className="content-fontTH">เรื่องราวความสำเร็จที่สำคัญ</div>
                </Col>
            </Row>
            <Row className="justify-content-center mt-4 pb-4">
                <Col lg={9} md={9} sm={10} xs={10} className="content-font">
                    <ul>
                        <li>
                        Business growth 10 times in 8 years <br></br>
                <div className="content-fontTH">การเติบโตของธุรกิจ 10 เท่าใน 8 ปี</div>
                        </li>
                        <li>
                            Over 50 paperless or BPM system implemented <br></br>
                            <div className="content-fontTH">มีการใช้ระบบไร้กระดาษหรือระบบ BPM มากกว่า 50 ระบบ</div>
                        </li>
                    </ul>
                </Col>
            </Row>
        </div>
    );
}

export default AboutWolf;

