
import React from 'react'
import BannerImage from '../assets/image-hero.png'
import LearMoreIcone from '../assets/learn-icon.svg'
import ServiceCard from '../component/ServiceCard.jsx'
import ChartIcon from '../assets/Chart.png'
import VideoIcon from '../assets/Video.png'
import ActivityIcon from '../assets/Activity.png'
import videoPlayer from '../assets/videoPlayer.png'
import Testimonial from '../component/Testimonial.jsx'
import Picture1 from '../assets/img1.jpg'
import Picture2 from '../assets/img2.jpg'
import Picture3 from '../assets/img3.jpg'
import Picture4 from '../assets/img4.jpg'
import TeamCard from '../component/TeamCard.jsx'
import TeamImg1 from '../assets/teamimg1.jpg'
import TeamImg2 from '../assets/teamimg2.jpg'
import TeamImg3 from '../assets/teamimg3.jpg'
import Mail from '../assets/mail1.png'

const services = [
    {
        title: 'Graphic Design',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dui mi, bibendum eu erat id, ultricies semper metus. Nunc dapibus laoreet dolor nec imperdiet.',
        icon: ActivityIcon
    },
    {
        title: 'Video Editing',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dui mi, bibendum eu erat id, ultricies semper metus. Nunc dapibus laoreet dolor nec imperdiet.',
        icon: VideoIcon
    },
    {
        title: 'Digital Marketing',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dui mi, bibendum eu erat id, ultricies semper metus. Nunc dapibus laoreet dolor nec imperdiet.',
        icon: ChartIcon
    }
]
const testimonials = [
    {
        picture: Picture1,
        comment: 'Get a fully retina ready site when you build with Startup Framework. Websites look sharper and more gorgeous on devices with retina display support',
        name: "Rayhan Curran"
    },
    {
        picture: Picture2,
        comment: 'As a business targeting high net worth individuals, we were looking for a slick, cool and mini-malistic design for our website',
        name: "Kayley Frame "
    },

    {
        picture: Picture3,
        comment: 'The most important part of the Startup Framework is the samples',
        name: "Gene Whitfield"
    },
    {
        picture: Picture4,
        comment: 'I’ve built my website with Startup just in one day, and it was ready-to-go. ',
        name: "Allan Kim"
    }

]
const teams = [
    {
        img: TeamImg1,
        name: "Vanessa Laird",
        role: "UI Designer"
    },
    {
        img: TeamImg2,
        name: "Mason Campbell",
        role: "UI Designer"
    },
    {
        img: TeamImg3,
        name: "Irea Evans",
        role: "Client Manager"
    }
]

