import React from 'react'
import { FridgeData } from "../Data/fridge";

function Fridges() {
    const firstfiveImages = FridgeData.slice(0, 5)
    return (
        <>
            <h2>Fridges</h2>
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

export default Fridges
