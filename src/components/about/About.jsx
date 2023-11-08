import React from 'react';
import SubscribeSection from "../mainPage/SubscribeSection";
import {companyFeatures} from "../helpers/renderDatas";
import {Container, Row, Col, Image} from "react-bootstrap";


const About = () => {
  return (
    <>
      <Container className="about">
        <h1>Our Mission</h1>
        <Row>
          <Col>
            <p>At StyloPaws, our mission is to provide our valued customers with not just high-quality clothing, but a
              memorable shopping experience that reflects your unique style. We believe that fashion is a powerful form
              of self-expression, and we're here to help you showcase your individuality and confidence through the
              perfect attire. From everyday essentials to special occasion outfits, we curate a diverse collection to
              cater to your distinct preferences. We are dedicated to delivering fashion-forward, sustainable, and
              affordable clothing, ensuring that you not only look good but feel great about your choices. Join us in
              the journey of defining your style, and let [Your Store Name] be your trusted fashion partner.</p>
            <Image
              src="https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?auto=format&fit=crop&q=80&w=1972&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="" fluid/>
          </Col>
        </Row>
        <Row>
          <Col>
            <h2>Discover StyloPaws</h2>
          </Col>
          <Col>
            <p>Welcome to StyloPaws, your ultimate destination for trendy and affordable fashion. At StyloPaws, we're
              dedicated to providing you with the latest styles and the best shopping experience. Our mission is to
              offer high-quality, sustainable clothing that helps you express your unique style and embrace your
              individuality. We believe that fashion should be accessible to all, and we're committed to making it easy
              for you to look and feel your best. Join us on this fashion journey, and let StyloPaws be your go-to for
              all your clothing needs.</p>
          </Col>
        </Row>
        <Row>
          {companyFeatures.map((feature, index) => {
            return (
              <div className="col" key={index}>
                <i className={`fa-solid ${feature.iconClass}`}></i>
                <h4>{feature.title}</h4>
              </div>
            )
          })}
        </Row>
      </Container>
      <SubscribeSection/>
    </>
  );
};

export default About;
