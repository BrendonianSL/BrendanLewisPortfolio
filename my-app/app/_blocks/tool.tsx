import {
    Tooltip,
    TooltipContent,
    TooltipTrigger,
} from "@/components/ui/tooltip";
import background from '../_images/film_grain.png';

const Tool = ({ name, iconFile }: { name: string, iconFile: string }) => {
    return (
        <Tooltip>
            <TooltipTrigger delay={100} className='w-12.5 h-12.5 rounded-lg border border-[#333333] bg-[#1A1A1A flex items-center justify-center relative'>
                <img src={`/${iconFile}`} alt='Icon' />
                <TooltipContent className='text-white'>
                    {name}
                </TooltipContent>
                <img src={background.src} className='opacity-20 absolute top-0 left-0 h-full w-full' alt='Film Grain Background' />
            </TooltipTrigger>
        </Tooltip>
    )
}

export default Tool