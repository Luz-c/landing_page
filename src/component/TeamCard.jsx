import Facebook from '../assets/facebook.png'
import Twitter from '../assets/twitter.png'
import Linkedin from '../assets/dribble.png'
function TeamCard({ img, name, role }) {
    return (
        <div className="flex flex-col justify-center items-center w-[370px] rounded-[10px] border-2 border-[#EBEAED] ">
            <div className='flex flex-col justify-center items-center gap-4 py-6'>
                <img src={img} alt="" className='w-[120px] h-[120px] object-cover rounded-[200px] ' />
                <p className='text-[22px] text-[#1E0E62] font-bold '>{name}</p>
                <span className='text-[16px] letter-spacing-[2px] text-[#151439] opacity-40 uppercase'>{role}</span>
            </div>
            <div className='flex justify-between items-center w-full border-t-2 border-[#EBEAED]'>
                <div className='border border-[#EBEAED] w-full h-full flex justify-center items-center align-center p-4'> 
                    <a href="#"  ><img src={Twitter} alt="Twitter" /></a>
                </div>
                <div className='border border-[#EBEAED] w-full h-full flex justify-center items-center align-center p-4'>
                    <a href="#"  ><img src={Facebook} alt="Facebook" /></a>
                </div>
                <div className='border border-[#EBEAED] w-full h-full flex justify-center items-center align-center p-4'> 
                    <a href="#"  ><img src={Linkedin} alt="Linkedin" /></a>
                </div>

            </div>
        </div>
    )
}
export default TeamCard