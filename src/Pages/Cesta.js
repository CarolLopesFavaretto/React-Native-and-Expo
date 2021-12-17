import React from 'react';
import {Text} from 'react-native'
import { StyleSheet, Image, Dimensions} from 'react-native';
import { View } from 'react-native';
import topo from '../../assets/topo.png';
import logo from '../../assets/logo.png';

const width = Dimensions.get('screen').width;

export default function Cesta(){
    return <>
    <Image source = {topo} style = {styles.topo} />
    <Text style = {styles.titulo}>Detalhes da Cesta</Text>

    <View style ={styles.cesta}>
        <Text style = {styles.nome}>Cesta de Verduras</Text>
        <View style = {styles.fazenda}>
        <Image source={logo} style = {styles.logo} />
        <Text style= {styles.nomeFazenda}>Fazenda Mineira</Text>
        </View>
        <Text style = {styles.descricao}>Um cesta com produtos selecionados 
        cuidadosamente da fazenda direito pra sua cozinha. </Text>
        <Text style = {styles.preco}>R$ 40,00</Text>
    </View>
    </>
}

const styles = StyleSheet.create({
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
    nome:{
        color: '#454545',
        fontSize: 26,
        lineHeight: 42,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    cesta:{
        paddingVertical: 8,
        paddingHorizontal: 16
    },
    nomeFazenda: {
        fontSize: 16,
        lineHeight: 26,
        marginLeft:12

    },
    descricao: {
        color: '#A3A3A3',
        fontSize: 16,
        lineHeight: 26
    }, 
    preco:{
        color: '#2A9F85',
        fontWeight: 'bold',
        fontSize: 26,
        lineHeight: 42,
        marginTop: 8,
    },
    logo:{
        width:32,
        height: 32,
    },
    fazenda: {
        flexDirection: 'row',
        paddingVertical: 12,
    }

})

