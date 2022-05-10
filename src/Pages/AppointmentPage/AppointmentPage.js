import React, { useState } from 'react';
import Footer from '../SharedPage/Footer';
import AppointmentBanner from './AppointmentBanner';
import AvailableAppointments from './AvailableAppointments';

const AppointmentPage = () => {
    const [date, setDate] = useState(new Date());

    return (
        <div>
           <AppointmentBanner date={date} setDate={setDate}></AppointmentBanner>
           <AvailableAppointments date ={date}></AvailableAppointments>
            <Footer></Footer>
        </div>
    );
};

export default AppointmentPage;