function Home() {
    return (
        <main>
            <section>
                <div className='w-full max-w-[1170px] mx-auto '>
                    <div className='flex justify-between items-center gap-20 py-20'>
                        <div className='flex flex-col justify-center items-start gap-6'>
                            <div>
                                <h1 className='text-[48px] font-bold leading-14 text-black max-w-[540px] '>We boost
                                    growth for your statup business</h1>
                                <p className='text-[18px] leading-8 text-gray-600 font-medium  max-w-[540px] mt-6 mb-8'>Our goal is top at the heart of creativity services industry as a digital creator. In has a after comment</p>
                            </div>
                            <div className='flex flex-row gap-4 items-center'>
                                <button className='px-6 py-3 bg-[#FF6600] text-white rounded-[10px] mr-4 cursor-pointer '>Get Started</button>
                                <button className='px-6 py-3 gap-4 flex items-center rounded-[10px] cursor-pointer '>
                                    <img src={LearMoreIcone} alt="Learn More" /> Learn More</button>
                            </div>
                        </div>
                        <div>
                            <img src={BannerImage} alt="Banner" />
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className='w-full max-w-[1170px] mx-auto '>
                    <div className='flex justify-between items-center gap-20 py-20'>
                        <div className='flex flex-col justify-center items-center gap-6'>
                            <div className='flex flex-col justify-center items-center'>
                                <h2 className='text-[14px]  max-w-[540px] uppercase'>Services</h2>
                                <span className='text-[36px] font-bold leading-11 text-black max-w-[540px] mt-6 mb-8'>Our Vison & Our Goal</span>
                            </div>
                            <div className='grid grid-cols-3 gap-[57px]'>
                                {services.map((service, index) => (
                                    <ServiceCard
                                        key={index}
                                        title={service.title}
                                        description={service.description}
                                        icon={service.icon}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className='w-full max-w-[1170px] mx-auto '>
                    <div className='flex justify-between items-center gap-[159px] py-20 '>
                        <div className='gap-[73px] flex flex-col items-start'>
                            <div className='flex flex-col gap-[21px] w-[323px]'>
                                <h2 className='text-[#1E0E62] text-[22px] font-bold '>Many Blocks and Components</h2>
                                <p className='text-[#151439] opacity-40 text-[14px] font-medium'>Startup Framework contains components and complex blocks which can easily be integrated into almost any design. </p>
                            </div>
                            <button className='px-6 py-3 bg-white text-[#1E0E62] text-bold text-[16px] border-2 border-[#EBEAED] rounded-[100px] cursor-pointer'>Explore</button>
                        </div>
                        <div>
                            <img src={videoPlayer} alt="Video Player" />
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className='w-full max-w-[970px] mx-auto '>
                    <div className='flex justify-between items-center gap-20 py-20'>
                        <div className='flex flex-col justify-center items-center gap-6'>
                            <div className='flex flex-col justify-center items-center'>
                                <h2 className='text-[14px]  max-w-[540px] uppercase'>TESTMONIALS</h2>
                                <span className='text-[36px] font-bold leading-11 text-black max-w-[540px] mt-6 mb-8'>What Clients say about us</span>
                            </div>
                            <div className='grid grid-cols-2 gap-[30px]'>
                                {testimonials.map((testimonial, index) => (
                                    <Testimonial
                                        key={index}
                                        picture={testimonial.picture}
                                        comment={testimonial.comment}
                                        name={testimonial.name}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className='w-full max-w-[1170px] mx-auto '>
                    <div className='flex justify-between items-center gap-20 py-20'>
                        <div className='flex flex-col justify-center items-center gap-6'>
                            <div className='flex flex-col justify-center items-center'>
                                <h2 className='text-[14px]  max-w-[540px] uppercase'>OUR TEAM</h2>
                                <span className='text-[36px] font-bold leading-11 text-black max-w-[540px] mt-6 mb-8'>Meet The Team</span>
                            </div>
                            <div className='grid grid-cols-3 gap-[30px]'>
                                {teams.map((team, index) => (
                                    <TeamCard
                                        key={index}
                                        img={team.img}
                                        name={team.name}
                                        role={team.role}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className='w-full max-w-[1170px] mx-auto '>
                    <div className='flex justify-between items-center gap-20 py-20'>
                        <div className='flex flex-col justify-center items-center gap-6'>
                            <div className='flex flex-col justify-center items-center'>
                                <h2 className='text-[14px]  max-w-[540px] uppercase'>OUR TEAM</h2>
                                <span className='text-[36px] font-bold leading-11 text-black max-w-[540px] mt-6 mb-8'>Subscribe Our Newsletter</span>
                            </div>
                            <div className='flex flex-row gap-[49px] '>
                                <div className='flex flex-row justify-center items-center '>
                                    <img src={Mail} alt="" />
                                </div>
                                <div className='flex flex-col'>
                                    <p className="text-[18px] font-['Roboto',sans-serif]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
                                    <input type="email" placeholder="Your E-mail here..."  className="border-2 mt-[23px] mb-[51px] px-[67px] py-6 rounded-[49px] shadow-2xl border-gray-200 text-[24px] font-['Roboto',sans-serif] text-[#000000] "/>
                                    <button className="px-[30px] py-2.5 bg-[#FF6600] rounded-[10px] text-white cursor-pointer w-full">Subscribe Our Newsletter</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Home