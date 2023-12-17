import Image from 'next/image'
import Link from 'next/link'

const Navbar = () => {
    return (
        <nav className="flex items-center justify-between">
            <Link className='font-semibold text-xl' href={'/'}>
                Rate<span className='text-cyan-500'>Shift</span>
            </Link>
            <div className='space-x-14 font-sans text-base'>
                <Link className='hover:underline' href={'/'}>
                    Home
                </Link>
                <Link className='hover:underline' href={'/about'}>
                    About Us
                </Link>
            </div>
        </nav>
    )
}

export default Navbar