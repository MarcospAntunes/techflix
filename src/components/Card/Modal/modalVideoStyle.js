import styled, { css } from 'styled-components';

const ModalStyled = styled.div`

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
        width: 560px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background-color: ${({ theme }) => theme.div};
        border-radius: 10px;
        border: none;
        border-radius: 15px;
        color: ${({ theme }) => theme.body === '#fff' ? 'white' : 'black'};

        iframe {
            margin-left: 0 !important;
            background-color: gray;
            border-radius: 10px 10px 0px 0px !important;
        }

        .closeModal {
            position: absolute;
            width: 42px;
            height: 42px;
            cursor: pointer;
            right: 0;
            top: 0;
            color: white;
        }

        h2 {
            text-align: center;
            width: 280px;
        }

        p {
            width: 500px;
            margin: 10px;
            text-align: center;
            
        }
        .favorito {
            width: 42px;
            height: 42px;
            text-align: center;
            color: ${({ theme }) => theme.body === '#fff' ? 'white' : 'black'} !important;
            cursor: pointer;
        }

        .favoritado {
            color: red !important;
            fill: red;
        }

        iframe {
            border-radius: 10px;
            background-color: rgba(128, 128, 128, 0.534);
            margin-left: 60px
        }

        @media screen and (min-width: 100px) and (max-width: 1024px) {
            width: 360px;
            
            .closeModal {
                width: 32px;
                height: 32px;
            }
            
            iframe {
                width: 100%;
                height: 265px;
                margin-left: 0px;
                margin-bottom: 10px;
            }

            h2 {
                font-size: 16px !important;
                margin-left: 5px !important;
            }
            
            p {
                font-size: 12px !important;
                margin-bottom: 0;
            } 

            .favorito {
                width: 38px;
                height: 38px;
                margin-left: 0;
                cursor: pointer;
            }
        }
        

        @media screen and (min-width: 281px) and (max-width: 500px) {
        width: 80vw;
        height: 60vh;
    }
    `}
`

export { ModalStyled }
