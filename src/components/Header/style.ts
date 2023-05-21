import styled from 'styled-components'

export const HomeHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 10.4rem;

  div {
    display: flex;
    gap: 1.2rem;

    span {
      display: flex;
      align-items: center;
      justify-content: center;

      padding: 0 0.8rem;
      height: 3.8rem;
      border-radius: 6px;

      gap: 0.4rem;

      background-color: aliceblue;
    }

    span:first-child {
      width: 20rem;
      background-color: ${(props) => props.theme['purple-light']};

      p {
        color: ${(props) => props.theme['purple-dark']};
      }

      color: ${(props) => props.theme.purple};
    }

    span:nth-child(2) {
      width: 3.8rem;
      background-color: ${(props) => props.theme['yellow-light']};
    }

    p:nth-child(3) {
      display: flex;
      align-items: center;
      justify-content: center;

      width: 2rem;
      height: 2rem;
      background-color: ${(props) => props.theme['yellow-dark']};

      border-radius: 999px;
      font-size: 1.2rem;
      font-weight: 700;
      color: ${(props) => props.theme.white};

      margin-left: calc(0px - 2.3rem);
      margin-top: calc(0px - 0.8rem);
    }

    a {
      display: flex;
      align-items: center;
      justify-content: center;

      color: ${(props) => props.theme['yellow-dark']};
    }
  }
`
