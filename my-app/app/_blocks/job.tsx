import { JobSchema } from "../_data/schemas"

const Job = ({ ...props }: JobSchema) => {
    return (
        <div className='flex flex-col gap-5 text-white'>
            <div className='flex gap-4'>
                <div className='w-15 h-15 bg-[#222222] rounded-lg flex items-center justify-center p-3'>
                    <svg width="" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clipPath="url(#clip0_2756_159)">
                            <mask id="mask0_2756_159" style={
                                {
                                    maskType: 'luminance'
                                }
                            } maskUnits="userSpaceOnUse" x="0" y="0" width="32" height="32">
                                <path d="M32 0H0V32H32V0Z" fill="white" />
                            </mask>
                            <g mask="url(#mask0_2756_159)">
                                <path d="M14.3146 20.6722C14.4 20.7788 14.4106 20.9282 14.336 21.0455C14.208 21.2482 14.0906 21.4508 13.9733 21.6535C13.3013 22.8162 12.7466 24.0428 12.3093 25.3122C12.2453 25.4828 12.0106 25.5042 11.9253 25.3442C10.8053 23.3602 9.21596 21.6855 7.27462 20.4482C5.18396 19.1255 2.79462 18.3895 0.319954 18.3148C0.149287 18.3148 0.0106201 18.1655 0.0106201 17.9948V14.0055C0.0106201 13.8348 0.149287 13.6962 0.319954 13.6855C2.79462 13.6108 5.18396 12.8748 7.27462 11.5522C9.20529 10.3255 10.8053 8.64017 11.9253 6.65617C12.0213 6.49617 12.256 6.5175 12.3093 6.68817C12.7466 7.9575 13.3013 9.18417 13.9733 10.3468C14.0906 10.5495 14.2186 10.7522 14.336 10.9548C14.4106 11.0722 14.4 11.2215 14.3146 11.3282C12.832 13.1948 11.04 14.7308 8.97062 15.9042L8.81062 16.0002L8.97062 16.0962C11.04 17.2695 12.8426 18.8055 14.3146 20.6722Z" fill="url(#paint0_linear_2756_159)" />
                                <path d="M31.9999 14.0053V17.9947C31.9999 18.1653 31.8613 18.304 31.6906 18.3147C24.4159 18.5387 18.5386 24.416 18.3146 31.6907C18.3146 31.8613 18.1653 32 17.9946 32H14.0159C13.8346 32 13.6959 31.8507 13.6959 31.68C13.8453 25.248 17.3973 19.3067 23.0186 16.096L23.1786 16L23.0186 15.904C17.3866 12.6933 13.8453 6.752 13.6959 0.32C13.6959 0.138667 13.8346 0 14.0159 0H17.9946C18.1653 0 18.3039 0.138667 18.3146 0.309333C18.5386 7.584 24.4159 13.4613 31.6906 13.6853C31.8613 13.6853 31.9999 13.8347 31.9999 14.0053Z" fill="url(#paint1_linear_2756_159)" />
                            </g>
                        </g>
                        <defs>
                            <linearGradient id="paint0_linear_2756_159" x1="7.19825" y1="6.54736" x2="7.19825" y2="25.453" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#FF6044" />
                                <stop offset="1" stopColor="#993A29" />
                            </linearGradient>
                            <linearGradient id="paint1_linear_2756_159" x1="22.8479" y1="0" x2="22.8479" y2="32" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#FF6044" />
                                <stop offset="1" stopColor="#993A29" />
                            </linearGradient>
                            <clipPath id="clip0_2756_159">
                                <rect width="32" height="32" fill="white" />
                            </clipPath>
                        </defs>
                    </svg>
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