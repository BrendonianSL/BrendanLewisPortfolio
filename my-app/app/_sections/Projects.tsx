import Project from '../_blocks/project';
import Button from '../_blocks/button';
import projectData from '../_data/project-data';

const Projects = () => {
    return (
        <section className='flex items-center justify-center w-full relative overflow-hidden'>
            <div className='flex flex-col px-8 py-16 justify-center items-center max-w-350 w-full gap-12 z-10'>
                <div>
                    <h2 className='font-satoshi font-black text-center text-[64px] text-transparent lowercase bg-clip-text bg-linear-to-r from-white via-[#999999] to-[#999999]'>My Works</h2>
                    <p className='text-[#8B8B8B] mt-4 max-w-175 text-center w-full'>Feel free to check out some of my work! And come back frequently too! Some things may be new or updated!</p>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 w-full'>
                    {projectData.map((project, idx) => {
                        return (
                            <Project key={idx} {...project} />
                        )
                    })}
                </div>
                <Button link='https://github.com/BrendonianSL' text='Visit Github' theme='Light' />
            </div>
        </section>
    )
}

export default Projects