import React from 'react'
import { AcData } from '../Data/ac'

function Airconditioner() {
    const firstfiveImages = AcData.slice(0, 5)
    return (
        <>
            <h2>Air Conditioners</h2>
            <div className='productsection'>
                {
                    firstfiveImages.map((item) => {
                        return (
                            <div className='imageBox'>
                                <img className='productImage' src={item.image} alt='pic' />
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}

export default Airconditioner
