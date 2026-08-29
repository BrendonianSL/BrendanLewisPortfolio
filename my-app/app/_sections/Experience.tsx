'use client';

import Job from "../_blocks/job"
import background from '../_images/Blazers.jpg';
import jobExperience from "../_data/experience-data";


const Experience = () => {
    return (
        <section className='flex items-center justify-center w-full relative overflow-hidden'>
            <div className='flex flex-col lg:flex-row px-8 py-16 justify-center max-w-350 w-full gap-12 z-10'>
                <div className='w-full flex flex-col gap-4'>
                    <h2 className='font-satoshi font-black text-[64px] text-transparent lowercase bg-clip-text bg-linear-to-r from-white via-[#999999] to-[#999999]'>The Journey</h2>
                    <p className='text-[#8B8B8B]'>Every experience has played a part in shaping the developer—and person—I am today. Each one has taught me something new, challenged me in different ways, and helped me grow along the way.
                    </p>
                </div>
                <div className='w-full flex flex-col gap-16'>
                    {
                        jobExperience.map((job, idx) => {
                            return <Job key={idx} {...job} />
                        })
                    }
                </div>
            </div>
            <img className=' grayscale absolute h-full w-full object-cover opacity-5' src={background.src} alt='Deni Avdija guarding Dillon Harper' />
        </section>
    )
}

export default Experience