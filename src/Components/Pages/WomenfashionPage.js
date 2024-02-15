import React, { useState } from 'react'
import { WomenData } from "../Data/woman";
import Navbar from '../MainPage/Navbar';
import { Link } from 'react-router-dom';

function WomenfashionPage() {
    const [selectedProduct, setselectedProduct] = useState([])
    const CompanyHandler = (flip) => {
        if (selectedProduct.includes(flip)) {
            setselectedProduct(selectedProduct.filter(item => item !== flip))
        } else {
            setselectedProduct([...selectedProduct, flip])
        }
    }
    const FilteredProduct = selectedProduct.length === 0 ?
        WomenData : WomenData.filter((kart) => selectedProduct.includes(kart.type))
    return (
        <>
            <Navbar />
            <div className='Fullpage'>
                <div className='pro-selected'>
                    {WomenData.map((women) => {
                        return (
                            <div className='pro-input'>
                                <label>
                                    <input type='checkbox'
                                        checked={selectedProduct.includes(women.type)}
                                        onChange={() => CompanyHandler(women.type)} />
                                    {women.type}
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
                                    <Link to={`/WomenFashion/${item.id}`}>
                                        <div className='pageImg'>
                                            <img src={item.image} alt='pic' />
                                        </div>
                                    </Link>
                                    <div className='proModel'>
                                        {item.category} , {item.model} , {item.price}
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

export default WomenfashionPage
