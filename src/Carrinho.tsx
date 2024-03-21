import React from 'react';
import { FlatList, Image, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

interface compra{
  
    id: string;
    pedido:string;
    endereco:string;
    preco:string;
    formaPagamento:string;
}

const dados: compra[] = [
{ id:"'" ,pedido: "x-bacon", endereco: "rua são jão", preco:"17.00",formaPagamento: "cartão de crédito" }

];

const renderCompras = ({ item }: { item: Item }) => (
    <TouchableOpacity style={styles.compra}>
        <Text style={[styles.corFrases, styles.nomeFont]} >{compra.pedido}</Text>
        <Text style={[styles.corFrases, styles.precoFont]}>{compra.preco}</Text>
        <Text style={styles.corFrases}>{item.ingredientes}</Text>
        <Image source={item.image} style={styles.imagemtamanho}/>
    </TouchableOpacity >
)

function C(): React.JSX.Element {
    return (
        <View style={styles.container}>
            <StatusBar backgroundColor="black" barStyle='light-content' />
            <View style={styles.header}>
            <Text>Carrinho</Text>
                    
            </View>
            <FlatList
                showsVerticalScrollIndicator={false}
                data={dados}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
            />
            <View style={styles.footer}>
                <TouchableOpacity>
                    <Image source={require('./assets/images/casa.png')} style={styles.footerIcon}
                    />
                </TouchableOpacity>

                <TouchableOpacity>
                    <Image source={require('./assets/images/lista-de-afazeres.png')} style={styles.footerIcon} />
                </TouchableOpacity>

                <TouchableOpacity>
                    <Image source={require('./assets/images/usuario-de-perfil.png')} style={styles.footerIcon} />
                </TouchableOpacity>

                <TouchableOpacity>
                    <Image source={require('./assets/images/barra-de-menu.png')} style={styles.footerIcon} />
                </TouchableOpacity>

            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 0
    },
    compra: {
        backgroundColor: "#c32113",
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
        borderRadius: 20,
        borderColor: 'red',
        borderWidth: 3
    },
    header: {
        backgroundColor: '#c32113',
        alignItems: 'center',
        paddingVertical: 2,
        borderBottomLeftRadius:15,
        borderBottomRightRadius:15
        

    },
    headerText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'yellow'

    },

    footer: {
        borderTopWidth: 0.2,
        backgroundColor: '#c32113',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingVertical: 10,

        borderTopLeftRadius:5,
        borderTopRightRadius:5

    },
    footerIcon: {
        width: 30,
        height: 30
    },
    imagemtamanho:{
height:170,
width:320,
borderRadius:10


    },
    corFrases:{
color: 'yellow'
    },
    nomeFont:{
        fontSize:25
    },
    precoFont:{
        fontSize:15
    },
    logo:{
width:100,
height:100
        
    }

})
export default Carrinho;