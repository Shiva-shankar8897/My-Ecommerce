import React, { useState } from 'react'
import { BooksData } from '../Data/books'
import Navbar from '../MainPage/Navbar'
import { Link } from 'react-router-dom'

function BooksPage() {
    const [selectedProduct, setselectedProduct] = useState([])
    const CompanyHandler = (flip) => {
        if (selectedProduct.includes(flip)) {
            setselectedProduct(selectedProduct.filter(item => item !== flip))
        } else {
            setselectedProduct([...selectedProduct, flip])
        }
    }
    const FilteredProduct = selectedProduct.length === 0 ?
        BooksData : BooksData.filter((kart) => selectedProduct.includes(kart.author))
    return (
        <>
            <Navbar />
            <div className='Fullpage'>
                <div className='pro-selected'>
                    {BooksData.map((books) => {
                        return (
                            <div className='pro-input'>
                                <label>
                                    <input type='checkbox'
                                        checked={selectedProduct.includes(books.author)}
                                        onChange={() => CompanyHandler(books.author)} />
                                    {books.author}
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
                                    <Link to={`/Books/${item.id}`}>
                                        <div className='pageImg'>
                                            <img src={item.image} alt='pic' />
                                        </div>
                                    </Link>
                                    <div className='proModel'>
                                        {item.author} , {item.category} , {item.price}
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

export default BooksPage
