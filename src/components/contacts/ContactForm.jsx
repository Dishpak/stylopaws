import React from 'react';

const ContactForm = () => (
  <form className="form-contact contact_form" method="post" id="contactForm">
    <div className="row">
      <div className="col-12">
        <div className="form-group">
          <textarea className="form-control w-100" name="message" id="message" cols="30" rows="9" placeholder="Enter Message"></textarea>
        </div>
        <div className="col-sm-6">
          <div className="form-group">
            <input className="form-control" name="name" id="name" type="text" placeholder="Enter your name" />
          </div>
        </div>
        <div className="col-sm-6">
          <div className="form-group">
            <input className="form-control" name="email" id="email" type="email" placeholder="Enter email address" />
          </div>
        </div>
        <div className="col-12">
          <div className="form-group">
            <input className="form-control" name="subject" id="subject" type="text" placeholder="Enter Subject" />
          </div>
        </div>
      </div>
    </div>
    <div className="form-group mt-3">
      <button className="btn btn-primary">Send Message</button>
    </div>
  </form>
);

export default ContactForm;
