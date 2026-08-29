'use client'

import { LucideIcon } from "lucide-react"
import { IconifyIcon } from '@iconify/types';
import { motion } from 'motion/react';

interface ButtonProps {
    text: string,
    icon?: IconifyIcon
    link: string
    theme: 'Light' | 'Dark' | 'CTA' | 'Border'
    download?: true
}

const Button = ({ icon: Icon, ...props }: ButtonProps) => {
    let color = '';

    switch (props.theme) {
        case 'Light':
            color = 'bg-white';
            break;
        case 'Dark':
            color = 'text-black';
            break;
        case 'CTA':
            color = 'bg-cta text-white';
            break;
        case 'Border':
            color = 'border border-white text-white bg-none';
            break;
        default:
            color = 'text-white';
            break;
    }

    if (props.download) {
        return (
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: .95 }} className={`${color} relative px-4 py-3 rounded-lg text-black w-fit font-mono font-medium`}>
                <a download className='flex gap-2 items-center uppercase justify-center' href={props.link}>{props.text}</a>
            </motion.div>
        )
    }

    return (
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: .95 }} className={`${color} relative px-4 py-3 rounded-lg text-black w-fit font-mono font-medium`}>
            <a className='flex gap-2 items-center uppercase justify-center' href={props.link} target='_blank'>{props.text}</a>
        </motion.div >
    )
}

export default Button;