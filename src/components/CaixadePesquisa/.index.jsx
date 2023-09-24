import React from "react";
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
    color: ${({ theme }) => theme.pesquisa};

    @media screen and (min-width: 291px) and (max-width: 500px) {
        width: 250px;
        margin: 100px 0px 0px 5vw;
    }
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