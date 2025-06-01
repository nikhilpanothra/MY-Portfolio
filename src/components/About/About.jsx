
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import about_profile from '../../assets/about_profile.jpg'

export default function About() {
    return (

        <div  id='about' className="about">
            <div className="about-title">
                <h1>About me</h1>
                <img src={theme_pattern} alt="" />
            </div>
            <div className="about-sections">
                <div className="about-left">
                    <img style={{width:'300px',height:'366px'}} src={about_profile} alt="" />
                </div>
                <div className="about-right">
                    <div className="about-para">
                        <p>I am a passionate Engineering Student Who love to explore new technologies and to a get the knowledge from where i can get. My aim is to create innovation ideas and solution to the real world problems which can leads to develop the organization in the best way possible.</p>
                        <p>I'm a React js developer with a knack for building visuallt stunning, user-friendly, and Responsive Websites.</p>

                    </div>
                    <div className="about-skills">
                        <div className="about-skill"><p>HTML & CSS </p><hr style={{ width: '80%' }} /> </div>
                        <div className="about-skill"><p>Javascript</p> <hr style={{ width: '70%' }} /></div>
                        <div className="about-skill"><p>React JS</p> <hr style={{ width: '65%' }} /></div>
                        <div className="about-skill"><p>Node/Express JS</p><hr style={{ width: '35%' }} /></div>
                    </div>
                </div>
            </div>
            <div className="about-achievements">
                <div className="about-achievement">
                    <h1>1+</h1>
                    <p>YEARS OF EXPERIENCE</p>
                </div>
                <hr />
                <div className="about-achievement">
                    <h1>5+</h1>
                    <p>PROJECTS COMPLETED</p>
                </div>
                <hr />
                <div className="about-achievement">
                    <h1>4+</h1>
                    <p>HAPPY CLIENTS </p>
                </div>

            </div>
        </div>




    )
}
