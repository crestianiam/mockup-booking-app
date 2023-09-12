import React from 'react'

const Benefit = ({ title, text, children }) => {
    return (
        <div className='d-flex flex-column justify-space-between'>
            <div className='mb-2'>
                {children}
            </div>
            <h3 className="subtitle-paragraph">{title}</h3>
            <p>{text}</p>
        </div>
    )
}

export default Benefit
