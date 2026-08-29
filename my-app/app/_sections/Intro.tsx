import image from '../_images/Brendan.jpg';
import Tool from '../_blocks/tool';
import introData from '../_data/intro-data';


const Intro = () => {
    return (
        <section className='w-full flex items-center justify-center text-white'>
            <div className='grow max-w-350 w-full flex flex-col lg:flex-row gap-8 lg:gap-16 items-center justify-center px-8 py-16'>
                <img className='w-full h-[500px] lg:w-100 rounded-lg object-cover object-top-left' src={image.src} alt='Picture of Brendan' />
                <div className='flex flex-col gap-8 w-full'>
                    <span className='font-satoshi text-[20px] lg:text-[32px] font-semibold w-full'>Im <span className='text-cta '>Brendan Lewis</span> — a front-end developer with the Portland Trail Blazers who believes the best digital experiences live at the intersection of design, function, and thoughtful interaction, creating experiences that bring fans closer to the game. I care about the details that make a product feel intuitive and intentional, from the way information is structured to the small interactions that make an experience feel effortless.</span>
                    <div className='flex flex-col gap-4'>
                        <p className='font-mono uppercase'>[Skills]</p>
                        <div className='flex gap-4'>
                            {introData.skills.map((skill, idx) => {
                                return <div key={idx} className='lowercase rounded-lg px-3 py-2 border border-[#333333] text-white font-mono w-fit flex items-center justify-center relative'>{skill.name}<img className='absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 -rotate-12' src={`/${skill.iconFile}`} alt='Icon' /></div>
                            })}
                        </div>
                    </div>
                    <div className='flex flex-col gap-4'>
                        <p className='font-mono uppercase '>[Software & Languages]</p>
                        <div className='flex gap-4 w-full'>
                            {introData.tools.map((tool, idx) => {
                                return <Tool key={idx} name={tool.name} iconFile={tool.iconFile} />
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Intro