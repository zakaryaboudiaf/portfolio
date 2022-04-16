import React from 'react'
import { socialProfiles } from './resources/Data'

const Footer = () => {
    return (
        <footer className='flex'>
        {
            socialProfiles.map((profile) => {
                return(
                    <div key={profile.id} className='align-center'>
                        <a href={profile.link} target="_blank" className='social-link'>{profile.icon}</a>
                    </div> 
                )
            })
        }
        </footer>
    )
}

export default Footer