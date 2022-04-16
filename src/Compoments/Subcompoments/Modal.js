import React from 'react'

const Modal = (props) => {
    const { success , message } = props.modal
    return (
        <div className='modal-container'>
            <p className='modal-text'>{message}</p>
        </div>
    )
}

export default Modal