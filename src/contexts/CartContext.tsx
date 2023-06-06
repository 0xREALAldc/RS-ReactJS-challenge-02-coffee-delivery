import { ReactNode, createContext, useState } from 'react'

export interface CartItem {
  id: string
  quantity: number
  name: string
  urlCoffeImage: string
  price: number
  total: string
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
  coffees: CoffeeProps[]
  AddCartItem: (coffeItem: CoffeeProps) => void
  AddItemQuantity: (coffeeItem: CoffeeProps, operation: string) => void
}

const coffeesList: CoffeeProps[] = [
  {
    id: 'ad1123imi',
    name: 'Traditional Espresso',
    description:
      'Traditional coffee brewed with hot water and ground coffee beans',
    price: 9.9,
    quantity: 0,
    urlCoffeImage: 'src/assets/coffee/traditional-espresso.svg',
    flavor: [{ name: 'Traditional' }],
  },
  {
    id: 'asdo123jj',
    name: 'American Espresso',
    description: 'A diluted espresso, less intense than the Traditional',
    price: 9.9,
    quantity: 0,
    urlCoffeImage: 'src/assets/coffee/american-espresso.svg',
    flavor: [{ name: 'Traditional' }],
  },
  {
    id: 'asi21ijd',
    name: 'Creamy Espresso',
    description: 'Traditional espresso coffee with a creamy milk foam',
    price: 9.9,
    quantity: 0,
    urlCoffeImage: 'src/assets/coffee/creamy-espresso.svg',
    flavor: [{ name: 'Traditional' }],
  },
  {
    id: 'ask21kda',
    name: 'Icy Espresso',
    description: 'A brew prepared with ice cubes and a espresso coffee',
    price: 9.9,
    quantity: 0,
    urlCoffeImage: 'src/assets/coffee/icy-espresso.svg',
    flavor: [{ name: 'Traditional' }, { name: 'Cold' }],
  },
]

interface CartContextProviderProps {
  children: ReactNode
}

export const CartContext = createContext({} as CartContextType)

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [coffees, setCoffees] = useState<CoffeeProps[]>(coffeesList)
  const [cartItems, setCartItems] = useState<Cart>(initialCart)

  function AddItemQuantity(coffeeItem: CoffeeProps, operation: string) {
    setCoffees((state) =>
      state.map((coffee) => {
        if (coffee.id === coffeeItem.id) {
          if (operation === 'minus') {
            if (coffee.quantity > 0) {
              return { ...coffee, quantity: coffee.quantity - 1 }
            } else {
              return coffee
            }
          } else {
            return { ...coffee, quantity: coffee.quantity + 1 }
          }
        } else {
          return coffee
        }
      }),
    )
  }

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
        itemChanged.total = (itemChanged.quantity * itemChanged.price).toFixed(
          2,
        )

        items[itemIndex] = itemChanged
      } else {
        const newItem: CartItem = {
          id: coffeeItem.id,
          name: coffeeItem.name,
          price: coffeeItem.price,
          quantity: coffeeItem.quantity,
          total: (coffeeItem.quantity * coffeeItem.price).toFixed(2),
          urlCoffeImage: coffeeItem.urlCoffeImage,
        }

        items.push(newItem)
      }

      return {
        ...state,
        deliveryFee: 5.55,
        itemsCount: state.itemsCount + coffeeItem.quantity,
        items,
        total: items.reduce((sum, item) => sum + Number(item.total), 0),
      }
    })

    // reset the coffee item quantity
    setCoffees((state) =>
      state.map((coffee) => {
        if (coffee.id === coffeeItem.id) {
          return { ...coffee, quantity: 0 }
        } else {
          return coffee
        }
      }),
    )
  }

  return (
    <CartContext.Provider
      value={{ cartItems, coffees, AddCartItem, AddItemQuantity }}
    >
      {children}
    </CartContext.Provider>
  )
}
