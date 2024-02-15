import React from 'react'
import { SpeakersData } from "../Data/speaker";

function Speakers() {
    const firstfiveImages = SpeakersData.slice(0, 5)
    return (
        <>
            <h2>Speakers</h2>
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

export default Speakers
