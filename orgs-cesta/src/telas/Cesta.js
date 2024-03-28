import React from "react";
import { Image, StyleSheet, Dimensions, Text, View } from "react-native";

import topo from '../../assets/topo.png';
import logo from '../../assets/logo.png';

const width = Dimensions.get('screen').width;

export default function Cesta() {
    return <>
        <Image style={style.topo} source={topo} />
        <Text style={style.titulo}>Detalhe da cesta</Text>

        <View style={style.cesta}>
            <Text style={style.nome}>Cesta de verduras</Text>
            <View style={style.fazenda}>
                <Image style={style.logo} source={logo}/>
                <Text style={style.nomeFazenda}>Jenny Jack Farm</Text>
            </View>
            <Text style={style.descricao}>Uma cesta com produtos direcionados cuidadosamente da fazenda direto para a sua cozinha</Text>
            <Text style={style.preco}>R$40,00</Text>
        </View>
    </>
}

const style = StyleSheet.create({
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
        padding: 16
    },
    cesta: {
        paddingVertical: 8,
        paddingHorizontal: 16
    },
    nome: {
        fontSize: 26,
        lineHeight: 42,
        color: "#464646",
        fontFamily: "MontserratBold"
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
        fontFamily: "MontserratRegular"
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