import Logo from '../assets/logo.png';
function Footer() {
    return (
        <footer className=' bg-white'>
            <div className=' w-full max-w-[1170px] mx-auto '>
                <div className=' flex justify-between items-center text-[#1E0E62] py-8 border-b-2 border-[#EBEAED] '>
                    <div className='flex flex-row gap-[90px] '>
                        <a href="#"><img src={Logo} alt=""  className='w-[111px] '/></a>  
                        <span className='text-[16px] '>© 2020 Epixelab. All rights reserved.</span>                     
                    </div>
                    <div>
                        <nav>
                            <ul className='flex gap-[39px] '>
                                <li><a href="/">Portfolio</a></li>
                                <li><a href="#">How it Works</a></li>
                                <li><a href="#">Pricing</a></li>
                                <li><a href="#">About</a></li>
                                <li><a href="/login">Login</a></li>
                            </ul>
                        </nav>
                    </div>
                </div>
                <div className='py-[41px] text-gray-400 text-[16px] '>
                    <span>Startup Framework contains components and complex blocks which can easily be integrated into almost any design. </span>
                </div>

            </div>
        </footer>
    );
}

export default Footer;