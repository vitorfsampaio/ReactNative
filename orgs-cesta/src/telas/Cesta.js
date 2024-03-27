import React from "react";
import { Image, StyleSheet, Dimensions, Text } from "react-native";

import topo from '../../assets/topo.png';

const width = Dimensions.get('screen').width;

export default function Cesta() {
    return <>
        <Image style={style.topo} source={topo} />
        <Text style={style.titulo}>Detalhe da cesta</Text>
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
    }
});