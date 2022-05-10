import React from 'react';

const InfoCard = ({img,bg,cardTitle,cardInfo}) => {
    return (
    <div class={`card lg:card-side bg-base-100 hover:shadow-2xl py-8 shadow-xl bg-accent ${bg}`}>
        <figure><img className='pl-[25px]' src={img} alt="Album"/></figure>
        <div class="card-body text-white">
          <h2 class="card-title text-[20px]">{cardTitle}</h2>
          <p>{cardInfo}</p>
        </div>
      </div>
    );
};

export default InfoCard;