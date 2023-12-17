import Link from 'next/link'
import Image from 'next/image'
import Banner from '../../public/banner.png'

const Landing = () => {
    return (
        <div className='flex items-center mt-40 justify-between'>
            <Image 
                src={Banner}
                quality={100}
            />
            <div className='flex flex-col space-y-5 ml-16'>
                <span className='text-4xl font-bold'>
                    All the world’s currencies at your fingertips.
                </span>
                <span className='text-xl'>
                    View currency rates of any nation. No fees. No hassle.
                </span>
                <button className='border-none text-xl bg-[#00415A] px-9 py-3 text-white w-fit rounded-3xl'>
                    Get Started
                </button>
            </div>
        </div>
    )
}

export default Landing