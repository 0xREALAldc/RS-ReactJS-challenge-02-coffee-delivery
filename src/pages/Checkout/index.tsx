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
  ContainerItem,
  Divider,
} from './styles'

export function Checkout() {
  return (
    <PageContainer>
      <h1>Finish your order</h1>
      <MainContainer>
        <AddressContainer>
          <AddressContainerHeader>
            <span>
              <MapPinLine size={22} />
            </span>
            <AddressContainerHeaderDescription>
              <h4>Delivery Address</h4>
              <p>Fill the address with the information for the delivery</p>
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
                The payment is done when delivered, choose the method you prefer
                to pay
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
      <CheckoutTotalContainer>
        <h3>Chosen coffees</h3>
        <CheckoutTotalDetails>
          <CheckoutCardItem>
            <CheckoutCardItemDetails>
              <img
                src="src/assets/coffee/traditional-espresso.svg"
                alt="Traditional espresso"
              />
              <ContainerItem>
                <h4>Traditional Espresso</h4>
                <div>
                  <div>
                    <span>
                      <Minus size={16} />
                    </span>
                    <p>2</p>
                    <span>
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
            <span>$19,80</span>
          </CheckoutCardItem>
          <Divider />
        </CheckoutTotalDetails>
      </CheckoutTotalContainer>
    </PageContainer>
  )
}
