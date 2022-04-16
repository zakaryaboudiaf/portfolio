import React from 'react'
import { useNavigate } from 'react-router-dom'

const NotFound = () => {

    const navigate = useNavigate()

    return (
        <div className='page-container'>
            <div className='not-found-section'>
                <h2 className='section-title'>Not Found</h2>
                 <button className='about-me-btn margin' onClick={() => { navigate('./')}}>Back to The Home Page</button>
            </div>
        </div>
    )
}

export default NotFound