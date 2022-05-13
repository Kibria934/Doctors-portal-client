import React from 'react';

const Service = ({img,cardTitle}) => {
    return (
        <div className="card w-100 bg-base-100 hover:drop-shadow-2xl drop-shadow-lg">
        <figure className="px-10 pt-10">
          <img src={img}  alt=""/>
        </figure>
        <div className="card-body items-center lg:px-20 text-center">
          <h2 className="card-title">{cardTitle}</h2>
          <p>Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the</p>
        </div>
      </div>
    );  
};

export default Service;