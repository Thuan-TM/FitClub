import React, { useEffect } from 'react';
import { useState } from 'react';
import {say_about} from '../../img'
import './sayAbout.scss';

const obj = [
    {
        id: '1',
        name:'MATHEW HENDRICKSON',
        content: 'I made the right choice by choosing the Fitclub and by choosing the right plan and program I already achieved my ideal body!',
        img: say_about.one,
        type: 'ENTREPRENEUR'
    },
    {
        id: '2',
        name:'JOHN KEVIN',
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi ipsam, ab itaque nam perferendis impedit sint',
        img: say_about.two,
        type: ' COACH'
    },
    {
        id: '3',
        name:'FRANKLIN',
        content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima aspernatur quod voluptatem',
        img: say_about.three,
        type: 'CUSTOMER'
    },
]

const SayAbout = () => {
    const [indexObj,setIndex] = useState(0)
    function handNext(){
        if(indexObj >= obj.length-1){
            setIndex(0)
        }
        else setIndex(indexObj+1)
        
    }
    function handPri(){
        if(indexObj <= 0){
            setIndex(obj.length-1)
        }
        else setIndex(indexObj-1)
    }

    return (
        <div className='sayAbout mt-20 md:mt-28 flex flex-col md:flex-row gap-0 sm:gap-8 relative text-white' id='Testimonials'>
            <div className='flex flex-col gap-4 sm:gap-y-8'>
                <div className='text-[#f48915] text-[2rem] font-semibold'>
                    <p>TESTIMONIALS</p>
                </div>
                <div>
                    <p className='stroke-text text-[4.8rem] font-bold'>WHAT THEY</p>
                </div>
                <div>
                    <p className='text-[4.8rem] font-bold'>SAY ABOUT US</p>
                </div>
                <div>
                    <p className='content text-[1.6rem] '>{obj[indexObj].content}</p>
                </div>
                <div className='text-[1.6rem]'>
                    <span className='text-[#f48915] '>{obj[indexObj].name} - </span>
                    <span className=''>{obj[indexObj].type}</span>
                </div>
            </div>
            <div className=' flex justify-center items-center min-h-[40rem] z-[0]'>
                <div className='relative'>
                    <img src={obj[indexObj].img} alt="" />
                    <div className='absolute w-full h-full hidden md:block '></div>
                    <div className='absolute w-full h-full hidden md:block '></div>
                    <div className='absolute bottom-[-4rem] text-[3rem] flex gap-8'>
                        <i className="fas fa-angle-left cursor-pointer" onClick={()=> handPri()} ></i>
                        <i className="fas fa-angle-right cursor-pointer" onClick={()=> handNext()}></i>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SayAbout;