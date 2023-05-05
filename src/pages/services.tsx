
import React from 'react';
import Services from './components/Service/Services';
import ServicePrice from './components/Service/ServicePrice';
import Offer from './components/Service/Offer';
import WorkingProcess from './components/Service/WorkingProcess/WorkingProcess';
import Blog from './components/Blog/Blog';

const services = () => {
  return (
    <div>
      <Services></Services>
      <ServicePrice></ServicePrice>
      <Offer></Offer>
     <WorkingProcess></WorkingProcess>
     <Blog/>
    </div>
  );
};

export default services;
