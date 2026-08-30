import { JobSchema } from "../_data/schemas"

const Job = ({ ...props }: JobSchema) => {
    return (
        <div className='flex flex-col gap-5 text-white'>
            <div className='flex gap-4'>
                <div className='w-15 h-15 bg-[#222222] rounded-lg flex items-center justify-center p-3'>
                    <img src={props.iconFile} alt={props.company} className='w-full h-full object-contain' />
                </div>
                <div className='flex flex-col items-start gap-2'>
                    <span className='lowercase font-mono'>{props.position}</span>
                    <h3 className='font-bold lowercase'>{props.company}</h3>
                    <div className='flex gap-2 items-center justify-center text-mono text-[14px]'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-calendar-icon lucide-calendar"><path d="M8 2v3" /><path d="M16 2v3" /><rect x="3" y="3" width="18" height="18" rx="2" /><path d="M3 9h18" /></svg>{props.tenure}</div>
                </div>
            </div>
            <div className='flex gap-4'>
                {props.tags.map((tag, idx) => {
                    return (
                        <div key={idx} className='p-2 rounded-lg text-white font-mono text-[14px] bg-[#282828]'>
                            {tag}
                        </div>
                    )
                })}
            </div>
            <p className='font-mono text-[14px] text-[#8B8B8B] w-full max-w-175'>{props.desc}</p>
        </div>
    )
}

export default Job