import React , { useState , useEffect } from 'react'
import { Link } from 'react-router-dom'
import { FaBars } from 'react-icons/fa'
import { RiCloseCircleLine } from 'react-icons/ri'
import {links} from './resources/Data'

const NavBar = () => {

    const [ showSidebar , setShowSidebar ] = useState(false)

    useEffect(() => {
        if(window.innerWidth < 700){
            setShowSidebar(true)
        }
    } , [])

    const clikCLinkHandler = () => {
        showSidebar && setShowSidebar (false)
        window.scrollTo(0,0)
    }

    return (
    <>
        <nav>
            <div className='logo'>
                Zakarya Nabil BOUDIAF
            </div>
            <div className='nav-links-container nav-links-container-show'>
            {
                links.map((link) => {
                    return(
                        <div key={link.id} className='nav-link'> 
                            <Link to={link.url} className='link-n' onClick={clikCLinkHandler }>{link.text}</Link>
                        </div>
                    )
                })
            }
            </div>
            <div className='side-bar-toggle-btn align-center'>
                <FaBars onClick={() => { setShowSidebar (!showSidebar)} }/>
            </div>  
        </nav>
        {
            showSidebar &&
            <aside>
                <div className='side-bar'>
                    <div className='side-bar-close-btn'>
                        <RiCloseCircleLine onClick={() => { setShowSidebar (false)} }/>
                    </div>
                    <div className='nav-links-container sidebar-links-direction'>
                    {
                        links.map((link) => {
                            return(
                                <div key={link.id} className='nav-link'> 
                                    <Link to={link.url} className='link-n' onClick={clikCLinkHandler }>{link.text}</Link>
                                </div>
                            )
                        })
                    }
                    </div>
                </div>
            </aside>
        }
    </>
    )
}

export default NavBar
