import { MapPin } from 'lucide-react';
import Socials from '../_blocks/socials';
import background from '../_images/HeroBackground.jpg';
import socialData from '../_data/social-data';

const Hero = () => {
    return (
        <section className='flex flex-col justify-end gap-4 lg:gap-0 lg:flex-row lg:items-end lg:justify-between h-screen w-screen p-8 lg:p-16 text-white bg-background relative overflow-hidden'>
            <div className='flex flex-col gap-4 z-10'>
                <span className='font-mono uppercase flex gap-2 leading-none items-center '><MapPin stroke={'white'} fillOpacity={30} />Based In Portland Oregon</span>
                <h1 className='font-satoshi font-black text-[48px] lg:text-[96px] leading-none lowercase'>Brendan L.</h1>
                <div className='flex gap-2'>
                    {socialData.map((social, idx) => {
                        return (<Socials key={idx} link={social.link} url={social.iconUrl} />)
                    })}
                </div>
            </div>
            <div className='w-100 font-mono text-[16px] lg:text-[20px] lowercase z-10'>
                I create intuitive web designs that help stand out and connect with users.
            </div>
            <img className='absolute top-0 left-0 opacity-20 w-full h-full object-cover' src={background.src} alt='CSS on a screen' />
        </section>
    )
}

export default Hero