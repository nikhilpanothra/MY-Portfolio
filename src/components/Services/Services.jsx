import  { useState, useEffect } from 'react';
import './Services.css';
import theme_pattern from '../../assets/theme_pattern.svg';
import Services_Data from '../../assets/services_data';

export default function Services() {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 700);

    useEffect(() => {
        const mediaQuery = window.matchMedia('(max-width: 768px)');

        const handleResize = (e) => {
            setIsMobile(e.matches);
        };

        mediaQuery.addEventListener('change', handleResize);
     
        setIsMobile(mediaQuery.matches);

    
        return () => {
            mediaQuery.removeEventListener('change', handleResize);
        };
    }, []);

    return (
        <div id='services' className='services'>
            <div className="services-title">
                <h1>My Services</h1>
                <img src={theme_pattern} alt="pattern" />
            </div>
            <div className="services-container">
                {Services_Data.map((services, index) => (
                    <div key={index} className='services-format'>
                        <h3>{services.s_no}</h3>
                        <h2>{services.s_name}</h2>
                        <p>
                            {isMobile
                                ? services.s_desc.slice(0, 50) + '...'
                                : services.s_desc}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
}
