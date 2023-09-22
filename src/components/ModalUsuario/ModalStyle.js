import styled, { css } from 'styled-components';

const ModalStyle = styled.div`

    ${props => props.$modal && css`
        display: flex;
        justify-content: center;
        align-items: center;
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background-color: rgba(0, 0, 0, 0.7);
        z-index: 1000;
    `}

    ${props => props.$conteudoModal && css`
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 95vw;
        height: 95vh;
        background-color: ${({ theme }) => theme.div};
        border-radius: 15px;

        @media screen and (min-width: 281px) and (max-width: 500px) {
        width: 80vw;
        height: 50vh;
    }
    `}

    


`

const BotaoStyled = styled.button`
${props => props.$botaoMenu && css`
    border: none;
    border-bottom: 1px solid rgb(73, 73, 73);
    margin: 10px;
    background-color: transparent;
    font-size: 20px;
    color: ${({ theme }) => theme.buttonText};
    cursor: pointer;
    transition: 0.3s;

    &:hover {
        transform: translate(3px, 3px);
        transition: 0.3s;
        border-bottom: 1px solid #223A7A;
    }
`}
    

    ${props => props.$closeModal && css`
        position: absolute;
        top: 40px;
        right: 60px;
        width: 10px;
        height: 10px;
        background-color: transparent;
        font-size: 18px;
        color: ${({ theme }) => theme.buttonText};
        border: none;
        cursor: pointer;

        @media screen and (min-width: 281px) and (max-width: 500px) {
        top: 180px;
        right: 60px;
        }
    `}

    

`


export { BotaoStyled, ModalStyle }
