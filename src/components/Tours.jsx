import React from 'react';
import Title from './Title';
import { tours } from '../data';
import Tour from './Tour';
const Tours = () => {
  return (
    <section className="section" id="tours">
      <Title title="featured" subTitle="tours"></Title>
      {/* <div className="section-title">
        <h2>
          featured <span>tours</span>
        </h2>
      </div> */}
      <div className="section-center featured-center">
        {tours.map((tour) => {
          // const { id, image, cost, date, duration, info, location, title } = tour;
          return (
            <Tour key={tour.id} {...tour} />
            // <article className="tour-card" key={id}>
            //   <div className="tour-img-container">
            //     <img src={image} className="tour-img" alt="tour" />
            //     <p className="tour-date">{date}</p>
            //   </div>
            //   <div className="tour-info">
            //     <div className="tour-title">
            //       <h4>{title}</h4>
            //     </div>
            //     <p>{info}</p>
            //     <div className="tour-footer">
            //       <p>
            //         <span>
            //           <i className="fas fa-map" />
            //         </span>{' '}
            //         {location}
            //       </p>
            //       <p>{duration} days</p>
            //       <p>from ${cost}</p>
            //     </div>
            //   </div>
            // </article>
          );
        })}
      </div>
    </section>
  );
};

export default Tours;
