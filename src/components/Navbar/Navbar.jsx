
import { useRef, useState } from 'react'
import './Navbar.css'
import underline from '../../assets/nav_underline.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import menu_open from '../../assets/menu_open.svg'
import menu_close from '../../assets/menu_close.svg'
export default function Navbar() {
  const [menu, Setmenu] = useState()
  const menuRef =useRef()

  const openMenu =()=>{
    menuRef.current.style.right ='0';
  }
  const closeMenu=()=>{
    menuRef.current.style.right ="-350px";
  }
  return (
    <div id='navbar' className='navbar'>
      <div className="logo">
        <svg width="105" height="60" viewBox="0 0 110 50" xmlns="http://www.w3.org/2000/svg">
          <text x="10" y="40" font-family="Arial, sans-serif" font-size="32" fill="white">N|kH|L</text>
        </svg>
        <img src={underline} alt="" />
      </div>

     <img src={menu_open} onClick={openMenu} alt=""  className='nav-mob-open'/>
      <ul ref={menuRef} className='nav-menu'>
        <img src={menu_close} onClick={closeMenu} alt="" className="nav-mob-close" />
        <li> <AnchorLink className='anchor-link' href='#home' > <p onClick={() => { { Setmenu('home') } }} >Home</p>{menu === 'home' ? <img src={underline} alt="" /> : <></>}</AnchorLink></li>
        <li> <AnchorLink className='anchor-link' offset={50} href='#about' > <p onClick={() => { { Setmenu('about me') } }} >About me</p>{menu === 'about me' ? <img src={underline} alt="" /> : <></>}</AnchorLink></li>
        <li> <AnchorLink className='anchor-link' offset={50} href='#services' > <p onClick={() => { { Setmenu('services') } }} >Services</p>{menu === 'services' ? <img src={underline} alt="" /> : <></>}</AnchorLink></li>
        <li> <AnchorLink className='anchor-link' offset={50} href='#work' > <p onClick={() => { { Setmenu('portfolio') } }} >Portfolio</p>{menu === 'portfolio' ? <img src={underline} alt="" /> : <></>}</AnchorLink></li>
        <li> <AnchorLink className='anchor-link' offset={50} href='#contact' ><p onClick={() => { { Setmenu('contact') } }} >Contact</p> {menu === 'contact' ? <img src={underline} alt="" /> : <></>}</AnchorLink> </li>
      </ul>
      <div className='nav-connect'><AnchorLink className='anchor-link' offset={50} href='#contact' >Connect with Me </AnchorLink></div>
    </div>
  )
}
