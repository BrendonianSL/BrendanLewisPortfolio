import Button from '../_blocks/button';
import { Mail } from 'lucide-react';
import dateConverter from '../../_lib/date-converter';

const Footer = () => {
    return (
        <div className='bg-neutral-900 w-full flex flex-col items-center justify-center'>
            <div className='max-w-350 w-full flex flex-col gap-8 px-8 py-16'>
                <h2 className='font-satoshi font-semibold text-[32px] lg:text-[64px] text-transparent lowercase bg-clip-text bg-linear-to-r from-white via-[#999999] to-[#999999]'>Developing Experiences For Users No Matter Where They Are</h2>
                <p className=' text-[#929292] max-w-162.5 w-full'>{`Feel free to contact me if having any questions.`}</p>
                <div className='flex gap-4'>
                    <Button theme='CTA' text='Email Me' link='mailto:bscottlewis04@gmail.com' />
                    <Button download link='/BLResume.pdf' theme='Border' text='Download CV' />
                </div>
                <div className='bg-[#929292] w-full h-px'></div>
                <div className='flex flex-col items-center md:flex-row md:justify-between w-full'>
                    <p>{`Created By Brendan Lewis`}</p>
                    <p>{dateConverter()}</p>
                </div>
            </div>
        </div>
    )
}

export default Footer;