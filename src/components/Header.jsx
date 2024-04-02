import React from 'react'
import  "../Css/Header.css"
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import SearchIcon from '@mui/icons-material/Search';
function Header() {
  return (
    <div className='header'>
        <img src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="logo with arrow" />
        <div className="header-search">
            <input type="text" name="" id="" className='header-serach-input' />
            <SearchIcon className='header-search-icon' />
        </div>
        <div className="header-nav">
            <div className="header-option">
                <span className='header-option-line-one'>Hello</span>
                <span className='header-option-line-two'>Sign in</span>
            </div>
            <div className="header-option">
                <span className='header-option-line-one'>Returns</span>
                <span className='header-option-line-two'>& Orders</span>
            </div>
            <div className="header-option">
                <span className='header-option-line-one'>Your</span>
                <span className='header-option-line-two'>Prime</span>
            </div>

            <div className="header-option-basket">
            <ShoppingBasketIcon className='header-shopping-cart-icon' />
            <span className='header-option-line-two header-basket-count '>0</span>
            </div>
        </div>
    </div>
  )
}

export default Header