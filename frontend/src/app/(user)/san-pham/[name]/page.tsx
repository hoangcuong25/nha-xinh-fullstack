import React from 'react'

const page = ({ params }: { params: { name: string } }) => {
    return (
        <div>
            123 ten san pham
            {params.name}
        </div>
    )
}

export default page
