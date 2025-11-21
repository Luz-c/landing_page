import React from 'react';
import BannerImage from '../assets/image-hero.png'; 
import ActivityIcon from '../assets/Activity.png'; 
import VideoIcon from '../assets/Video.png'; 
import ChartIcon from '../assets/Chart.png';
import TeamCard from '../component/TeamCard.jsx'; 
import TeamImg1 from '../assets/teamimg1.jpg'; 
import TeamImg2 from '../assets/teamimg2.jpg'; 
import TeamImg3 from '../assets/teamimg3.jpg'; 
import ServiceCard from '../component/ServiceCard.jsx';

const highlights = [
    {
        title: 'Innovation Continue',
        description: 'Nous investissons constamment dans les nouvelles technologies et méthodologies pour garantir des solutions avant-gardistes.',
        icon: ActivityIcon 
    },
    {
        title: 'Approche Centrée sur le Client',
        description: 'Chaque projet est traité avec une attention personnalisée, assurant que nos solutions répondent parfaitement à vos objectifs uniques.',
        icon: VideoIcon 
    },
    {
        title: 'Expertise Reconnue',
        description: 'Notre équipe est composée de professionnels chevronnés ayant prouvé leur capacité à livrer des résultats exceptionnels.',
        icon: ChartIcon 
    }
];

const teams = [
    {
        img: TeamImg1,
        name: "Vanessa Laird",
        role: "Fondatrice & CEO"
    },
    {
        img: TeamImg2,
        name: "Mason Campbell",
        role: "Directeur Technique (CTO)"
    },
    {
        img: TeamImg3,
        name: "Irea Evans",
        role: "Responsable Opérations"
    }
];




function About() {
    return (
        <main>
            <section className='py-20 bg-gray-50'>
                <div className='w-full max-w-[1170px] mx-auto px-4'>
                    <div className='flex flex-col lg:flex-row justify-between items-center gap-16'>

                        <div className='flex flex-col justify-center items-start gap-6'>
                            <div>
                                <h1 className='text-[48px] font-bold leading-14 text-black max-w-[540px] '>Nous stimulons la croissance de votre startups</h1>
                                <p className='text-[18px] leading-8 text-gray-600 font-medium  max-w-[540px] mt-6 mb-8'>Our goal is top at the heart of creativity services industry as a digital creator. In has a after comment</p>
                            </div>
                            <div className='flex flex-row gap-4 items-center'>
                                <button className='px-6 py-3 bg-[#FF6600] text-white rounded-[10px] mr-4 cursor-pointer '>Get Started</button>
                            
                            </div>
                        </div>

                        <div className='order-first lg:order-last'>
                            <img src={BannerImage} alt="À propos de nous" className='rounded-[10px]' />
                        </div>
                    </div>
                </div>
            </section>

            <section className='py-20'>
                <div className='w-full max-w-[970px] mx-auto px-4'>
                    <div className='flex flex-col items-center text-center'>
                        <div className='flex flex-col justify-center items-center'>
                            <h2 className='text-[14px]  max-w-[540px] uppercase'>About</h2>
                            <span className='text-[36px] font-bold leading-11 text-black max-w-[540px] mt-6 mb-8'>What Clients say about us</span>
                        </div>

                        <div className='grid md:grid-cols-2 gap-10 text-left'>
                            <p className='text-[18px] leading-8 text-gray-600'>
                                Fondée il y a 5 ans avec la vision de simplifier le marketing numérique et le design pour les startups, notre entreprise a grandi grâce à un engagement inébranlable envers la qualité et la transparence. Nous croyons que chaque marque, quelle que soit sa taille, mérite une présence en ligne puissante.
                            </p>
                            <p className='text-[18px] leading-8 text-gray-600'>
                                Nos valeurs fondamentales Innovation, Intégrité et Impact ,guident chacune de nos décisions. Nous travaillons en étroite collaboration avec nos clients pour créer des solutions qui ne sont pas seulement belles, mais qui génèrent de réels résultats commerciaux.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className='py-20 bg-gray-50'>
                <div className='w-full max-w-[1170px] mx-auto px-4'>
                    <div className='flex flex-col items-center text-center gap-10'>
                        <div className='flex flex-col justify-center items-center'>
                            <h2 className='text-[14px]  max-w-[540px] uppercase'>TESTMONIALS</h2>
                            <span className='text-[36px] font-bold leading-11 text-black max-w-[540px] mt-6 mb-8'>What Clients say about us</span>
                        </div>

                        <div className='grid md:grid-cols-3 gap-[57px]'>
                            {highlights.map((item, index) => (
                                <ServiceCard
                                    key={index}
                                    title={item.title}
                                    description={item.description}
                                    icon={item.icon}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <section className='py-20'>
                <div className='w-full max-w-[1170px] mx-auto px-4'>
                    <div className='flex flex-col justify-center items-center gap-6'>
                        <div className='flex flex-col justify-center items-center'>
                            <h2 className='text-[14px]  max-w-[540px] uppercase'>TESTMONIALS</h2>
                            <span className='text-[36px] font-bold leading-11 text-black max-w-[540px] mt-6 mb-8'>What Clients say about us</span>
                        </div>

                        <div className='grid md:grid-cols-3 gap-[30px]'>
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
            </section>
        </main>
    );
}

export default About;