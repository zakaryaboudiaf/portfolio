import React from 'react'
import {ImRedo2} from 'react-icons/im'

const Project = (props) => {

    const { name , appType , codeUrl , deployedUrl , image , tools } = props.project

    return (
    <>
        
            <div className="project-image-container">
                <img src={image} alt="img" className='project-image' />
            </div>
            <div className="project-title-container">
                {name}
            </div>
            <div className='project-informations'>
                <div className="project-tools-container">
                    {
                        tools.map((tool) => {
                            return(
                                <div className="project-tool" key={tool.id}>
                                    {tool.name}
                                </div>
                            )
                        })
                    }
                </div>
                <div className="projects-btns-container">
                    <button className='project-btn'>
                        <a href={deployedUrl} target="_blank"> deployed project </a>
                    </button>
                    <button className='project-btn'>
                        <a href={codeUrl}> the source code </a>
                    </button>
                </div>
                <div className='project-direct-btn-container align-center'>
                    <a href={deployedUrl} target="_blank">
                        <div>
                            <ImRedo2 className='project-direct-btn-icon'/>
                        </div>    
                    </a>
                </div>
            </div>
    </>
    )
}

export default Project