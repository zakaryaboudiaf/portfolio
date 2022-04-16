import React  from 'react'
import { useNavigate } from 'react-router-dom'
import profileImg from './resources/k.jpg'
import { socialProfiles } from './resources/Data'
import { Services } from './Subcompoments'


const Home = () => {

    const navigate = useNavigate()

    const moreAboutMeHandler = () => {
        navigate('./about')
        window.scrollTo(0,0)
    }

    return (
        <div className='page-container'>
            <div className="profile-section">
                <div className='profile'>
                    <img src={profileImg} alt="" className='profile-image'/>
                    <h2 className='profile-name h'>I'm Zakarya</h2>
                    <h3 className='profile-title h'>{"Web Developer & Computer Network Administrator"}</h3>
                    <button className='profile-contact-btn' onClick={() => navigate('./contact')}>Contact Me</button>
                    <div className='flex profile-socialProfiles'>
                        {
                            socialProfiles.map((profile) => {
                                return(
                                    <div key={profile.id} className='align-center'>
                                        <a href={profile.link} target="_blank" className='social-link'>{profile.icon}</a>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>      
            </div>
            <div className='services-section'>
                <h2 className='section-title'>Services</h2>
                <div className='underline'></div>
                <Services />
                <button className='about-me-btn' onClick={() => moreAboutMeHandler()}>More About Me and My Skills</button>
            </div>
    
        </div>
    )
}

export default Home