import styled, { css } from 'styled-components';

const Botao = styled.button`
  width: 218px;
  height: 50px;
  background-color: ${({ theme }) => theme.buttonBg};
  border: none;
  border-radius: 5px;
  color: ${({ theme }) => theme.buttonText};
  font-size: 24px;
  cursor: pointer;
  transition: .3s;

  &:hover {
    transform: translate(3px, 3px);
    transition: .3s;
  }

  ${props => props.$azul && css`
    background-color: #223A7A;
    color: white;

    &:hover {
      transform: translate(3px, 3px);
      transition: .3s;
    }
 `}
`

export default Botao;