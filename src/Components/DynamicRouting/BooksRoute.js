import React from 'react'
import { BooksData } from '../Data/books';
import { useParams } from 'react-router-dom';
import { useCart } from '../Context/AddCart';
import Navbar from '../MainPage/Navbar';

function BooksRoute() {
  const { id } = useParams()
  const { AddToCart, CartItems } = useCart()
  const Product = BooksData.find((item) => item.id === id)
  return (
    <>
      <Navbar />
      <div className='ind-section'>
        <div className='ind-image'>
          <img src={Product.image} alt='pic' />
        </div>
        <div className='ind-details space'>
          <div className='ind-company'>
            <h2>{Product.title}</h2>
          </div>
          <div className='ind-model space'>
            <h3>{Product.model}</h3>
          </div>
          <div className='ind-price space'>
            <h2>{Product.price}</h2>
          </div>
          <div className='ind-desc space'>
            <p>{Product.description}</p>
          </div>
          <button onClick={() => AddToCart(Product)}>Add to Cart</button>
        </div>
      </div>
    </>
  )
}

export default BooksRoute
