import React from 'react'
import { ComputerData } from '../Data/computers'

function Computers() {
  const firstfiveImages = ComputerData.slice(0, 5)
  return (
    <>
      <h2>Computers</h2>
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

export default Computers
