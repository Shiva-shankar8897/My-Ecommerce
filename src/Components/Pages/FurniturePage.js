import React, { useState } from 'react'
import { FurnitureData } from "../Data/furniture";
import Navbar from '../MainPage/Navbar';
import { Link } from 'react-router-dom';

function FurniturePage() {
    const [selectedProduct, setselectedProduct] = useState([])
    const CompanyHandler = (flip) => {
        if (selectedProduct.includes(flip)) {
            setselectedProduct(selectedProduct.filter(item => item !== flip))
        } else {
            setselectedProduct([...selectedProduct, flip])
        }
    }
    const FilteredProduct = selectedProduct.length === 0 ?
        FurnitureData : FurnitureData.filter((kart) => selectedProduct.includes(kart.type))
    return (
        <>
            <Navbar />
            <div className='Fullpage'>
                <div className='pro-selected'>
                    {FurnitureData.map((furniture) => {
                        return (
                            <div className='pro-input'>
                                <label>
                                    <input type='checkbox'
                                        checked={selectedProduct.includes(furniture.type)}
                                        onChange={() => CompanyHandler(furniture.type)} />
                                    {furniture.type}
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
                                    <Link to={`/Furniture/${item.id}`}>
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

export default FurniturePage
