import React from 'react';
import Title from './Title';
import { services } from '../data';
import Service from './Service';
const Services = () => {
  return (
    <section className="section services" id="services">
      <Title title="our" subTitle="services"></Title>
      {/* <div className="section-title">
        <h2>
          our <span>services</span>
        </h2>
      </div> */}
      <div className="section-center services-center">
        {services.map((service) => {
          // const { id, icon, text, title } = service;
          return (
            <Service key={service.id} {...service} />
            // <article className="service" key={id}>
            //   <span className="service-icon">
            //     <i className={icon} />
            //   </span>
            //   <div className="service-info">
            //     <h4 className="service-title">{title}</h4>
            //     <p className="service-text">{text}</p>
            //   </div>
            // </article>
          );
        })}
      </div>
    </section>
  );
};

export default Services;
