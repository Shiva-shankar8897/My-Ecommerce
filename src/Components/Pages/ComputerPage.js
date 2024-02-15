import React, { useState } from 'react'
import { ComputerData } from "../Data/computers";
import Navbar from '../MainPage/Navbar';
import { Link } from 'react-router-dom';

function ComputerPage() {
    const [selectedProduct, setselectedProduct] = useState([])
    const CompanyHandler = (flip) => {
        if (selectedProduct.includes(flip)) {
            setselectedProduct(selectedProduct.filter(item => item !== flip))
        } else {
            setselectedProduct([...selectedProduct, flip])
        }
    }
    const FilteredProduct = selectedProduct.length === 0 ?
        ComputerData : ComputerData.filter((kart) => selectedProduct.includes(kart.company))
    return (
        <>
            <Navbar />
            <div className='Fullpage'>
                <div className='pro-selected'>
                    {ComputerData.map((computer) => {
                        return (
                            <div className='pro-input'>
                                <label>
                                    <input type='checkbox'
                                        checked={selectedProduct.includes(computer.company)}
                                        onChange={() => CompanyHandler(computer.company)} />
                                    {computer.company}
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
                                    <Link to={`/Computers/${item.id}`}>
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

export default ComputerPage
