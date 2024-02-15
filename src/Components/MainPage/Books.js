import React from 'react'
import { BooksData } from '../Data/books'

function Books() {
  const firstfiveImages = BooksData.slice(0, 5)
  return (
    <>
      <h2>Books</h2>
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

export default Books
