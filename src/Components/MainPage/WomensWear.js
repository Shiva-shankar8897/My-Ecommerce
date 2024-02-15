import React from 'react'
import { WomenData } from '../Data/woman'

function WomensWear() {
    const firstfiveImages = WomenData.slice(0, 5)
    return (
        <>
            <h2>Women's Fashion</h2>
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

export default WomensWear
