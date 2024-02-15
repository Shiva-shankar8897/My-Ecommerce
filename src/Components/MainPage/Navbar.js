import React from 'react'
import { Link } from 'react-router-dom'
import { useCart } from '../Context/AddCart'

function Navbar() {
    // const Products = ["Mobiles", "Computers", "Watches", "Men Fashion", "Women Fashion","Furniture", "Air Conditioners","Kitchen","Television's","Books","Fridge","Speakers"]
    const { CartItems } = useCart()
    return (
        <div className="navbar-section">
            <div className='navsection'>
                <div className='title'>
                    <Link to='/' className='link'> <h2>E-commerce</h2></Link>
                </div>
                <div className='search'>
                    <input type='text' placeholder='Search...' />
                    {/* <select  onClick={(e) => (e.target.value)}>
                        {Products.map((item, index) => (
                            <option value={item} key={index}>{item}</option>
                        ))
                        }
                    </select> */}
                 
                </div>
                <div className='user'>
                    <div className='user-detail'>
                        signIn/signUp
                    </div>
                </div>
                <Link to='/Cart' className='link'>
                    <div className='cart'>
                        Cart
                        <span>{CartItems.length}</span>
                    </div></Link>
            </div>
            <div className='subMenu'>
                <ul>
                    <Link to='/Mobiles' className='link'><li>Mobiles</li></Link>
                    <Link to='/Computers' className='link'><li>Computers</li></Link>
                    <Link to='/Watches' className='link'><li>Watches</li></Link>
                    <Link to='/MenFashion' className='link'><li>Men Fashion</li></Link>
                    <Link to='/WomenFashion' className='link'><li>Women Fashion</li></Link>
                    <Link to='/Furniture' className='link'><li>Furniture</li></Link>
                    <Link to='/AC' className='link'><li>Air Conditioners</li></Link>
                    <Link to='/Kitchen' className='link'><li>Kitchen</li></Link>
                    <Link to='/TV' className='link'><li>Television's</li></Link>
                    <Link to='/Books' className='link'><li>Books</li></Link>
                    <Link to='/Fridge' className='link'><li>Fridge</li></Link>
                    <Link to='/Speakers' className='link'><li>Speakers</li></Link>
                </ul>
            </div>
        </div>
    )
}

export default Navbar
