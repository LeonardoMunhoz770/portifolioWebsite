import styled from "styled-components";

export const ContainerPricipal = styled.div`
    width: 100%;
    height: 700px;
    display: flex;
    justify-content: center;
    align-items: center;
    @media(max-width: 955px){
        height: 100%;
        flex-direction: column;
        margin-top: 100px;
    }
    
`

export const Apresentacao = styled.div`
    height: 100%;
    width: 70%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    @media(max-width: 1395px){
        width: 100%;
    }
    @media(max-width: 955px){
        flex-direction: column-reverse;
    }
    
`


export const Iniciais = styled.p`
    color: #B3BAC1;
    border-left: 3px solid #277AC0;
    padding: 5px;
    
`


export const Nome = styled.h1`
    font-size: 50px;
    @media(max-width: 331px){
        font-size: 30px;
    }
`


export const Profissao = styled.h1 `
    font-size: 50px;
    color: #277AC0;
    @media(max-width: 331px){
        font-size: 30px;
    }
`;

export const Alinhamento = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    @media(max-width: 526px){
        width: 100%;
        justify-content: center;
        align-items: center;
    }
    
`

export const Estudante = styled.p`
    @media(max-width:500px){
        width: 250px;
    }
`


export const FirstCampo = styled.div`
    height: 100%;
    width: 50%;
    align-items: center;
    justify-content: center;
    display: flex;
    text-align: justify;
    @media(max-width: 700px){
        width: 100%;
    }
    

`

export const ContainerAvatar = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 500px;
    height: 500px;
    @media(max-width: 535px){
        width: 350px;
        height: 350px;
        
    }
    @media(max-width: 954px){
        width: 350px;
        height: 350px;
        margin-bottom: 20px;
    }
`;


export const Avatar = styled.img`
    width: 300px;
    height: 300px;
    background-color: #277AC0;
    border-radius: 150px;
    @media(max-width: 535px){
        width: 100px;
        height: 100px;
    }
    @media(max-width: 954px){
        width: 200px;
        height: 200px;
    }
`

export const CampoAvatar = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
    @media(max-width: 945px){
        width: 100%;
    }
`;