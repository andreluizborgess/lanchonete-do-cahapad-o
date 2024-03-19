import React from 'react';
import { FlatList, Image, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

interface Item {
    id: string;
    nome: string;
    preco: string;
    ingredientes: string;
    image: any;
}

const dados: Item[] = [
    { id: "1", nome: "x-bacon", preco: "R$ 17.00", ingredientes: "pão, hamburguer, queijo, bacon, alface, tomate", image: require('./assets/images/x-tudo.jpg') },
    { id: "2", nome: "x-salada", preco: "R$ 15.00", ingredientes: "pão, hamburguer, queijo, presunto, alface, tomate", image: require('./assets/images/x-tudo.jpg') },
    { id: "3", nome: "x-tudo", preco: "R$ 20.00", ingredientes: "pão, hamburguer, queijo, presunto, bacon, calabresa, batata palha, alface, tomate", image: require('./assets/images/x-tudo.jpg') },
    { id: "4", nome: "hotdog", preco: "R$ 12.00", ingredientes: "pão, duas salsichas, catchup, maionese, molho verde, batata palha", image: require('./assets/images/x-tudo.jpg') },
    { id: "5", nome: "panqueca de carne", preco: "R$ 15.00", ingredientes: "massa, carne moída", image: require('./assets/images/x-tudo.jpg') },
    { id: "6", nome: "fritas", preco: "R$ 20.00", ingredientes: "porção de batata frita", image: require('./assets/images/x-tudo.jpg') },
    { id: "7", nome: "pastel de queijo", preco: "R$ 12.00", ingredientes: "massa de pastel e queijo", image: require('./assets/images/x-tudo.jpg') },
    { id: "8", nome: "pastel de carne", preco: "R$ 12.00", ingredientes: "massa de pastel e carne moida", image: require('./assets/images/x-tudo.jpg') },
    { id: "9", nome: "cheese burguer", preco: "R$ 14.00", ingredientes: "pão, carne e queijo", image: require('./assets/images/x-tudo.jpg') },
    { id: "10", nome: "duplo queijo e bacon", preco: "R$ 20.00", ingredientes: "dois hamburgueres, bacon e queijo extra, alface e tomate", image: require('./assets/images/x-tudo.jpg') },
    { id: "11", nome: "coca cola lata", preco: "R$ 5.00", ingredientes: "coca cola", image: require('./assets/images/x-tudo.jpg') },
    { id: "12", nome: "coca cola 2l", preco: "R$ 10.00", ingredientes: "coca cola 2l", image: require('./assets/images/x-tudo.jpg') },
    { id: "12", nome: "funada lata", preco: "R$ 5.00", ingredientes: "funada", image: require('./assets/images/x-tudo.jpg') },
    { id: "14", nome: "funada 2l", preco: "R$ 8.00", ingredientes: "funada 2l", image: require('./assets/images/x-tudo.jpg') },
    { id: "15", nome: "agua", preco: "R$ 3.00", ingredientes: "agua mineral", image: require('./assets/images/x-tudo.jpg') },
];

const renderItem = ({ item }: { item: Item }) => (
    <TouchableOpacity style={styles.item}>
        <Text>{item.nome}</Text>
        <Text>{item.preco}</Text>
        <Text>{item.ingredientes}</Text>
        <Image source={item.imagemTamanho}/>
    </TouchableOpacity >
)

function FlatLists(): React.JSX.Element {
    return (
        <View style={styles.container}>
            <StatusBar backgroundColor="black" barStyle='light-content' />
            <View style={styles.header}>
                <Text style={styles.headerText}>chapadão lanches</Text>
            </View>
            <FlatList
                showsVerticalScrollIndicator={false}
                data={dados}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
            />
            <View style={styles.footer}>
                <TouchableOpacity>
                    <Image source={require('./assets/images/home.png')} style={styles.footerIcon}
                    />
                </TouchableOpacity>

                <TouchableOpacity>
                    <Image source={require('./assets/images/orders.png')} style={styles.footerIcon} />
                </TouchableOpacity>

                <TouchableOpacity>
                    <Image source={require('./assets/images/profile.png')} style={styles.footerIcon} />
                </TouchableOpacity>


            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 30
    },
    item: {
        backgroundColor: "#d5ffe4",
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16
    },
    header: {
        backgroundColor: '#d5ffe4',
        alignItems: 'center',
        paddingVertical: 50

    },
    headerText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: ''

    },

    footer: {
        borderTopWidth: 0.2,
        backgroundColor: 'white',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingVertical: 10

    },
    footerIcon: {
        width: 30,
        height: 30
    },
    imagemtamanho:{
height:20,
width:20

    }
})
export default FlatLists; 