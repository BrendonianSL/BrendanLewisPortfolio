'use client';

import { motion } from 'motion/react';
import background from '../_images/film_grain.png';
import Button from './button';
import { ProjectsSchema } from '../_data/schemas';

const Project = ({ ...props }: ProjectsSchema) => {
    return (
        <motion.a href={props.link} target='_blank' whileHover={{ scale: 1.05 }} whileTap={{ scale: .95 }} className='rounded-2xl border-[1.5px] border-[#333333] bg-[#1A1A1A] p-6 flex flex-col md:flex-row gap-4 lg:cursor-pointer overflow-hiddens relative'>
            <div className='w-12.5 h-12.5 bg-[#222222] rounded-lg flex items-center justify-center z-10 p-1 shrink-0'>
                <img src={`/${props.img}`} alt='Project Icon' />
            </div>
            <div className='shrink z-10 flex flex-col gap-2'>
                <h3 className='font-bold lowercase text-white'>{props.title}</h3>
                <p className='text-[#8B8B8B] max-w-175 w-full'>{props.desc}</p>
                <div className='border-[1.5px] border-[#333333] bg-[#1A1A1A] w-fit px-3 py-2 rounded-lg font-mono text-[14px]'>
                    {props.type}
                </div>
            </div>
            <img src={background.src} className='opacity-20 absolute top-0 left-0 h-full w-full' alt='Film Grain Background' />
            {/* {props.chip && <div className='absolute rounded-lg bg-cta top-0 left-0  -translate-x-1/2 -translate-y-1/2 px-2 py-1 -rotate-12 font-mono'>{props.chip}</div>} */}
        </motion.a>
    )
}

export default Project