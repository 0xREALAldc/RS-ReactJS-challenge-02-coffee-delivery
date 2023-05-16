import {
  ShoppingCart,
  Timer,
  Package,
  Coffee,
  Minus,
  Plus,
} from 'phosphor-react'

import coffeDelivery from '../../assets/coffee-delivery-home.svg'

import traditionalEspresso from '../../assets/coffee/traditional-espresso.svg'
import americanEspresso from '../../assets/coffee/american-espresso.svg'
import creamyEspresso from '../../assets/coffee/creamy-espresso.svg'
import icyEspresso from '../../assets/coffee/icy-espresso.svg'

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
import { useState } from 'react'

interface FlavorType {
  name: string
}

interface CoffeeType {
  id: string
  name: string
  description: string
  quantity: number
  price: number
  urlImage: string
  flavor: FlavorType[]
}

const coffeesList: CoffeeType[] = [
  {
    id: 'ad1123imi',
    name: 'Traditional Espresso',
    description:
      'Traditional coffee brewed with hot water and ground coffee beans',
    price: 9.9,
    quantity: 0,
    urlImage: 'src/assets/coffee/traditional-espresso.svg',
    flavor: [{ name: 'Traditional' }],
  },
  {
    id: 'asdo123jj',
    name: 'American Espresso',
    description: 'A diluted espresso, less intense than the Traditional',
    price: 9.9,
    quantity: 0,
    urlImage: 'src/assets/coffee/american-espresso.svg',
    flavor: [{ name: 'Traditional' }],
  },
  {
    id: 'asi21ijd',
    name: 'Creamy Espresso',
    description: 'Traditional espresso coffee with a creamy milk foam',
    price: 9.9,
    quantity: 0,
    urlImage: 'src/assets/coffee/creamy-espresso.svg',
    flavor: [{ name: 'Traditional' }],
  },
  {
    id: 'ask21kda',
    name: 'Icy Espresso',
    description: 'A brew prepared with ice cubes and a espresso coffee',
    price: 9.9,
    quantity: 0,
    urlImage: 'src/assets/coffee/icy-espresso.svg',
    flavor: [{ name: 'Traditional' }, { name: 'Cold' }],
  },
]

export function Home() {
  const [coffees, setCoffees] = useState<CoffeeType[]>(coffeesList)

  console.log(coffees)

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
                <img src={coffee.urlImage} alt={coffee.name} />
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
                      <Minus weight="fill" size={16} />
                      <p>{coffee.quantity}</p>
                      <Plus weight="fill" size={16} />
                    </span>
                    <span>
                      <ShoppingCart size={26} weight="fill" />
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
