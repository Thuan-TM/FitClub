import React from 'react';

const Join = () => {
    return (
        <div className=' mt-20 md:mt-28 flex flex-col md:flex-row gap-y-8 gap-x-40 relative text-white'>
            <div className='text-white font-bold text-[3.6rem] md:text-[4.8rem]'>
                <div className='w-[30rem] h-[.5rem] bg-[#f48915] rounded-[40%]'></div>
                <div>
                    <span className='stroke-text '>READY TO </span>
                    <span>LEVEL UP</span>
                </div>
                <div>
                    <span>YOUR BODY </span>
                    <span className='stroke-text '>WITH US?</span>
                </div>
            </div>
            <div className='flex justify-center items-center'>
                <div className='px-8 py-4 bg-[#656565] w-[100%] text-[1.6rem] flex justify-center items-center  border-none'>
                    <input className='w-[75%] bg-transparent px-8 py-4 outline-none' type="text" placeholder='Enter your Enail Addrest her' />
                    <button className='px-8 py-4 bg-[#f48915] w-[25%] font-semibold'>Join now</button>
                </div>
            </div>
        </div>
    );
};

export default Join;