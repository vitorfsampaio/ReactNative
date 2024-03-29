import React from "react";
import { Image, StyleSheet, Dimensions, Text, View } from "react-native";

import Texto from "../componentes/Texto";

import topo from '../../assets/topo.png';
import logo from '../../assets/logo.png';

const width = Dimensions.get('screen').width;

export default function Cesta() {
    return <>
        <Image style={estilos.topo} source={topo} />
        <Texto style={estilos.titulo}>Detalhe da cesta</Texto>

        <View style={estilos.cesta}>
            <Texto style={estilos.nome}>Cesta de verduras</Texto>
            <View style={estilos.fazenda}>
                <Image style={estilos.logo} source={logo}/>
                <Texto style={estilos.nomeFazenda}>Jenny Jack Farm</Texto>
            </View>
            <Texto style={estilos.descricao}>Uma cesta com produtos direcionados cuidadosamente da fazenda direto para a sua cozinha</Texto>
            <Texto style={estilos.preco}>R$40,00</Texto>
        </View>
    </>
}

const estilos = StyleSheet.create({
    topo: {
        width: "100%",
        height: (578 / 768) * width
    },
    titulo: {
        width: "100%",
        textAlign: "center",
        position: "absolute",
        fontSize: 16,
        lineHeight: 26,
        color: "#FFFFFF",
        fontWeight: "bold",
        padding: 16,
    },
    cesta: {
        paddingVertical: 8,
        paddingHorizontal: 16
    },
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
    }
});