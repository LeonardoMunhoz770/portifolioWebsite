import React from "react";

import { 
    ContainerPrincipal,
    Logo,
    Lista,
    Option,
    ContainerLogo
} from "../../styles/header";

import imageLogo from '../../assets/logoLeoDev.png'

export function Header(){
    return(
        <ContainerPrincipal>
            <ContainerLogo>
                <Logo src={imageLogo}></Logo>
            </ContainerLogo>
            <Lista>
                <Option >Home</Option>
                <Option >Sobre</Option>
                <Option >Serviços</Option>
                <Option >Habilidades</Option>
                <Option >Portifólio</Option>
                <Option >Contato</Option>
            </Lista>
        </ContainerPrincipal>
    )
}