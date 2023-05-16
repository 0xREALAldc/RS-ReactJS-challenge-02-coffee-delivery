import styled from 'styled-components'

import background from '../../assets/Background.svg'

export const MainContainer = styled.main`
  display: flex;
  flex-direction: column;
  margin-top: 9.4rem;
`

export const MarketingContainer = styled.section`
  display: flex;
  background-image: url(${background});

  h2 {
    color: ${(props) => props.theme['base-title']};
    font-family: 'Baloo 2', sans-serif;
    font-weight: 800;
    font-size: 4.8rem;

    margin-bottom: 1.6rem;
  }

  p {
    color: ${(props) => props.theme['base-subtitle']};

    font-size: 2rem;
    font-weight: 400;
  }
`

export const ItemsContainer = styled.div`
  width: calc(100% - 47.2rem);
`

export const MarketingItems = styled.div`
  display: flex;
  flex-wrap: wrap;

  margin-top: 6.6rem;

  div {
    display: flex;
    align-items: center;
    justify-content: flex-start;

    gap: 1.2rem;

    min-width: 30rem;

    span {
      display: flex;
      align-items: center;
      justify-content: center;

      width: 3.2rem;
      height: 3.2rem;

      border-radius: 999px;

      color: ${(props) => props.theme.white};
    }
  }
`
export const Item = styled.div`
  height: 3.2rem;
  margin-bottom: 2rem;
`

export const ShoppingItem = styled(Item)`
  span {
    background-color: ${(props) => props.theme['yellow-dark']};
  }
`
export const PackageItem = styled(Item)`
  span {
    background-color: ${(props) => props.theme['base-text']};
  }
`
export const TimeItem = styled(Item)`
  span {
    background-color: ${(props) => props.theme.yellow};
  }
`
export const CoffeeItem = styled(Item)`
  span {
    background-color: ${(props) => props.theme.purple};
  }
`
export const CoffeeContainer = styled.section`
  h2 {
    font-family: 'Baloo 2';
    font-weight: 800;
    font-size: 3.2rem;
    line-height: 1.3;

    margin-top: 3.2rem;
    margin-bottom: 5.4rem;
  }
`

export const CoffeeList = styled.div`
  display: flex;
  gap: 3.2rem;

  margin-bottom: 50rem;
`

export const CoffeeCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background-color: ${(props) => props.theme['base-card']};
  padding: 0 2rem;

  width: 25.6rem;
  height: 31rem;

  border-top-left-radius: 6px;
  border-top-right-radius: 36px;
  border-bottom-left-radius: 36px;
  border-bottom-right-radius: 6px;

  img {
    width: 12rem;
    height: 12rem;
    margin-top: calc(0px - 2rem);
  }

  h4 {
    font-family: 'Baloo 2';
    font-weight: 700;
    font-size: 2rem;
    line-height: 1.3;

    margin-top: 1.6rem;
    margin-bottom: 0.8rem;
  }

  p {
    font-family: 'Roboto';
    font-size: 1.4rem;
    font-weight: 400;
    text-align: center;

    line-height: 1.3;

    color: ${(props) => props.theme['base-label']};

    margin-top: 0;
    margin-bottom: 3.3rem;
  }
`

export const FlavorTiles = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 8.1rem;
  height: 2.1rem;

  margin-top: 1.2rem;

  gap: 0.4rem;
  span {
    text-transform: uppercase;
    font-size: 1rem;
    font-weight: 600;

    border-radius: 999px;
    padding: 0.4rem 0.8rem;

    color: ${(props) => props.theme['yellow-dark']};
    background-color: ${(props) => props.theme['yellow-light']};
  }
`

export const PriceContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 20.8rem;
  height: 3.8rem;

  margin: auto 2.4rem 2rem;

  span {
    display: flex;
    align-items: center;

    font-family: 'Roboto';
    font-size: 1.4rem;
    font-weight: 400;
    line-height: 1.3;

    color: ${(props) => props.theme['base-text']};

    gap: 0.5rem;

    p {
      font-family: 'Baloo 2';
      font-size: 2.4rem;
      font-weight: 800;

      color: ${(props) => props.theme['base-text']};

      margin-bottom: 0;
    }
  }

  div {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: space-evenly;

    span:first-child {
      display: flex;
      align-items: center;
      justify-content: center;

      width: 7.2rem;
      height: 3.8rem;

      border-radius: 6px;

      background-color: ${(props) => props.theme['base-button']};
      color: ${(props) => props.theme.purple};
    }

    p {
      font-family: 'Roboto';
      font-size: 1.6rem;
      font-weight: 400;
      line-height: 1.3;

      margin: 0;
    }

    span:nth-child(2) {
      display: flex;
      align-items: center;
      justify-content: center;

      border-radius: 6px;

      width: 3.8rem;
      height: 3.8rem;
      background-color: ${(props) => props.theme['purple-dark']};

      color: ${(props) => props.theme['base-card']};
    }
  }
`
