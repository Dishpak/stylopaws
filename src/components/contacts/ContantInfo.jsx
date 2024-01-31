import React from 'react';

const ContactInfo = () => (
  <>
    <div className="contact-info">
      <span className="contact-info-ico">
        <i className="fa-solid fa-home"></i>
        <div>
          <h3>1600 Amphitheatre Pkwy, Mountain View</h3>
          <p>CA 94043</p>
        </div>
      </span>
    </div>
    <div className="contact-info">
      <span className="contact-info-ico">
        <i className="fa-solid fa-phone"></i>
        <div>
          <h3>
            <a href="tel: +123456789">12 (34) 45689</a>
          </h3>
          <p>Mon to Fri 9am to 6pm</p>
        </div>
      </span>
    </div>
    <div className="contact-info">
      <span className="contact-info-ico">
        <i className="fa-solid fa-envelope"></i>
        <div>
          <h3>
            <a href="mailto: dishpak.dev@gmail.com">dishpak.dev@gmail.com</a>
          </h3>
          <p>Send us your query anytime!</p>
        </div>
      </span>
    </div>
  </>
);

export default ContactInfo;
