import styled from "styled-components";

const ContainerPesquisa = styled.div`
    width: 100vw;
    text-align: center;
    margin-top: 50px;

`

const InputStyled = styled.input`
    width: 500px;
    border-radius: 50px;
    font-size: 18px;
    color: ${({ theme }) => theme.pesquisa}
`

function CaixaDePesquisa({ search, setSearch }) {
    return (
        <ContainerPesquisa>            
            <InputStyled
                type="search" name="pesquisa" 
                id="pesquisa" 
                placeholder='O que procura?' 
                value={search} 
                onChange={(e) => setSearch(e.target.value)}/>
        </ContainerPesquisa>
    )
}

export default CaixaDePesquisa