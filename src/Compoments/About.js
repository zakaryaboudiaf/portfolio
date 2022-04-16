import React from 'react'
import image from './resources/progImg.jpg'
import { skills , education } from './resources/Data'
import { Certifications } from './Subcompoments'

const About = () => {
    
    return (
        <div className='page-container'>
            <div className='summary-section'>
                <div className='summary-image-container'>
                    <img src={image} alt="" />
                </div>
                <div className='summary-container'>
                    <h2 className='section-title'>About Me</h2>
                    <div className='underline'></div>
                    <div className='summary'>
                        <p >
                            A fresh graduated student from Electrical and Electronic Engineering institute IGEE (Ex_INELEC)
                            Boumerdes, Algeria. Highly motivated, determined, and ambitious person who has an excellent ability
                            and willingness to learn and develop new skills in my field.
                        </p>
                    
                        <section className='skills'>
                        {
                            skills.map((skill) => {

                                const skillTitle = skill.skill
                                return(
                                    <article key={skill.id} className='skill'>
                                    { skillTitle }
                                    </article>
                                )
                            })
                        }
                    </section>
                    </div>
                </div>  
            </div>
            <div className="certifications-section">
                <h2 className='section-title'>{'Licenses & Certifications'}</h2>
                <div className='underline'></div>
                <Certifications />
            </div>
            <div className="education-section">
                <h2 className='section-title'>Education</h2>
                <div className='underline'></div>
                <div className='degrees-container'>
                {
                    education.map((item) => {
                        const {id , degree , title , school , period , schoolwebsite , image}  = item
                        return(
                            <article className='degree-container' key={item.id}>
                            <>
                                <img src={image} alt="" />
                                <h4>{`${degree} in ${title}`}</h4>
                                <p>{school}</p>
                                <h5>{period}</h5>
                                <div className='btn-school'>
                                    <button>
                                    <a href={schoolwebsite} target="_blank">the school website</a>
                                    </button> 
                                </div>    
                            </>
                            </article>
                        )})
                }
                </div>
            </div>
        </div>
    )
}

export default About