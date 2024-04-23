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
    { id: "1", nome: "x-ʙᴀᴄᴏɴ", preco: "R$ 17.00", ingredientes: "pão, hamburguer, queijo, bacon, alface, tomate", image: require('./assets/images/x-tudo.jpg') },
    { id: "2", nome: "x-sᴀʟᴀᴅᴀ", preco: "R$ 15.00", ingredientes: "pão, hamburguer, queijo, presunto, alface, tomate", image: require('./assets/images/x-tudo.jpg') },
    { id: "3", nome: "x-ᴛᴜᴅᴏ", preco: "R$ 20.00", ingredientes: "pão, hamburguer, queijo, presunto, bacon, calabresa, batata palha, alface, tomate", image: require('./assets/images/x-tudo.jpg') },
    { id: "4", nome: "ʜᴏᴛᴅᴏɢ", preco: "R$ 12.00", ingredientes: "pão, duas salsichas, catchup, maionese, molho verde, batata palha", image: require('./assets/images/x-tudo.jpg') },
    { id: "5", nome: "ᴘᴀɴǫᴜᴇᴄᴀ ᴅᴇ ᴄᴀʀɴᴇ", preco: "R$ 15.00", ingredientes: "massa, carne moída", image: require('./assets/images/x-tudo.jpg') },
    { id: "6", nome: "ғʀɪᴛᴀs", preco: "R$ 20.00", ingredientes: "porção de batata frita", image: require('./assets/images/x-tudo.jpg') },
    { id: "7", nome: "ᴘᴀsᴛᴇʟ ᴅᴇ ǫᴜᴇɪᴊᴏ", preco: "R$ 12.00", ingredientes: "massa de pastel e queijo", image: require('./assets/images/x-tudo.jpg') },
    { id: "8", nome: "ᴘᴀsᴛᴇʟ ᴅᴇ ᴄᴀʀɴᴇ", preco: "R$ 12.00", ingredientes: "massa de pastel e carne moida", image: require('./assets/images/x-tudo.jpg') },
    { id: "9", nome: "ᴄʜᴇᴇsᴇ ʙᴜʀɢᴜᴇʀ", preco: "R$ 14.00", ingredientes: "pão, carne e queijo", image: require('./assets/images/x-tudo.jpg') },
    { id: "10", nome: "ᴅᴜᴘʟᴏ ǫᴜᴇɪᴊᴏ ᴇ ʙᴀᴄᴏɴ", preco: "R$ 20.00", ingredientes: "dois hamburgueres, bacon e queijo extra, alface e tomate", image: require('./assets/images/x-tudo.jpg') },
    { id: "11", nome: "ᴄᴏᴄᴀ ᴄᴏʟᴀ ʟᴀᴛᴀ", preco: "R$ 5.00", ingredientes: "coca cola", image: require('./assets/images/x-tudo.jpg') },
    { id: "12", nome: "ᴄᴏᴄᴀ ᴄᴏʟᴀ 2ʟ", preco: "R$ 10.00", ingredientes: "coca cola 2l", image: require('./assets/images/x-tudo.jpg') },
    { id: "12", nome: "ғᴜɴᴀᴅᴀ ʟᴀᴛᴀ", preco: "R$ 5.00", ingredientes: "funada", image: require('./assets/images/x-tudo.jpg') },
    { id: "14", nome: "ғᴜɴᴀᴅᴀ 2ʟ", preco: "R$ 8.00", ingredientes: "funada 2l", image: require('./assets/images/x-tudo.jpg') },
    { id: "15", nome: "ᴀɢᴜᴀ", preco: "R$ 3.00", ingredientes: "agua mineral", image: require('./assets/images/x-tudo.jpg') },
];

const renderItem = ({ item }: { item: Item }) => (
    <TouchableOpacity style={styles.item}>
        <Text style={[styles.corFrases, styles.nomeFont]} >{item.nome}</Text>
        <Text style={[styles.corFrases, styles.precoFont]}>{item.preco}</Text>
        <Text style={styles.corFrases}>{item.ingredientes}</Text>
        <Image source={item.image} style={styles.imagemtamanho} />
    </TouchableOpacity >
)

function FlatLists(): React.JSX.Element {
    return (
        <View style={styles.container}>
            <StatusBar backgroundColor="black" barStyle='light-content' />
            <View style={styles.header}>
                <Image source={require('./assets/images/chapadão2.png')} style={styles.logo}
                />
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
    item: {
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
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15


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

        borderTopLeftRadius: 5,
        borderTopRightRadius: 5

    },
    footerIcon: {
        width: 30,
        height: 30
    },
    imagemtamanho: {
        height: 170,
        width: 320,
        borderRadius: 10


    },
    corFrases: {
        color: 'yellow'
    },
    nomeFont: {
        fontSize: 25
    },
    precoFont: {
        fontSize: 15
    },
    logo: {
        width: 100,
        height: 100

    }

})
export default FlatLists; 