
import React from 'react';
import './program.scss'

const Program = () => {
    return (
        <div className='mt-16 md:mt-24 flex flex-col gap-y-10' id='program'>
            <div className="program__header grid grid-cols-1 text-center sm:grid-cols-3 gap-y-4 md:gap-32 text-white text-[3.6rem] md:text-[4.8rem] font-bold">
                <p className='stroke-text'>EXPLORE OUR</p>
                <p>PROGRAMS</p>
                <p className='stroke-text'>TO SHAPE YOU</p>
            </div>
            <div className="program_category text-white grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="card p-[3.2rem]">
                    <div>
                        <i className="far fa-dumbbell font-bold text-[2.4rem] sm:text-[2.6rem]"></i>
                    </div>
                    <br />
                    <br />
                    <h3 className='text-[1.6rem] sm:text-[2rem] font-semibold'>Strength Training</h3>
                    <br />
                    <p className='text-[1.4rem] sm:text-[1.8rem]'>In this program, you are trained to improve your strength through many exercises.</p>
                    <br />
                    <div>
                        <span className='text-[1.4rem] sm:text-[1.8rem]'>Join Now</span>
                        <i className="far fa-arrow-right font-bold pl-10 text-[1.8rem] sm:text-[2.4rem]"></i>
                    </div>
                </div>
                <div className="card p-[3.2rem]">
                    <div>
                        <i className="fas fa-running text-[2.4rem] sm:text-[2.6rem]"></i>
                    </div>
                    <br />
                    <br />
                    <h3 className='text-[1.6rem] sm:text-[2rem] font-semibold'>Cardio Training</h3>
                    <br />
                    <p className='text-[1.4rem] sm:text-[1.8rem]'>In this program, you are trained to do sequential moves in range of 20 until 30 minutes.</p>
                    <br />
                    <div>
                        <span className='text-[1.4rem] sm:text-[1.8rem]'>Join Now</span>
                        <i className="far fa-arrow-right font-bold pl-10 text-[1.8rem] sm:text-[2.4rem]"></i>
                    </div>
                </div>
                <div className="card p-[3.2rem]">
                    <div>
                        <i className="fas fa-fire text-[2.4rem] sm:text-[2.6rem]"></i>
                    </div>
                    <br />
                    <br />
                    <h3 className='text-[1.6rem] sm:text-[2rem] font-semibold'>Fat Burning</h3>
                    <br />
                    <p className='text-[1.4rem] sm:text-[1.8rem]'>This program is suitable for you who wants to get rid of your fat and lose their weight.</p>
                    <br />
                    <div>
                        <span className='text-[1.4rem] sm:text-[1.8rem]'>Join Now</span>
                        <i className="far fa-arrow-right font-bold pl-10 text-[1.8rem] sm:text-[2.4rem]"></i>
                    </div>
                </div>
                <div className="card p-[3.2rem]">
                    <div>
                        <i className="fas fa-heartbeat text-[2.4rem] sm:text-[2.6rem]"></i>
                    </div>
                    <br />
                    <br />
                    <h3 className='text-[1.6rem] sm:text-[2rem] font-semibold'>Health Fitness</h3>
                    <br />
                    <p className='text-[1.4rem] sm:text-[1.8rem]'>This programs is designed for those who exercises only for their body fitness not body building.</p>
                    <br />
                    <div>
                        <span className='text-[1.4rem] sm:text-[1.8rem]'>Join Now</span>
                        <i className="far fa-arrow-right font-bold pl-10 text-[1.8rem] sm:text-[2.4rem]"></i>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Program;