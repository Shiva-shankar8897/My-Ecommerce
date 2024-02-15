import React from 'react'
import { FurnitureData } from "../Data/furniture";

function Furniture() {
  const firstfiveImages = FurnitureData.slice(0, 5)
  return (
    <>
      <h2>Furniture</h2>
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

export default Furniture
