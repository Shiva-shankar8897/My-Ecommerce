import React from 'react'
import { WatchData } from '../Data/watch'

function Watches() {
    const firstfiveImages = WatchData.slice(0, 5)
    return (
        <>
            <h2>Watches</h2>
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

export default Watches
