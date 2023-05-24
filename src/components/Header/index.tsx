import { HomeHeader } from './style'
import { MapPin, ShoppingCart } from 'phosphor-react'

import coffeLogo from '../../assets/coffe-delivery.svg'
import { NavLink } from 'react-router-dom'
import { useContext } from 'react'
import { CartContext } from '../../contexts/CartContext'

export function Header() {
  const { cartItems } = useContext(CartContext)

  return (
    <HomeHeader>
      <NavLink to="/" title="Home">
        <img src={coffeLogo} alt="" />
      </NavLink>
      <div>
        <span>
          <MapPin size={20} weight="fill" />
          <p>Chopinzinho, PR</p>
        </span>
        <span>
          <NavLink to="/checkout" title="Checkout">
            <ShoppingCart size={20} weight="fill" />
          </NavLink>
        </span>
        <p>{cartItems.itemsCount}</p>
      </div>
    </HomeHeader>
  )
}
