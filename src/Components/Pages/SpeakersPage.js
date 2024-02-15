import React, { useState } from 'react'
import { SpeakersData } from '../Data/speaker'
import Navbar from '../MainPage/Navbar'
import { Link } from 'react-router-dom'

function SpeakersPage() {
    const [selectedProduct, setselectedProduct] = useState([])
    const CompanyHandler = (flip) => {
        if (selectedProduct.includes(flip)) {
            setselectedProduct(selectedProduct.filter(item => item !== flip))
        } else {
            setselectedProduct([...selectedProduct, flip])
        }
    }
    const FilteredProduct = selectedProduct.length === 0 ?
        SpeakersData : SpeakersData.filter((kart) => selectedProduct.includes(kart.brand))
    return (
        <>
            <Navbar />
            <div className='Fullpage'>
                <div className='pro-selected'>
                    {SpeakersData.map((speakers) => {
                        return (
                            <div className='pro-input'>
                                <label>
                                    <input type='checkbox'
                                        checked={selectedProduct.includes(speakers.brand)}
                                        onChange={() => CompanyHandler(speakers.brand)} />
                                    {speakers.brand}
                                </label>
                            </div>
                        )
                    })}
                </div>

                <div className='pageSection'>
                    {
                        FilteredProduct.map((item) => {
                            return (
                                <div>
                                    <Link to={`/Speakers/${item.id}`}>
                                        <div className='pageImg'>
                                            <img src={item.image} alt='pic' />
                                        </div>
                                    </Link>
                                    <div className='proModel'>
                                        {item.brand} , {item.model} , {item.price}
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default SpeakersPage
