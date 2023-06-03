import styled from 'styled-components'

export const PageContainer = styled.div`
  width: 112rem;

  display: grid;
  /* the first column will have the size fixed in 256px and the second the '1fr' means it'll adapt to what has left in the screen space */
  grid-template-columns: 64rem 1fr;
  gap: 3.2rem;
  /* this is to make the items start from the top, and not leave them try to have the same sizes, because the default value here is 'stretch'  */
  align-items: flex-start;

  h1 {
    font-family: 'Baloo 2';
    font-weight: 700;
    font-size: 1.8rem;

    color: ${(props) => props.theme['base-subtitle']};
    margin-bottom: 1.5rem;
  }
`

export const MainContainer = styled.main`
  width: 64rem;

  h4 {
    color: ${(props) => props.theme['base-subtitle']};
    font-size: 1.6rem;
    font-weight: 400;
  }

  p {
    font-size: 1.4rem;
    font-weight: 400;
    color: ${(props) => props.theme['base-text']};
  }
`

export const AddressContainer = styled.div`
  height: 37.2rem;

  display: flex;
  flex-direction: column;

  div {
    display: flex;
    /* gap: 1.2rem; */
  }

  background-color: ${(props) => props.theme['base-card']};
  border-radius: 6px;

  padding: 4rem;

  span {
    color: ${(props) => props.theme['yellow-dark']};
  }
`

export const AddressContainerHeader = styled.div`
  display: flex;
  gap: 1.2rem;

  margin-bottom: 3.2rem;
`

export const AddressContainerHeaderDescription = styled.div`
  width: 53rem;
  display: flex;
  flex-direction: column;
`

export const AddressInputContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const Input = styled.input`
  margin-top: 1.6rem;
  margin-right: 1.2rem;
  height: 4.2rem;
  padding: 1.2rem;

  background: ${(props) => props.theme['base-input']};
  color: ${(props) => props.theme['base-label']};

  outline: transparent;
  box-shadow: 0 0 0 1px ${(props) => props.theme['base-button']}; // TESTE

  :focus {
    outline: transparent;
    box-shadow: 0 0 0 1px ${(props) => props.theme['yellow-dark']}; // TESTE
  }

  border: 0;
  border-radius: 4px;
`

export const RegularlInput = styled(Input)`
  width: 20rem;
`
export const SmallInput = styled(Input)`
  width: 6rem;
  margin-top: 1.6rem;
`
export const MediumInput = styled(Input)`
  width: 34.8rem;
  margin-top: 1.6rem;
`
export const BigInput = styled(Input)`
  width: 56rem;
  margin-top: 1.6rem;
`
export const PaymentContainer = styled.div`
  background-color: ${(props) => props.theme['base-card']};
  border-radius: 6px;

  padding: 4rem;
  margin-top: 1.2rem;
`
export const PaymentContainerHeader = styled.div`
  display: flex;
  gap: 1.2rem;

  span {
    color: ${(props) => props.theme.purple};
  }

  margin-bottom: 3.2rem;
`

export const PaymentButtonContainer = styled.div``

export const PaymentButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;

  gap: 1.2rem;

  width: 16rem;
  height: 5.1rem;

  margin-right: 1.2rem;
  margin-bottom: 1.2rem;

  border-radius: 6px;
  border: 0;

  background-color: ${(props) => props.theme['base-button']};

  span {
    display: flex;
    color: ${(props) => props.theme.purple};
  }
`
export const CheckoutTotalContainer = styled.aside`
  //remove after placing in the right
  margin-top: 2rem;

  width: 44.8rem;
  height: 53.6rem;

  h3 {
    font-family: 'Baloo 2';
    font-weight: 700;
    font-size: 1.8rem;
    color: ${(props) => props.theme['base-subtitle']};

    margin-bottom: 1.5rem;
  }
`
export const CheckoutTotalDetails = styled.div`
  height: 49.8rem;

  padding: 4rem;

  background-color: ${(props) => props.theme['base-card']};
  border-top-left-radius: 6px;
  border-top-right-radius: 44px;
  border-bottom-left-radius: 44px;
  border-bottom-right-radius: 6px;
`

export const CheckoutCardItem = styled.div`
  display: flex;
  justify-content: space-between;

  span {
    font-weight: 900;
    font-size: 1.6rem;
    color: ${(props) => props.theme['base-text']};
  }

  img {
    width: 6.4rem;
    height: 6.4rem;

    margin-right: 2rem;
  }
`

export const CheckoutCardItemDetails = styled.div`
  display: flex;
`

export const ContainerItem = styled.div`
  width: 17.1rem;
  height: 6.1rem;

  h4 {
    font-size: 1.6rem;
    font-weight: 400;
    color: ${(props) => props.theme['base-subtitle']};
  }

  div {
    display: flex;

    gap: 0.8rem;

    margin-top: 0.8rem;

    div {
      display: flex;
      align-items: center;
      justify-content: center;

      width: 7.2rem;
      height: 3.2rem;

      border-radius: 6px;

      background-color: ${(props) => props.theme['base-button']};

      span {
        display: flex;
        color: ${(props) => props.theme.purple};
      }

      p {
        font-size: 1.6rem;
        font-weight: 400;
        color: ${(props) => props.theme['base-title']};
      }
    }

    div:nth-child(2) {
      width: 9.1rem;
      p {
        font-size: 1.2rem;
        color: ${(props) => props.theme['base-text']};
      }
    }
  }
`
export const Divider = styled.div`
  border-top: 1px solid ${(props) => props.theme['base-button']};
  height: 1rem;
  margin-top: 2.4rem;
`
