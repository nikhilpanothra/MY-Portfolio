
import './Footer.css'
import user_icon from '../../assets/user_icon.svg'
import underline from '../../assets/nav_underline.svg'


export default function Footer() {
    return (
        <div id='footer' className='footer'>
            <div className="footer-top">
                <div className="footer-top-left">
                     <div className="footer-logo">
                        <svg width="105" height="60" viewBox="0 0 110 50" xmlns="http://www.w3.org/2000/svg">
                            <text y="40" font-family="Arial, sans-serif" font-size="32px" fill="white">N|kH|L</text>
                        </svg>
                         <img src={underline} alt="" />
                  
                        </div>
                    
                    <p> I am a React js Developer from, Jammu (J&k) with 1 year of expericence. Hire me  </p>
                </div>
                <div className="footer-top-right">
                    <div className="footer-email-input">
                        <img src={user_icon} alt="" />
                        <input type="email" placeholder='Enter your email' />
                    </div>
                    <div className="footer-subscribe">Subscribe</div>
                </div>
            </div>
            <hr />
            <div className="footer-bottom">
                <p className="footer-bottom-left">
                    © 2025 Nikhil Kumar. All right reserved

                </p>
                <div className="footer-bottom-right">
                    <div className="socialmedia">
                        <a href="https://github.com/nikhilpanothra"><i class='bx bxl-github'></i></a>
                        <a href="https://www.instagram.com/nikhil_panothra?igsh=MXhuZWV1b29sZDdwcw==" target="_blank"><i
                            class='bx bxl-instagram'></i></a>
                        <a href="https://www.linkedin.com/in/nikhil-kumar-754407279" target="_blank"><i
                            class='bx bxl-linkedin'></i></a>
                    </div>
                    <p>Term of Services</p>
                    <p>Privacy Policy</p>
                    <p>Connect with me

                    </p>
                </div>
            </div>

        </div>
    )
}
