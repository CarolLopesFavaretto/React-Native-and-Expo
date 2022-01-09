import React from "react";
import { StyleSheet, Text } from "react-native";

export default function TextDefault ({ children, style}){
    return <Text style = { [style , styles ]}> { children }</Text>
    
    let styles = styleFont.text;

    if(style?.fontWeigth === 'bold'){
        styles = styleFont.textNegrito;
    }
}

const styleFont = StyleSheet.create({
    text: {
        fontFamily: "MontserratRegular",
        fontWeight: "normal",
    },
    textNegrito: {
        fontFamily: "MontserratBold",
        fontWeight: "normal",
    }
})