import React from "react";
import {ContainerPricipal, Apresentacao,Iniciais, Nome, Profissao, FirstCampo, Alinhamento, Estudante, ContainerAvatar, Avatar, CampoAvatar} from '../../styles/presentation'
import { Button } from "../button/";
import imageAvatar from '../../assets/avatarLeo.svg'

export function Presentation(){
    return(
        <ContainerPricipal>
            <Apresentacao>
                <FirstCampo>
                    <Alinhamento>
                        <Iniciais>Olá eu sou o</Iniciais>
                        <Nome>Leonardo,</Nome>
                        <Profissao>Frontend &#60; &#62;</Profissao>
                        <Estudante>Sou um estudante de Programação Frontend, que tal trabalharmos juntos?</Estudante>
                        <Button width={120} height={40}>Contato</Button>
                        <div>
                            
                        </div>
                    </Alinhamento>
                </FirstCampo>
                <CampoAvatar>
                    <ContainerAvatar>
                        <Avatar src={imageAvatar}/>
                    </ContainerAvatar>
                </CampoAvatar>
            </Apresentacao>
        </ContainerPricipal>
    )
}

