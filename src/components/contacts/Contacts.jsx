import React from 'react';
import Container from 'react-bootstrap/Container';
import ContactForm from './ContactForm';
import ContactInfo from './ContantInfo';
const Contacts = () => {
  return (
    <Container className={'contacts'}>
      <h1>Contacts Component</h1>
      <div className="row">
        <div className="col">
          <figure>
            <img src="/assets/google-map.png" alt="google map to our store" />
            <figcaption>
              Unfortunately unable to connect Google API due to sanctions. Have
              tou use fake static image
            </figcaption>
          </figure>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <h2>Get in Touch!</h2>
        </div>
        <div className="col-8">
          <ContactForm />
        </div>
        <address className="col-4">
          <ContactInfo />
        </address>
      </div>
    </Container>
  );
};

export default Contacts;
