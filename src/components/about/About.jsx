import React from 'react';
import SubscribeSection from "../mainPage/SubscribeSection";

const features = [
  {
    title: 'Free Shipping',
    iconClass: 'fa-truck'
  },
  {
    title: 'Easy returns',
    iconClass: 'fa-rotate-left'
  },
  {
    title: 'Personal Styling',
    iconClass: 'fa-user-check'
  },
  {
    title: 'Exclusive Discounts',
    iconClass: 'fa-percent'
  },
]


const About = () => {
  return (
    <main>
      <section className="container about">
        <div className="row">
          <div className="col">
            <h1>Our Mission</h1>
            <p>At StyloPaws, our mission is to provide our valued customers with not just high-quality clothing, but a
              memorable shopping experience that reflects your unique style. We believe that fashion is a powerful form
              of self-expression, and we're here to help you showcase your individuality and confidence through the
              perfect attire. From everyday essentials to special occasion outfits, we curate a diverse collection to
              cater to your distinct preferences. We are dedicated to delivering fashion-forward, sustainable, and
              affordable clothing, ensuring that you not only look good but feel great about your choices. Join us in
              the journey of defining your style, and let [Your Store Name] be your trusted fashion partner.</p>
          </div>
          <img
            src="https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?auto=format&fit=crop&q=80&w=1972&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""/>
        </div>
        <div className="row">
          <div className="col">
            <h2>Discover StyloPaws</h2>
          </div>
          <div className="col">
            <p>Welcome to StyloPaws, your ultimate destination for trendy and affordable fashion. At StyloPaws, we're
              dedicated to providing you with the latest styles and the best shopping experience. Our mission is to
              offer high-quality, sustainable clothing that helps you express your unique style and embrace your
              individuality. We believe that fashion should be accessible to all, and we're committed to making it easy
              for you to look and feel your best. Join us on this fashion journey, and let StyloPaws be your go-to for
              all your clothing needs.</p>
          </div>
        </div>
        <div className="row">
          {features.map(feature => {
            return (
              <div className="col">
                <i className={`fa-solid ${feature.iconClass}`}></i>
                <h4>{feature.title}</h4>
              </div>
            )
          })}
        </div>
      </section>
      <section className="subscribe">
        <SubscribeSection/>
      </section>
    </main>
  );
};

export default About;
