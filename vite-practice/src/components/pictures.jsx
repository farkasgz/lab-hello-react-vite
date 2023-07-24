import icon1 from '../assets/icon1.png'
import icon2 from '../assets/icon2.png'
import icon3 from '../assets/icon3.png'
import icon4 from '../assets/icon4.png'
import ironhackLogo from '../assets/ironhack-logo-xs.png'
import menu from '../assets/menu-top-xs.png'

const Pictures = () => {
    return (
        <>            
            <div className='topBit'>
                <nav>                
                    <img src={ironhackLogo} alt="ironhack logo" />
                    <img src={menu} alt="menu" />
                </nav>
                <h1>Say hello to ReactJS</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla porro reprehenderit, maiores id quam ipsam ipsum maxime mollitia iste laboriosam illo eveniet quaerat placeat rerum officia explicabo, atque blanditiis temporibus?</p>
                <button>Awesome</button>
            </div>
            
            
            <div className='logos'>            
                <img src={icon1} alt="icon one" />
                <img src={icon2} alt="icon two" />
                <img src={icon3} alt="icon three" />
                <img src={icon4} alt="icon four" />
            </div>


        </>
    )
}

export default Pictures