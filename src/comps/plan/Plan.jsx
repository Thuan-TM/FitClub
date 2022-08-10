import React from 'react';
import {price} from '../../img'
import './plan.scss'

const Plan = () => {
    return (
        <div className='mt-16 md:mt-24 flex flex-col gap-y-16 relative'>
            <div className="overlay absolute top-1 left-0 rounded-full sm:w-[40rem] w-[18rem] h-full "></div>
            <div className="overlay absolute top-1 right-0  rounded-full sm:w-[40rem] w-[18rem] h-full"></div>
            <div className="relative grid grid-cols-1 text-center sm:grid-cols-3 gap-y-4 md:gap-30 text-white text-[3.6rem] md:text-[4.8rem] font-bold">
                <p className='stroke-text'>READY TO START</p>
                <p>YOUR JOURNEY</p>
                <p className='stroke-text'>NOW WITHUS</p>
            </div>
            <div className="plan flex flex-col md:flex-row gap-20 justify-center items-center text-white">
                <div className="plan__card flex flex-col gap-y-8 max-w-[35rem] p-8 relative z-0 bg-[#656565] rounded-sm" >
                    <div className="icon sm:text-[2.6rem] text-[2rem] text-[#f48915]">
                        <i className="fas fa-heart"></i>
                    </div>
                    <h3 className='text-[2.4rem] font-semibold'>BASIC PLAN</h3>
                    <p className=' text-[3rem] md:text-[4.8rem] font-bold'>$ 25</p>
                    <div className="flex flex-col gap-y-4">
                        <div className='flex gap-4 text-white text-[1.6rem] sm:text-[2rem] items-center'>
                            <img src={price.price_tick} alt="" className='w-[2.5rem]' />
                            <span>2 hours of excercises</span>
                        </div>
                        <div className='flex gap-4 text-white text-[1.6rem] sm:text-[2rem] items-center'>
                            <img src={price.price_tick} alt="" className='w-[2.5rem]' />
                            <span>Free consultaion to coaches</span>
                        </div>
                        <div className='flex gap-4 text-white text-[1.6rem] sm:text-[2rem] items-center'>
                            <img src={price.price_tick} alt="" className='w-[2.5rem]'/>
                            <span>Access to The Community</span>
                        </div>
                    </div>
                    <div className='text-[1.4rem]'>
                        <span>See more benefits </span> <i className="fas fa-arrow-right ml-4"></i>
                    </div>
                    <div className='text-[1.6rem] text-black bg-white p-4 text-center font-bold'>
                        <button className='w-full'>Join now</button>
                    </div>
                </div>
                
                <div className="plan___card flex flex-col gap-y-8 max-w-[35rem] p-8 relative z-0 rounded-sm scale-110" >
                    <div className="icon sm:text-[2.6rem] text-[2rem] ">
                        <i className="fas fa-crown"></i>
                    </div>
                    <h3 className='text-[2.4rem] font-semibold'>PREMIUM PLAN</h3>
                    <p className=' text-[3rem] md:text-[4.8rem] font-bold'>$ 30</p>
                    <div className="flex flex-col gap-y-4">
                        <div className='flex gap-4 text-white text-[1.6rem] sm:text-[2rem] items-center'>
                            <img src={price.price_tick} alt="" className='w-[2.5rem]' />
                            <span>5 hour of excercises</span>
                        </div>
                        <div className='flex gap-4 text-white text-[1.6rem] sm:text-[2rem] items-center'>
                            <img src={price.price_tick} alt="" className='w-[2.5rem]' />
                            <span>Free consultaion of Coaches</span>
                        </div>
                        <div className='flex gap-4 text-white text-[1.6rem] sm:text-[2rem] items-center'>
                            <img src={price.price_tick} alt="" className='w-[2.5rem]'/>
                            <span>Accessto minibar</span>
                        </div>
                    </div>
                    <div className='text-[1.4rem]'>
                        <span>See more benefits </span> <i className="fas fa-arrow-right ml-4"></i>
                    </div>
                    <div className='text-[1.6rem] text-black bg-white p-4 text-center font-bold'>
                        <button className='w-full'>Join now</button>
                    </div>
                </div>

                <div className="plan__card flex flex-col gap-y-8 max-w-[35rem] p-8 relative z-0 bg-[#656565] rounded-sm" >
                    <div className="icon sm:text-[2.6rem] text-[2rem] text-[#f48915]">
                        <i className="fas fa-dumbbell"></i>
                    </div>
                    <h3 className='text-[2.4rem] font-semibold'>PRO PLAN</h3>
                    <p className=' text-[3rem] md:text-[4.8rem] font-bold'>$ 45</p>
                    <div className="flex flex-col gap-y-4">
                        <div className='flex gap-4 text-white text-[1.6rem] sm:text-[2rem] items-center'>
                            <img src={price.price_tick} alt="" className='w-[2.5rem]' />
                            <span>8 hours of excercises</span>
                        </div>
                        <div className='flex gap-4 text-white text-[1.6rem] sm:text-[2rem] items-center'>
                            <img src={price.price_tick} alt="" className='w-[2.5rem]' />
                            <span>Consultation of Private Coach</span>
                        </div>
                        <div className='flex gap-4 text-white text-[1.6rem] sm:text-[2rem] items-center'>
                            <img src={price.price_tick} alt="" className='w-[2.5rem]'/>
                            <span>Free Fitness Merchandises</span>
                        </div>
                    </div>
                    <div className='text-[1.4rem]'>
                        <span>See more benefits </span> <i className="fas fa-arrow-right ml-4"></i>
                    </div>
                    <div className='text-[1.6rem] text-black bg-white p-4 text-center font-bold'>
                        <button className='w-full'>Join now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Plan;