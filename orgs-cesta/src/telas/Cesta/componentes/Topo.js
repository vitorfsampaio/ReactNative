import React from "react";
import { Image, StyleSheet, Dimensions } from "react-native";

import Texto from "../../../componentes/Texto";
import topo from '../../../../assets/topo.png';

const width = Dimensions.get('screen').width;

export default function Topo({titulo}) {
    return <>
        <Image style={estilos.topo} source={topo} />
        <Texto style={estilos.titulo}>{titulo}</Texto>
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
})