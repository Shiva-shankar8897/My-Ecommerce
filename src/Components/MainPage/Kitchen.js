import React from 'react'
import { KitchenData } from '../Data/kitchen'

function Kitchen() {
    const firstfiveImages = KitchenData.slice(0, 5)
    return (
        <>
            <h2>Kitchen</h2>
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

export default Kitchen
