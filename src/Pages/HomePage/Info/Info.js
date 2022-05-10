import React from 'react';
import InfoCard from './InfoCard';
import clock from '../../../assets/icons/clock.svg'
import marker from '../../../assets/icons/marker.svg'
import phone from '../../../assets/icons/phone.svg'

const Info = () => {
    return (
        <div className='grid grid-cols-1 mb-20 sm:w-100 md:grid-cols-2 lg:grid-cols-3 gap-10 m-6'>
            <InfoCard cardInfo='Lorem Ipsum is simply dummy text of the pri' cardTitle='Opening Hours' bg={"bg-gradient-to-r from-primary to-secondary "} img={clock}></InfoCard>
            <InfoCard cardInfo='Brooklyn, NY 10036, United States' cardTitle='Visit our location' bg={"bg-acccent"} img={marker}></InfoCard>
            <InfoCard cardInfo='+000 123 456789' cardTitle='Contact us now' bg={"bg-gradient-to-r from-primary to-secondary "} img={phone}></InfoCard>
        </div>
    );
};

export default Info;