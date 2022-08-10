import React from 'react';
import  {hero} from '../../img/'

const Footer = () => {
    return (
        <div className=' mt-20 pb-28 md:mt-28 relative text-white'>
            <div className='w-full h-[.2rem] bg-white'></div>
            <div  className='absolute overlay top-0 left-0 w-full h-full '></div>
            <div>
                <div className='relative flex justify-center gap-28 text-[4rem] py-32' >
                    <i className="fab fa-github cursor-pointer"></i>
                    <i className="fab fa-facebook cursor-pointer"></i>
                    <i className="fab fa-linkedin cursor-pointer"></i>
                </div>
                <div className='relative flex justify-center gap-28 text-[4rem]' >
                    <img src={hero.logo} alt="" className='w-[20rem]' />
                </div>
            </div>
        </div>
    );
};

export default Footer;