import styled, { css } from 'styled-components';

const Botao = styled.button`
    width: 218px;
    height: 50px;
    background-color: #ffff;
    border: none;
    border-radius: 5px;
    color: black;
    font-size: 24px;
    cursor: pointer;
    transition: .3s;

    &:hover {
      background-color: #223A7A;
      transform: translate(3px, 3px);
      color: #ffff;
      transition: .3s;
    }

    ${props => props.$azul && css`
    background-color: #223A7A;
    color: white;

    &:hover {
      background-color: #ffffff;
      transform: translate(3px, 3px);
      color: black;
      transition: .3s;
    }

  `}
    
`

function Bota({ children }) {
    return (
        <button>{children}</button>
    )
}

export default Botao;