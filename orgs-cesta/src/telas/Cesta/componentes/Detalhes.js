import React from "react";
import { View, Image, StyleSheet } from "react-native";

import Texto from "../../../componentes/Texto";
import Botao from "./Botao";

export default function Detalhes({nome, logoFazenda, nomeFazenda, descricao, preco, botao}) {
    return <>
        <Texto style={estilos.nome}>{nome}</Texto>
        <View style={estilos.fazenda}>
            <Image style={estilos.logo} source={logoFazenda} />
            <Texto style={estilos.nomeFazenda}>{nomeFazenda}</Texto>
        </View>
        <Texto style={estilos.descricao}>{descricao}</Texto>
        <Texto style={estilos.preco}>{preco}</Texto>

        <Botao texto={botao} style={estilos.botao} onPress={() => {}} />
    </>
}

const estilos = StyleSheet.create({
    nome: {
        fontSize: 26,
        lineHeight: 42,
        color: "#464646",
        fontWeight: 'bold'
    },
    fazenda: {
        flexDirection: "row",
        alignItems: 'center',
        paddingVertical: 12
    },
    logo: {
        width: 40,
        height: 40
    },
    nomeFazenda: {
        fontSize: 16,
        lineHeight: 26,
        marginLeft: 12,
    },
    descricao: {
        color: "#A3A3A3",
        fontSize: 16,
        lineHeight: 26
    },
    preco: {
        color: '#2A9F85',
        fontWeight: 'bold',
        fontSize: 26,
        lineHeight: 42,
        marginTop: 8
    },
    botao: {
        marginTop: 16,
    }
})