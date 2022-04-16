import React , { useState , useEffect } from 'react'
import { Project } from './Subcompoments'
import { projects } from './resources/Data'



const Projects = () => {

    const [ filtredProjects , setFiltredProjects ] = useState(projects)

    const filterHandler = () => {
        const filterby = document.querySelector('#filter-projects').value
        let newFiltredProjects
        if(filterby === "all"){
            newFiltredProjects = projects
            
        }
        else{
            newFiltredProjects = projects.filter((project) => {
                const appTypes = project.appType 
                if(appTypes.includes(filterby)){
                    return project
                }
            })
        }
        console.log(newFiltredProjects)
        setFiltredProjects(newFiltredProjects)
    }

    return (
        <div className='page-container'>
            <div className='projects-section'>
                <h2 className='section-title'>Projects</h2>
                <div className='underline'></div>
                <div className='filter-projects-form-container'>
                    <select id='filter-projects' className="filter-projects" name="filter" onChange={filterHandler}>
                        <option value="all">All</option>
                        <option value="back-end">Back-end</option>
                        <option value="front-end">Front-end</option>
                    </select>
                </div>
                <div className="projects-container">
                    {
                        filtredProjects.map((project) => {
                            return(
                                <div className='project-container'>
                                    <Project project={project}/>
                                </div>
                            )
                        })
                    }
                </div>
            </div> 
        </div>
    )
}

export default Projects
