import styled from "styled-components";

const ContainerPesquisa = styled.div`
  width: 100vw;
  text-align: center;
  margin-top: 70px;

`

const InputStyled = styled.input`
  width: 500px;
  border-radius: 50px;
  font-size: 18px;
  color: ${({ theme }) => theme.pesquisa};

  @media screen and (min-width: 291px) and (max-width: 500px) {
    width: 250px;
    margin: 100px 0px 0px 5vw;
  }
`

export { ContainerPesquisa, InputStyled }