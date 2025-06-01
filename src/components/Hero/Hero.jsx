
import './Hero.css'
import profile_img from '../../assets/profile_img.png'
import AnchorLink from 'react-anchor-link-smooth-scroll'

export default function Hero() {
  return (
    <div id='hero' className='hero'>
        <img style={{width:'370px',height:'350px',borderRadius:'50%'}} src={profile_img} alt="" />
        <h1><span>I'm Nikhil Kumar,</span> React Js developer </h1>
        <p>I am React js developer, also I have a knowledge about MERN-Stack.I have done 3+ projects on Mern-stack.I'm Passionate about Creating Engaging User Experiences.</p>
        <div className='hero-action'>
            <div className='hero-connect'><AnchorLink className='anchor-link' offset={50} href='#contact' >Connect with Me </AnchorLink></div>
            <div className="hero-resume">My resume</div>
        </div>
    </div>
  )
}
