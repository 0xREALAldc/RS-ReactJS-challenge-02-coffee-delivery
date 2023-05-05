import './App.css'

import { MapPin, ShoppingCart, Timer, Package, Coffee } from 'phosphor-react'

import coffeLogo from './assets/coffe-delivery.svg'
import coffeDelivery from './assets/coffee-delivery-home.svg'

import traditionalEspresso from './assets/coffee/traditional-espresso.svg'
import americanEspresso from './assets/coffee/american-espresso.svg'
import creamyEspresso from './assets/coffee/creamy-espresso.svg'
import icyEspresso from './assets/coffee/icy-espresso.svg'

export function App() {
  return (
    <div>
      <header>
        <img src={coffeLogo} alt="" />
        {/* <span>Coffee</span> for L.I.F.E */}
        <div>
          <span>
            <MapPin size={20} weight="fill" />
            Chopinzinho, PR
          </span>
          <span>
            <ShoppingCart size={20} weight="fill" />
          </span>
        </div>
      </header>

      <main>
        <section>
          <div>
            <div>
              <h2>Find the perfect coffe for any hour of your day</h2>
              <p>
                With Coffee Delivery you get your coffee wherever you are, any
                time
              </p>
              <div>
                <div>
                  <span>
                    <ShoppingCart size={13} weight="fill" />
                  </span>
                  <p>Easy and safe to buy</p>
                </div>

                <div>
                  <span>
                    <Timer size={13} />
                  </span>
                  <p>Fast and tracked delivery</p>
                </div>
              </div>
              <div>
                <div>
                  <span>
                    <Package size={13} weight="fill" />
                  </span>
                  <p>Package that holds your coffee safe</p>
                </div>

                <div>
                  <span>
                    <Coffee size={13} />
                  </span>
                  <p>The coffee is still fresh when delivered to you</p>
                </div>
              </div>
            </div>
            <img src={coffeDelivery} alt="" />
          </div>
        </section>

        <section>
          <h2>Menu</h2>
          <div>
            <div>
              <img src={traditionalEspresso} alt="Traditional express" />
              <div>
                <span>Traditional</span>
              </div>
              <h4>Traditional Express</h4>
              <p>
                The traditional coffee brewed with hot water and ground coffee
                beans
              </p>
              <div>
                <span>$ 9,90</span>
                <div>
                  <p>- 1 +</p>
                  <span>
                    <ShoppingCart size={13} weight="fill" />
                  </span>
                </div>
              </div>
            </div>

            <div>
              <img src={americanEspresso} alt="American express" />
              <div>
                <span>Traditional</span>
              </div>
              <h4>American Express</h4>
              <p>A diluted espresso, less intense than the Traditional</p>
              <div>
                <span>$ 9,90</span>
                <div>
                  <p>- 1 +</p>
                  <span>
                    <ShoppingCart size={13} weight="fill" />
                  </span>
                </div>
              </div>
            </div>

            <div>
              <img src={creamyEspresso} alt="Creamy express" />
              <div>
                <span>Traditional</span>
              </div>
              <h4>Creamy Express</h4>
              <p>Traditional espresso coffee with a creamy milk foam</p>
              <div>
                <span>$ 9,90</span>
                <div>
                  <p>- 1 +</p>
                  <span>
                    <ShoppingCart size={13} weight="fill" />
                  </span>
                </div>
              </div>
            </div>

            <div>
              <img src={icyEspresso} alt="Icy express" />
              <div>
                <span>Traditional</span>
                <span>Gelado</span>
              </div>
              <h4>Icy Express</h4>
              <p>A brew prepared with ice cubes and a espresso coffee</p>
              <div>
                <span>$ 9,90</span>
                <div>
                  <p>- 1 +</p>
                  <span>
                    <ShoppingCart size={13} weight="fill" />
                  </span>
                </div>
              </div>
            </div>
            {/*  */}
          </div>
        </section>
      </main>
    </div>
  )
}
