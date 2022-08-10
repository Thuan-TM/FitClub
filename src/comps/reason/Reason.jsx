

import React from 'react';
import './reason.scss'
import {reasons} from '../../img'

const Reason = () => {
    return (
        <div className='my-16 md:my-24 reason gap-10 flex-col-reverse md:flex-row' id='whyUs'>
            <div className="img grid grid-cols-3 grid-rows-2 gap-4 h-[30rem] md:h-[40rem] lg:h-[45rem]">
                <span className='col-span-1 row-span-2'><img src={reasons.img1} alt="" /></span>
                <span className='col-span-2'><img src={reasons.img2} alt="" /></span>
                <span className='col-span-1'><img src={reasons.img3} alt="" /></span>
                <span className='col-span-1'><img src={reasons.img4} alt="" /></span>
            </div>
            <div className="content font-semibold">
               <p className='font-semibold text-[1.6rem] sm:text-[2rem] text-[#f48915]'>SOME REASONS</p>
               <p className='pt-4 text-[3rem] text-white sm:text-[3.6rem] lg:text-[4.8rem]'> <span className='stroke-text '>WHY </span>CHOOSE US?</p>
               <div className='flex pt-4 text-white'>
                    <img className='w-[3rem]' src={reasons.reason_tick} alt="" />
                    <span className='text-[1.6rem] sm:text-[2rem] ml-4'>OVER 140+ EXPERT COACHS</span>
               </div>
               <div className='flex pt-4 text-white'>
                    <img className='w-[3rem]' src={reasons.reason_tick} alt="" />
                    <span className='text-[1.6rem] sm:text-[2rem] ml-4'>TRAIN SMARTER AND FASTER THAN BEFORE</span>
               </div>
               <div className='flex pt-4 text-white'>
                    <img className='w-[3rem]' src={reasons.reason_tick} alt="" />
                    <span className='text-[1.6rem] sm:text-[2rem] ml-4'>1 FREE PROGRAM FOR NEW MEMBER</span>
               </div>
               <div className='flex pt-4 text-white'>
                    <img className='w-[3rem]' src={reasons.reason_tick} alt="" />
                    <span className='text-[1.6rem] sm:text-[2rem] ml-4'>RELIABLE PARTNERS</span>
               </div>
               <p className='pt-4 text-[#9c9c9c] font-[500] text-[1.6rem]'>OUR PARTNERS</p>
               <div className="flex gap-4 pt-4">
                    <img className='w-[4rem]' src={reasons.logo1} alt="" />
                    <img className='w-[4rem]' src={reasons.logo2} alt="" />
                    <img className='w-[4rem]' src={reasons.logo3} alt="" />
               </div>
            </div>
            
        </div>
    );
};

export default Reason;