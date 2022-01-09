import React from "react";
import { Image, StyleSheet, Dimensions} from "react-native";

import TextDefault from "../../../components/Text";
import topo from '../../../../assets/topo.png';

const width = Dimensions.get('screen').width;

export default function Topo (){
    return <>
    <Image source = {topo} style = {styles.topo} />
    <TextDefault style = {styles.titulo}>Detalhes da Cesta</TextDefault>
    </>
}

const styles = StyleSheet.create ({
    topo: {
        width:"100%",
        height: 578 /768 * width,
 
     },
     titulo: {
      width: "100%",
      position: 'absolute' ,
      textAlign: 'left',
      fontSize: 16,
      lineHeight: 30,
      color: 'white',
      fontWeight: 'bold',
      padding: 30
 
     },
})