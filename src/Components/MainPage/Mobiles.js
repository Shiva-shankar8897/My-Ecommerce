import React from 'react'
import { MobileData } from '../Data/mobiles'

function Mobiles() {
  const firstfiveImages = MobileData.slice(0, 5)
  return (
    <>
      <h2>Mobiles</h2>
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

export default Mobiles
