import React, { useState } from 'react'
import { MobileData } from "../Data/mobiles";
import Navbar from '../MainPage/Navbar';
import { Link } from 'react-router-dom';

function MobilePage() {
    const [selectedProduct, setselectedProduct] = useState([])
    const CompanyHandler = (flip) => {
        if (selectedProduct.includes(flip)) {
            setselectedProduct(selectedProduct.filter(item => item !== flip))
        } else {
            setselectedProduct([...selectedProduct, flip])
        }
    }
    const FilteredProduct = selectedProduct.length === 0 ?
        MobileData : MobileData.filter((kart) => selectedProduct.includes(kart.company))
    return (
        <>
            <Navbar />
            <div className='Fullpage'>
                <div className='pro-selected'>
                    {MobileData.map((phone) => {
                        return (
                            <div className='pro-input'>
                                <label>
                                    <input type='checkbox'
                                        checked={selectedProduct.includes(phone.company)}
                                        onChange={() => CompanyHandler(phone.company)} />
                                    {phone.company}
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
                                    <Link to={`/Mobiles/${item.id}`}>
                                        <div className='pageImg'>
                                            <img src={item.image} alt='pic' />
                                        </div>
                                    </Link>
                                    <div className='proModel'>
                                        {item.company} , {item.model} , {item.price}
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

export default MobilePage
