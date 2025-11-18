import Facebook from '../assets/facebook.png'
import Twitter from '../assets/twitter.png'
import Linkedin from '../assets/dribble.png'
function TeamCard({img,name,role}) {
    return (
        <div>
            <div>
                <img src={img} alt="" />
                <p>{name}</p>
                <span>{role}</span>
            </div>
            <div>
                <a href="#"><img src={Facebook} alt="Facebook" /></a>
                <a href="#"><img src={Twitter} alt="Twitter" /></a>
                <a href="#"><img src={Linkedin} alt="Linkedin" /></a>
            </div>
        </div>
    )
}
export default TeamCard