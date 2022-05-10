import React from 'react';

const Service = ({img,cardTitle}) => {
    return (
        <div class="card w-100 bg-base-100 hover:shadow-2xl shadow-xl">
        <figure class="px-10 pt-10">
          <img src={img} alt="" class="rounded-xl" />
        </figure>
        <div class="card-body items-center lg:px-20 text-center">
          <h2 class="card-title">{cardTitle}</h2>
          <p>Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the</p>
        </div>
      </div>
    );  
};

export default Service;