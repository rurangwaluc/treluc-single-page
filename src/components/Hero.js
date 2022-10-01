import React from 'react';
import CV from '../assets/CV.pdf';

const Hero = () => {
  return (
    <section
      id='home'
      className='home_hero lg:h-[90vh] sms flex items-center bg-primary lg:bg-cover lg:bg-center lg:bg-no-repeat py-32 lg:py-0 overflow-hidden'
    >
      <div className='container mx-auto items-center h-full hero_container'>
        <div className='flex items-center h-full pt-8'>
          <div className='hero_text flex-1 flex flex-col items-center lg:items-center'>
            <h1 className=' text-2xl leading-[44px] md:text-2xl md:leading-tight text-center lg:text-2xl 
            lg:leading-[1.2] font-bold md:tracking-[-2px] text-black'>
            Premium Personal Portfolio and LandingPage Templates
            </h1>
            <p className='pt-4 pb-2 md:pt-2 md:pb-2 text-black  text-center lg:text-left'>
            I Create Websites and Email Templates
            </p>
          
          </div>
         
        </div>
   
      </div>
     
    </section>
  );
};

export default Hero;
