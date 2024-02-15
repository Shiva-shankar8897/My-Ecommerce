import React from 'react'
import { TvData } from "../Data/tv";

function Television() {
  const firstfiveImages = TvData.slice(0, 5)
  return (
    <>
      <h2>Television's</h2>
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

export default Television
