import styled from "styled-components";

export const ContainerPrincipal = styled.div`
    max-width: 100%;
    display: flex;
    align-items: center;
    height: 20%;
    @media (max-width: 1178px){
        flex-direction: column;
    }
`

export const Logo = styled.img`
    width: 240px;
    height: 100%;
`


export const ContainerLogo = styled.div`
    width: 30%;
    height: 100%;
    text-align: center;
    @media (max-width: 1178px){
        width: 100%;
    }
`

export const Lista = styled.ul`
    width: 70%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    list-style-type: none;
    gap: 5px;
    @media(max-width: 526px){
        flex-direction: column;
        width: 100%;
        gap: 10px;
    }
`


export const Option = styled.li`
    text-align: center;
    width: 120px;
    @media(max-width: 526px){
        width: 100%;
    }
    color: #B3BAC1;
    font-weight: bold;
    cursor: pointer;
    font-size: 20px;
`