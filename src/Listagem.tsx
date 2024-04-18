import axios from "axios";
import React, { useEffect, useState } from "react";
import {View, Text, StyleSheet, FlatList, TouchableOpacity, StatusBar, Image, ImageBackground, ScrollView} from "react-native";

interface Produto {
    id: string,
    nome: string,
    preco: string,
    ingredientes: string,
    imagem:any,
}



const renderItem = ({item}: {item: Produto}) => (
    <View style={styles.item}>
        <Text style={styles.fonteNome}>{item.nome}</Text>
        <Image source={item.imagem} style={styles.bottomImage} />
        <Text style={styles.fonte}>{item.preco}</Text>
        <Text style={styles.fonte}>{item.ingredientes}</Text>
        <TouchableOpacity>
        </TouchableOpacity>
        </View>
)

function ListagemProduto(): React.JSX.Element {
    const [produtos, setProdutos] = useState<Produto[]>([]);

    useEffect(() => {
        listarProdutos();           
    }, []);


    const listarProdutos = async () => {
        try {
            const response = await axios.get('http://10.137.11.203:8000/api/produtos');

            console.log(response.data)
            if (response.status === 200) {
                setProdutos(response.data);
            }
        } catch (error) {
            console.log(error);
        }
    }
    
    return (
        <View style={styles.container}>
        <StatusBar backgroundColor="#c32113" barStyle="light-content"/>
        <View style={styles.header}>
            <Text style={styles.headerText}></Text>
            <Text style={styles.headerText2}></Text>
        </View>

        <View style={styles.container}>
            <FlatList
            showsVerticalScrollIndicator={false} 
                data={produtos}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
            />
           </View>
           </View>
    )       
};

const styles = StyleSheet.create({
    bottomImage:{
        width:300,
        height:130,
        borderWidth:2,
        borderColor:'#c32113',
        borderRadius:25,
        resizeMode:'center'
      },
    container: {
        flex: 1,
        backgroundColor:'#c32113'
       
    },
    item: {
        backgroundColor: '#ff6961',
        padding: 20,
        marginVertical: 10,
        marginHorizontal: 16,
        borderRadius:20,
        borderWidth:2,
        borderColor:'#c32113'
        
        
    },
    header: {
        alignItems: 'center'
    },
    footer: {
        borderTopWidth:0.2,
        backgroundColor:'black',
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems:'center',
        paddingVertical:10
    },
    footerIcon: {
        width:40,
        height:40
    },
    headerIcon:{
        width:590,
        height:83,
        alignItems:'center'
    },
    fonteNome:{
        fontSize:25,
        fontWeight:'100',
        color:'white'
    },
    headerText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white'
    },
    headerText2: {
        fontSize:16,
          fontWeight: 'bold',
          color: 'white'
       },
    fonte:{
        fontSize:20,
        color:'white',
        fontWeight:'300'
    },
    imagemfundo: {
        flex:1,
        justifyContent:'center',
    },
    carrinho:{
        position:'absolute',
        width:40,
        height:140,
        alignItems:'center',
        justifyContent:'center',
        right:20,
        bottom:30
    },
    imagemCarrinho:{
        width:77,
        height:77
    }
});

export default ListagemProduto;