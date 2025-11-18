import Logo from '../assets/logo.png'

function Navbar() {
    return (
        <>
            <header className=' h-20 w-full bg-white'>
                <div className=' w-full max-w-[1170px] mx-auto '>
                    <div className='flex justify-between py-[48px] gap-[114px] items-center'>
                        <div className='w-[240px] ' >
                            <img src={Logo} alt="Logo" />
                        </div>
                        <div className='flex w-full justify-between items-center'>
                            <nav>
                                <ul className='flex gap-8'>
                                    <li><a href="#" className='font-semibold'>Home</a></li>
                                    <li><a href="#">About Us</a></li>
                                    <li><a href="#">Our App</a></li>
                                    <li><a href="#">Contacts</a></li>
                                </ul>
                            </nav>
                            <div className='ml-8 flex gap-4'>
                                <button className='cursor-pointer' >Log in</button>
                                <button className='px-[30px] py-2.5 bg-[#FF6600] rounded-[10px] text-white cursor-pointer '>Sign up</button>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

        </>
    )
}

export default Navbar