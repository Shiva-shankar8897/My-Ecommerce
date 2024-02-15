import React from 'react'
import { useCart } from '../Context/AddCart'
import Navbar from '../MainPage/Navbar'

function UserCart() {
    const { CartItems, AddToCart, RemoveFromCart } = useCart()
    console.log(CartItems)
    return (
        <>
            <Navbar />
            <div>
                <h2 className='your-cart'>Your Cart</h2>
                {CartItems.length === 0 ?
                    (<p className='empty'>Your Cart is Empty</p>) :
                    <div>
                        {CartItems.map((item) => {
                            return (
                                <div className='cart-section'>
                                    <div className="cart-img">
                                        <img src={item.image} alt="" />
                                    </div>
                                    <div className="cart-details">
                                        <h3>{item.product}</h3>
                                        <h2>
                                            {item.price}
                                        </h2>
                                        <h3>{item.model}</h3>
                                    </div>
                                    <button className='removeBtn' onClick={() => RemoveFromCart(item)}>Remove</button>
                                </div>
                            )
                        })}
                    </div>

                }
            </div>
        </>
    )
}


export default UserCart
