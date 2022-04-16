import React , { useState , useEffect } from 'react';
import emailjs from '@emailjs/browser'
import { Loading , Modal } from './Subcompoments';
import env from "react-dotenv";



const Contact = () => {

    const [ modal , setModal ] = useState({ show : false , success : true , message : 'hello'})
    const [ loading , setLoading ] = useState(false)


    const sendEmail = async (form) => {
        setLoading(true)
        try{
            const response = await emailjs.sendForm(env.SERVICE_ID, env.TEMPLATE_ID , form.current, env.USER_ID)
            setModal({ 
                show : true,
                success : true,
                message : 'the message was sent successfully'
            })
            
        }
        catch(error){
            setModal({ 
                show : true,
                success : false,
                message : 'something went wrong please try again later'
            })
        }
        setLoading(false)
    }


    const contactFormSubmitHandler = (e) => {
        e.preventDefault()
        const form = document.querySelector('.contact-form')
        sendEmail(form)
        form.name.value = ""
        form.email.value = ""
        form.message.value = ""
    
    }

    useEffect(() => {
        if(modal.show){
            setTimeout(() => {
                setModal({...modal , show : false})
            } , 2000)
        }
    } , [modal])

   
    return (
        <div className='page-container'>
            <div className="contact-section align-center">
                
                <div className="contact-form-container">
                    {
                        modal.show ? <Modal modal={modal}/> : null
                    }
                    {
                        loading ? <Loading /> : null
                    } 
                    <h2 className='section-title contact-title'>Contact Me</h2>
                    <form className='contact-form' onSubmit={(e) => { contactFormSubmitHandler(e) }}>
                        <input type="text" placeholder='Name' name='name' maxLength={40} className='form-input' required/>
                        <input type="email" placeholder='Email' name='email' maxLength={40} className='form-input' required/>
                        <textarea placeholder='Message' name='message' rows={13} className='form-input' required/>
                        <button type='submit' className='form-submit-btn'>submit</button>
                    </form>                  
                </div> 
            </div>
        </div>
    )
}

export default Contact
