import React from 'react'
import { MenData } from '../Data/men'

function MensWear() {
  const firstfiveImages = MenData.slice(0, 5)
  return (
    <>
      <h2>Men's Fashion</h2>
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

export default MensWear
