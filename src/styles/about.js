import styled from "styled-components";

export const ContainerPrincipal = styled.div`
    width: 100%;
    background-color: white;
    display: flex;
    flex-direction: row;
    @media(max-width: 952px){
        
        height: 700px;
        flex-direction: column;
    }
    padding-top: 100px;
    
`

export const Qualificacoes = styled.div`
    width: 50%;
    height: 350px;
    justify-content: center;
    align-items: center;
    @media(max-width: 952px){
        width: 100%;
    }
`

export const ContainerGrid = styled.div`
    width: 50%;
    height: 100%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    place-items: center;
    margin: 0 auto;
`


export const SobreMim = styled.div`
    width: 50%;
    height: 350px;
    justify-content: center;
    align-items: center;
    display: flex;
    @media(max-width: 952px){
        width: 100%;
        text-align: center;
    }
`
export const Conteudo = styled.div`
    width: 150px;
    height: 150px;
    border-radius: 10px;
    border: 1px solid #EBECED;
    justify-content: center;
    align-items: center;
    display: flex;
    flex-direction: column;
    gap: 5px;
`


export const HTMLicon = styled.img`
    width: 50px;
    height: 50px;
`

export const CSSicon = styled.img`
    height: 50px;
    width: 50px;
`

export const JSicon = styled.img`
    width: 50px;
    height: 50px;
`

export const Reacticon = styled.img`
    width: 50px;
    height: 50px;
`


export const Texto = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 10px;
    @media(max-width: 952px){
        text-align: center;
        justify-content: center;
        align-items: center;
        display: flex;
    }
`