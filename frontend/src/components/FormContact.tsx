import React from 'react'
import form_contact from '../../public/banner-nha-xinh-khong-gian-tu-van.jpg'
import Image from 'next/image'

const FormContact = () => {
    return (
        <div className='mt-16'>
            <div className='w-1/2'>

            </div>

            <Image alt='contact' src={form_contact} className='w-1/2'/>
        </div>
    )
}

export default FormContact
