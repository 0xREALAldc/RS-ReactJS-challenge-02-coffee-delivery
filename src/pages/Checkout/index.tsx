import { useContext } from 'react'
import { CartContext, CartItem, CoffeeProps } from '../../contexts/CartContext'

import {
  CreditCard,
  CurrencyBtc,
  CurrencyDollar,
  MapPinLine,
  Minus,
  Money,
  Plus,
  Trash,
} from 'phosphor-react'

import {
  PageContainer,
  EmptyCheckout,
  MainContainer,
  AddressContainer,
  SmallInput,
  RegularlInput,
  MediumInput,
  BigInput,
  AddressContainerHeader,
  AddressContainerHeaderDescription,
  PaymentContainer,
  PaymentContainerHeader,
  PaymentButton,
  PaymentButtonContainer,
  AddressInputContainer,
  CheckoutTotalContainer,
  CheckoutTotalDetails,
  CheckoutCardItem,
  CheckoutCardItemDetails,
  CheckoutItemsContainer,
  ContainerItem,
  Divider,
  TotalLine,
  TotalAmount,
  FinishOrder,
} from './styles'

export function Checkout() {
  const { cartItems, AddItemQuantityInCart } = useContext(CartContext)
  const { items } = cartItems

  function handleAddItemQuantity(coffeeItem: CoffeeProps, operation: string) {
    AddItemQuantityInCart(coffeeItem, operation)
  }

  return (
    <>
      {items.length === 0 ? (
        <EmptyCheckout>
          <p>You have no coffees added to the cart.</p>
        </EmptyCheckout>
      ) : (
        <PageContainer>
          <div>
            <h1>Finish your order</h1>
            <MainContainer>
              <AddressContainer>
                <AddressContainerHeader>
                  <span>
                    <MapPinLine size={22} />
                  </span>
                  <AddressContainerHeaderDescription>
                    <h4>Delivery Address</h4>
                    <p>
                      Fill the address with the information for the delivery
                    </p>
                  </AddressContainerHeaderDescription>
                </AddressContainerHeader>
                <AddressInputContainer>
                  <RegularlInput type="text" placeholder="ZIP CODE" />
                  <BigInput type="text" placeholder="Street" />
                  <div>
                    <RegularlInput type="text" placeholder="Number" />
                    <MediumInput type="text" placeholder="Reference" />
                  </div>
                  <div>
                    <RegularlInput type="text" placeholder="Neighborhood" />
                    <RegularlInput type="text" placeholder="City" />
                    <SmallInput type="text" placeholder="ST" />
                  </div>
                </AddressInputContainer>
              </AddressContainer>

              <PaymentContainer>
                <PaymentContainerHeader>
                  <span>
                    <CurrencyDollar size={22} />
                  </span>
                  <div>
                    <h4>Payment</h4>
                    <p>
                      The payment is done when delivered, choose the method you
                      prefer to pay
                    </p>
                  </div>
                </PaymentContainerHeader>

                <PaymentButtonContainer>
                  <PaymentButton>
                    <span>
                      <CreditCard size={16} />
                    </span>
                    <p>CREDIT CARD</p>
                  </PaymentButton>
                  <PaymentButton>
                    <span>
                      <CreditCard size={16} />
                    </span>
                    <p>DEBIT CARD</p>
                  </PaymentButton>
                  <PaymentButton>
                    <span>
                      <Money size={16} />
                    </span>
                    <p>MONEY</p>
                  </PaymentButton>
                  <PaymentButton>
                    <span>
                      <CurrencyBtc size={16} />
                    </span>
                    <p>CRYPTO</p>
                  </PaymentButton>
                </PaymentButtonContainer>
              </PaymentContainer>
            </MainContainer>
          </div>
          <CheckoutTotalContainer>
            <h3>Chosen coffees</h3>
            <CheckoutTotalDetails>
              <CheckoutItemsContainer>
                {items.map((item: CartItem) => {
                  return (
                    <div key={item.id}>
                      <CheckoutCardItem>
                        <CheckoutCardItemDetails>
                          <img src={item.urlCoffeImage} alt={item.name} />
                          <ContainerItem>
                            <h4>{item.name}</h4>
                            <div>
                              <div>
                                <span
                                  onClick={() =>
                                    handleAddItemQuantity(item, 'minus')
                                  }
                                >
                                  <Minus size={16} />
                                </span>
                                <p>{item.quantity}</p>
                                <span
                                  onClick={() =>
                                    handleAddItemQuantity(item, 'plus')
                                  }
                                >
                                  <Plus size={16} />
                                </span>
                              </div>
                              <div>
                                <span>
                                  <Trash size={16} />
                                </span>
                                <p>REMOVE</p>
                              </div>
                            </div>
                          </ContainerItem>
                        </CheckoutCardItemDetails>
                        <span>${item.total}</span>
                      </CheckoutCardItem>
                      <Divider />
                    </div>
                  )
                })}
              </CheckoutItemsContainer>

              <div>
                <TotalLine>
                  <p>Total of coffees</p>
                  <p>${cartItems.total}</p>
                </TotalLine>

                <TotalLine>
                  <p>Delivery fee</p>
                  <p>${cartItems.deliveryFee}</p>
                </TotalLine>

                <TotalAmount>
                  <p>Total amount</p>
                  <p>${(cartItems.total + cartItems.deliveryFee).toFixed(2)}</p>
                </TotalAmount>

                <FinishOrder>
                  <p>Finish order </p>
                </FinishOrder>
              </div>
            </CheckoutTotalDetails>
          </CheckoutTotalContainer>
        </PageContainer>
      )}
    </>
  )
}
