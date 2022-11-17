import React from "react";
import {
    ContainerPrincipal,
    Qualificacoes,
    SobreMim,
    Conteudo,
    Texto,
    ContainerGrid,
    HTMLicon,
    CSSicon,
    JSicon,
    Reacticon,
    ContainerInformations

} from "../../styles/about"

import { Button } from "../button";

import iconHTML from '../../assets/html-icon.png'
import cssIcon from '../../assets/css-icon.png'
import jsIcon from '../../assets/js-icon.png'
import reactIcon from '../../assets/react-icon.png'

export function About({backgroundColor}){
    return(
        <ContainerPrincipal style={{backgroundColor: backgroundColor}}>
            <ContainerInformations>
                <Qualificacoes>
                    <ContainerGrid>
                        <Conteudo>
                            <HTMLicon src={iconHTML}/>
                            HTML
                        </Conteudo>
                        <Conteudo>
                            <CSSicon src={cssIcon}/>
                            CSS
                        </Conteudo>
                        <Conteudo>
                            <JSicon src={jsIcon}/>
                            JavaScript
                        </Conteudo>
                        <Conteudo>
                            <Reacticon src={reactIcon}/>
                            React
                        </Conteudo>
                    </ContainerGrid>
                </Qualificacoes>
                <SobreMim>
                    <Texto>
                        <span>Sobre mim</span>
                        <h1>Proporcionando as melhores experiências</h1>
                        <p>Olá eu sou o Leonardo, sou estudante de programação cursando o terceiro semestre de Análise e Desenvolvimento de sistemas. Atualmente, venho me dedicando nos estudos de JS, HTML e CSS. Além de aprender
                        um pouco sobre o Framework React. Comecei estudando react-native, componentização, props, states. Hoje me dedico 100% em desenvolvimento web com JS vanilla e um pouco de react. </p>
                        <Button width={120} height={30} href="https://www.linkedin.com/in/leonardo-munhoz-5b63721b7">Contato</Button>
                    </Texto>
                </SobreMim>
            </ContainerInformations>
            
        </ContainerPrincipal>     
    )
}