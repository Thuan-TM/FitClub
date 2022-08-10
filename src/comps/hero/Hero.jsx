
import React, { useEffect } from 'react';
import { useRef } from 'react';
import  {hero} from '../../img/'
import {Link} from 'react-scroll'
import  './hero.scss'

const Hero = () => {
    const navbar = useRef(null)

    let coache = useRef(null)
    let joiner = useRef(null)
    let program = useRef(null)

    useEffect(()=>{
        let count = 0;
        let timer = setInterval(()=>{
            if(count == +coache.getAttribute('data')){
                return
            }
            else {
                count++;
            }
            coache.innerText = `+ ${count}`
        },+coache.getAttribute('data')/10)
        return ()=> clearInterval(timer)  
    },[])
    useEffect(()=>{
        let count = 900;
        let timer = setInterval(()=>{
            if(count == +joiner.getAttribute('data')){
                return
            }
            else {
                count++;
            }
            joiner.innerText = `+ ${count}`
        },+joiner.getAttribute('data')/40)
        return ()=> clearInterval(timer)  
    },[])
    useEffect(()=>{
        let count = 0;
        let timer = setInterval(()=>{
            if(count == +program.getAttribute('data')){
                return
            }
            else {
                count++;
            }
            program.innerText = `+ ${count}`
        },+program.getAttribute('data')/1.1)
        return ()=> clearInterval(timer)  
    },[])

    return (
        <div className='hero text-white flex-col sm:flex-row relative' id='home'>
            <div className="overlay absolute top-1 left-0 rounded-full sm:w-[40rem] w-[18rem] h-full"></div>
            <div className="hero__left flex flex-col gap-y-12 justify-center items-center sm:items-stretch">
                <div className="navbar">
                    <img src={hero.logo} alt="" className="img relative" />
                    <div 
                        className='flex justify-center items-center cursor-pointer hover:text-slate-200 lg:hidden'
                        onClick={()=>{navbar.current.classList.toggle('active')}}
                    ><i className="fas fa-bars text-5xl"></i></div>
                    <ul ref={navbar} className="navbar__sub flex gap-y-4 flex-col fixed top-[6rem] right-4 bg-[#3c3f45] px-8 py-12 z-10 translate-x-[150%] lg:flex-row lg:relative lg:bg-transparent lg:right-0 lg:top-0 lg:translate-x-0">
                        <li className="navbar__links">
                            <Link to="home" spy={true} smooth={true} offset={100} duration={500}>Home</Link>
                        </li>
                        <li className="navbar__links">
                            <Link to="program" spy={true} smooth={true} offset={-100} duration={500}>Program</Link>
                        </li>
                        <li className="navbar__links">
                            <Link to="whyUs" spy={true} smooth={true} offset={-100} duration={500}>Why us</Link>
                        </li>
                        <li className="navbar__links">
                            <Link to="plan" spy={true} smooth={true} offset={-100} duration={500}>Plan</Link>
                        </li>
                        <li className="navbar__links">
                            <Link to="Testimonials" spy={true} smooth={true} offset={-100} duration={500}>Testimonials</Link>
                        </li>
                    </ul>
                </div>
                <div className="hero__the-best ">
                    <div className=''></div>
                    <span className='sm:text-[1.6rem] text-[1.4rem]'>THE BEST FITNESS CLUB IN THE TOWN</span>
                </div>
                <div className="hero__text text-center sm:text-left ">
                    <div className='text-[4rem] sm:text-[5rem] lg:text-[7.2rem] z-[-1] font-bold w-full md:w-[80%]'>
                        <span className='stroke-text '>SHAPE &nbsp;</span>
                        <span>YOUR &nbsp;</span>
                        <span>IDEAL &nbsp;</span>
                        <span>BODY</span>
                    </div>
                    <p className='md:w-[80%] w-full text-[1.4rem] sm:ext-[1.6rem]'>In here we will help you to shape and build your ideal body and live up your life to fullest</p>
                </div>
                <div className="figures flex justify-between sm:justify-start sm:gap-12 w-full sm:w-[80%]">
                    <div>
                        <h1 className='sm:text-[3.2rem] text-[2.4rem]' data = '140' ref={e => coache = e}>+ 0</h1>
                        <p className='text-[1.4rem] sm:ext-[1.6rem]'>expert coaches</p>
                    </div>
                    <div>
                        <h1 className='sm:text-[3.2rem] text-[2.4rem]' data = '978' ref={e => joiner = e}>+ 0</h1>
                        <p className='text-[1.4rem] sm:ext-[1.6rem]'>Members joined</p>
                    </div>
                    <div>
                        <h1 className='sm:text-[3.2rem] text-[2.4rem]' data = '50' ref={e => program = e}>+ 0</h1>
                        <p className='text-[1.4rem] sm:ext-[1.6rem]'>fitness programs</p>
                    </div>
                </div>
                <div className="hero__btn flex gap-10 ">
                    <button><span className='p-4'>Get started</span></button>
                    <button><span className='p-4'>Learn More</span></button>
                </div>
            </div>
            <div className="hero__right bg-transparent sm:bg-[#f48915] relative ">
                <div className="hero__right-btn">
                    <button className='bg-slate-200 hover:bg-slate-300 text-black font-semibold p-3 mt-[3rem] mr-4 float-right'>Join Now</button>
                </div>
                <div className="heart-rate p-[1.6rem] flex flex-col gap-4 absolute">
                    <span className='w-14'><img src={hero.heart} alt="" /></span> 
                    <p>Heart Rate</p>
                    <p>116 bpm</p>
                </div>
                <img src={hero.hero_image} alt="" className='sm:absolute sm:w-[100rem] w-[50%] h-auto top-0 sm:top-auto sm:bottom-3 sm:left-[-20rem] z-[1]'/>
                <img src={hero.hero_image_back} alt="" className='absolute sm:w-[100%] h-auto sm:top-3 sm:left-[-15rem] md:left-[-25rem] z-[-1] sm:block hidden'/>
                <div className="sm:absolute calories mt-2 p-4 flex gap-4 max-w-[20rem] bottom-8 sm:left-[-20rem] md:left-[-40rem] z-10 items-center mx-auto">
                    <img src={hero.rate} alt="" className='w-[20%]'/>
                    <div>
                        <p>Calories burned</p>
                        <p>220 kcal</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;