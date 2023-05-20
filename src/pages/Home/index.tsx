import {
  ShoppingCart,
  Timer,
  Package,
  Coffee,
  Minus,
  Plus,
} from 'phosphor-react'

import coffeDelivery from '../../assets/coffee-delivery-home.svg'

import {
  MainContainer,
  MarketingContainer,
  MarketingItems,
  ItemsContainer,
  ShoppingItem,
  PackageItem,
  TimeItem,
  CoffeeItem,
  CoffeeCard,
  CoffeeList,
  FlavorTiles,
  PriceContainer,
  CoffeeContainer,
} from './styles'
import { useEffect, useState } from 'react'

interface FlavorType {
  name: string
}

interface CoffeeProps {
  id: string
  name: string
  description: string
  quantity: number
  price: number
  urlCoffeImage: string
  flavor: FlavorType[]
}

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

export function Home() {
  const [coffees, setCoffees] = useState<CoffeeProps[]>(coffeesList)
  const [cartItems, setCartItems] = useState<Cart>(initialCart)

  function handleAddQuantity(coffeeItem: CoffeeProps, operation: string) {
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

  function handleAddCartItem(coffeeItem: CoffeeProps) {
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

  useEffect(() => {
    console.log('cart items')
    console.log(cartItems)
  }, [cartItems])

  return (
    <MainContainer>
      <MarketingContainer>
        <ItemsContainer>
          <h2>Find the perfect coffe for any time of the day</h2>
          <p>
            With Coffee Delivery you get your coffee wherever you are, any time
          </p>
          <MarketingItems>
            <ShoppingItem>
              <span>
                <ShoppingCart size={16} weight="fill" />
              </span>
              <p>Easy and safe to buy</p>
            </ShoppingItem>

            <PackageItem>
              <span>
                <Package size={16} weight="fill" />
              </span>
              <p>Package that holds your coffee safe</p>
            </PackageItem>
            {/* </MarketingItems> */}
            {/* <MarketingItems> */}
            <TimeItem>
              <span>
                <Timer size={16} weight="fill" />
              </span>
              <p>Fast and tracked delivery</p>
            </TimeItem>

            <CoffeeItem>
              <span>
                <Coffee size={16} />
              </span>
              <p>Fresh coffee delivered to you</p>
            </CoffeeItem>
          </MarketingItems>
        </ItemsContainer>
        <img src={coffeDelivery} alt="" />
      </MarketingContainer>

      <CoffeeContainer>
        <h2>Our Cafes</h2>
        <CoffeeList>
          {coffees.map((coffee) => {
            return (
              <CoffeeCard key={coffee.id}>
                <img src={coffee.urlCoffeImage} alt={coffee.name} />
                <FlavorTiles>
                  {coffee.flavor.map((flavor) => {
                    return <span key={flavor.name}>{flavor.name}</span>
                  })}
                </FlavorTiles>
                <h4>{coffee.name}</h4>
                <p>{coffee.description}</p>
                <PriceContainer>
                  <span>
                    R$ <p>{coffee.price}</p>
                  </span>
                  <div>
                    <span>
                      <Minus
                        weight="fill"
                        size={16}
                        onClick={() => handleAddQuantity(coffee, 'minus')}
                      />
                      <p>{coffee.quantity}</p>
                      <Plus
                        weight="fill"
                        size={16}
                        onClick={() => handleAddQuantity(coffee, 'plus')}
                      />
                    </span>
                    <span>
                      <ShoppingCart
                        size={26}
                        weight="fill"
                        onClick={() => handleAddCartItem(coffee)}
                      />
                    </span>
                  </div>
                </PriceContainer>
              </CoffeeCard>
            )
          })}

          {/* <CoffeeCard>
            <img src={traditionalEspresso} alt="Traditional express" />
            <FlavorTiles>
              <span>Traditional</span>
            </FlavorTiles>
            <h4>Traditional Espresso</h4>
            <p>
              Traditional coffee brewed with hot water and ground coffee beans
            </p>
            <PriceContainer>
              <span>
                R$ <p>9,90</p>
              </span>
              <div>
                <span>
                  <Minus weight="fill" size={16} />
                  <p>0</p>
                  <Plus weight="fill" size={16} />
                </span>
                <span>
                  <ShoppingCart size={26} weight="fill" />
                </span>
              </div>
            </PriceContainer>
          </CoffeeCard>

          <CoffeeCard>
            <img src={americanEspresso} alt="American express" />
            <FlavorTiles>
              <span>Traditional</span>
            </FlavorTiles>
            <h4>American Espresso</h4>
            <p>A diluted espresso, less intense than the Traditional</p>
            <PriceContainer>
              <span>
                $ <p>9,90</p>
              </span>
              <div>
                <span>
                  <Minus weight="fill" size={16} />
                  <p>0</p>
                  <Plus weight="fill" size={16} />
                </span>
                <span>
                  <ShoppingCart size={26} weight="fill" />
                </span>
              </div>
            </PriceContainer>
          </CoffeeCard>

          <CoffeeCard>
            <img src={creamyEspresso} alt="Creamy express" />
            <FlavorTiles>
              <span>Traditional</span>
            </FlavorTiles>
            <h4>Creamy Espresso</h4>
            <p>Traditional espresso coffee with a creamy milk foam</p>
            <PriceContainer>
              <span>
                $ <p>9,90</p>
              </span>
              <div>
                <span>
                  <Minus weight="fill" size={16} />
                  <p>0</p>
                  <Plus weight="fill" size={16} />
                </span>
                <span>
                  <ShoppingCart size={26} weight="fill" />
                </span>
              </div>
            </PriceContainer>
          </CoffeeCard>

          <CoffeeCard>
            <img src={icyEspresso} alt="Icy express" />
            <FlavorTiles>
              <span>Traditional</span>
              <span>Cold</span>
            </FlavorTiles>
            <h4>Icy Espresso</h4>
            <p>A brew prepared with ice cubes and a espresso coffee</p>
            <PriceContainer>
              <span>
                $ <p>9,90</p>
              </span>
              <div>
                <span>
                  <Minus weight="fill" size={16} />
                  <p>0</p>
                  <Plus weight="fill" size={16} />
                </span>
                <span>
                  <ShoppingCart size={26} weight="fill" />
                </span>
              </div>
            </PriceContainer>
          </CoffeeCard> */}
        </CoffeeList>
      </CoffeeContainer>
    </MainContainer>
  )
}
