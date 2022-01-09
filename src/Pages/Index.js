import React from 'react';

import { StyleSheet, Image, Dimensions} from 'react-native';
import TextDefault from '../components/Text';
import { View } from 'react-native';
import Topo from './Cesta/components/topo';
import logo from '../../assets/logo.png';



export default function Cesta(){
    return <>
    <Topo />
    <View style ={styles.cesta}>
        <TextDefault style = {styles.nome}>Cesta de Verduras</TextDefault>
        <View style = {styles.fazenda}>
        <Image source={logo} style = {styles.logo} />
        <TextDefault style= {styles.nomeFazenda}>Fazenda Mineira</TextDefault>
        </View>
        <TextDefault style = {styles.descricao}>Uma cesta com produtos selecionados 
        cuidadosamente da fazenda direito pra sua cozinha. </TextDefault>
        <TextDefault style = {styles.preco}>R$ 40,00</TextDefault>
    </View>
    </>
}

const styles = StyleSheet.create({
    
    nome:{
        color: '#454545',
        fontSize: 26,
        lineHeight: 42,
        textAlign: 'center',
        fontFamily: 'MontserratBold',
    },
    cesta:{
        paddingVertical: 8,
        paddingHorizontal: 16
    },
    nomeFazenda: {
        fontSize: 16,
        lineHeight: 26,
        marginLeft:12,
        fontFamily: 'MontserratRegular',

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

