import React  from "react"
import { services } from "../resources/Data"



const Services = () => {
 
    return(
    <>
        <section className='services-container'>
            {
                services.map( (service) => {
                    const {id , title , descreption , icon} = service
                    return(
                        <article className='service' key={service.id}>
                            <div className='service-logo'>{icon}</div>
                            <h3 className="service-title">{title}</h3>
                            <div className='service-underline'></div>
                            <p>{descreption}</p>  
                        </article>
                    )
                })
        }
        </section>
        
    </>
)}

export default Services