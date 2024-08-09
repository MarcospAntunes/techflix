import { ContainerPesquisa, InputStyled } from "./CaixaDePesquisa.style";

function CaixaDePesquisa({ search, setSearch }) {
  return (
    <ContainerPesquisa>            
      <InputStyled
        type="search" name="pesquisa" 
        id="pesquisa" 
        placeholder='O que procura?' 
        value={search} 
        onChange={(e) => setSearch(e.target.value)}
      />
    </ContainerPesquisa>
  )
}

export default CaixaDePesquisa