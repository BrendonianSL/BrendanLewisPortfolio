const Socials = ({ url, link }: { url: string, link: string }) => {
    return (
        <a href={link} target="_blank" className='border border-[#333333] bg-background p-1 rounded-lg flex items-center justify-center w-11.25 h-11.25 lg:hover:cursor-pointer'>
            <img className='fill-white w-[24px] h-[24px]' src={url} alt='Social Media Icon' />
        </a>
    )
}

export default Socials