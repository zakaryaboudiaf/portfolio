import React , { useState , useEffect } from 'react'
import { certifications } from '../resources/Data'
import {FaAngleDoubleRight} from 'react-icons/fa'

const Certifications = () => {

    const [ selectedCertificateId , setSelectedCertificateId ] = useState(1)
    const [ selectedCertificate , setSelectedCertificate ] = useState(certifications[0])

    useEffect(() => {
        const cert = certifications.find((certificate) => certificate.id === selectedCertificateId)
        setSelectedCertificate(cert)
     } , [selectedCertificateId])

    return (
    <>
        <div className='certifications-container'>
            <div className='cert-select-container'>
                {
                    certifications.map((certificate) => {
                        const abrtitle = certificate.abrtitle
                        const classname = `cert-select-btn ${certificate.id === selectedCertificateId ? 'selected-certificate-stye' : null }`
                        return(
                            <button className={classname} onClick={() => setSelectedCertificateId(certificate.id)} key={certificate.id}>
                                {abrtitle}
                            </button> 
                        )
                    })
                }
            </div>
            <div className='cert-content-container'>
                <h3>{`${selectedCertificate.title}: ${selectedCertificate.subtitle}`}</h3>
                <h5>{`${selectedCertificate.academyName}`}</h5>
                <h5>{`Date: ${selectedCertificate.date}`}</h5>
                <h5>{`acquired capabilities:`}</h5>
                <section className='competances'>
                {
                    selectedCertificate.competences.map((competace) => {
                        return(
                            <article className='competance' key={competace.id}>
                            <div>
                                <FaAngleDoubleRight className='right'/>
                            </div>
                            <p>{competace.data}</p>
                            </article>
                        )
                    })
                }
                </section>
            </div>
        </div>
    </>
    )
}

export default Certifications