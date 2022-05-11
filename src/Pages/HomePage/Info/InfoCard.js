import React from 'react';

const InfoCard = ({img,bg,cardTitle,cardInfo}) => {
    return (
    <div className={`card lg:card-side hover:drop-shadow-2xl py-8 drop-shadow-lg ${bg}`}>
        <figure><img className='pl-[25px]' src={img} alt="Album"/></figure>
        <div className="card-body text-white">
          <h2 className="card-title text-[20px]">{cardTitle}</h2>
          <p>{cardInfo}</p>
        </div>
      </div>
    );
};

export default InfoCard;