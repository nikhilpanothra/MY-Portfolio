
import './Hero.css'
import profile_img from '../../assets/profile_img.png'
import AnchorLink from 'react-anchor-link-smooth-scroll'

export default function Hero() {
  return (
    <div id='hero' className='hero'>
        <img style={{width:'370px',height:'350px',borderRadius:'50%'}} src={profile_img} alt="" />
        <h1><span>I'm Nikhil Kumar,</span> Mern Stack developer </h1>
        <p>I am a MERN Stack developer with a passion for creating engaging user experiences and have built 3+ full-stack projects.</p>
        <div className='hero-action'>
            <div className='hero-connect'><AnchorLink className='anchor-link' offset={50} href='#contact' >Connect with Me </AnchorLink></div>
            <div className="hero-resume">My resume</div>
        </div>
    </div>
  )
}
