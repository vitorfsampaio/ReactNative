import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";

import Texto from "../../../componentes/Texto";

export default function Botao({ style, texto }) {
    return <>
        <TouchableOpacity style={[estilos.botao, style]}>
            <Texto style={estilos.textoBotao}>{texto}</Texto>
        </TouchableOpacity>
    </>

}

const estilos = StyleSheet.create({
    botao: {
        backgroundColor: "#2A9F85",
        paddingVertical: 16,
        borderRadius: 6
    },
    textoBotao: {
        textAlign: 'center',
        color: "#FFFFFF",
        fontSize: 16,
        lineHeight: 26,
        fontWeight: 'bold'
    }
})