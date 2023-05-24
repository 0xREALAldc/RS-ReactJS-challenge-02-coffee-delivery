import { ReactNode, createContext, useState } from 'react'

interface CartItem {
  id: string
  quantity: number
  name: string
  urlCoffeImage: string
  price: number
  total: number
}

interface DeliveryAddress {
  zipcode: string
  street: string
  number: string
  reference: string
  neighborhood: string
  city: string
  state: string
}

interface Cart {
  payment: 'Credit Card' | 'Debit Card' | 'Money'
  address: DeliveryAddress
  itemsCount: number
  items: CartItem[]
  total: number
  deliveryFee: number
}

interface FlavorType {
  name: string
}

export interface CoffeeProps {
  id: string
  name: string
  description: string
  quantity: number
  price: number
  urlCoffeImage: string
  flavor: FlavorType[]
}

const initialCart: Cart = {
  address: {
    city: '',
    neighborhood: '',
    number: '',
    reference: '',
    state: '',
    street: '',
    zipcode: '',
  },
  payment: 'Money',
  itemsCount: 0,
  items: [],
  deliveryFee: 0,
  total: 0,
}

interface CartContextType {
  cartItems: Cart
  AddCartItem: (coffeItem: CoffeeProps) => void
}

interface CartContextProviderProps {
  children: ReactNode
}

export const CartContext = createContext({} as CartContextType)

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cartItems, setCartItems] = useState<Cart>(initialCart)

  function AddCartItem(coffeeItem: CoffeeProps) {
    if (coffeeItem.quantity === 0) {
      return
    }

    setCartItems((state) => {
      const items = [] as CartItem[]
      state.items.forEach((item) => items.push(Object.assign({}, item)))

      const itemIndex = state.items.findIndex(
        (item) => item.id === coffeeItem.id,
      )

      if (itemIndex !== -1) {
        const itemChanged = items[itemIndex]

        itemChanged.quantity = itemChanged.quantity + coffeeItem.quantity
        itemChanged.total = itemChanged.quantity * itemChanged.price

        items[itemIndex] = itemChanged
      } else {
        const newItem: CartItem = {
          id: coffeeItem.id,
          name: coffeeItem.name,
          price: coffeeItem.price,
          quantity: coffeeItem.quantity,
          total: coffeeItem.quantity * coffeeItem.price,
          urlCoffeImage: coffeeItem.urlCoffeImage,
        }

        items.push(newItem)
      }

      return {
        ...state,
        itemsCount: state.itemsCount + coffeeItem.quantity,
        items,
      }
    })

    // reset the coffee item quantity
    // setCoffees((state) =>
    //   state.map((coffee) => {
    //     if (coffee.id === coffeeItem.id) {
    //       return { ...coffee, quantity: 0 }
    //     } else {
    //       return coffee
    //     }
    //   }),
    // )
  }

  return (
    <CartContext.Provider value={{ cartItems, AddCartItem }}>
      {children}
    </CartContext.Provider>
  )
}
