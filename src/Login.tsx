import React from 'react';
import { FlatList, Image, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';


function Login(): React.JSX.Element {
    return (
        <View style={styles.container}>
            <StatusBar backgroundColor="black" barStyle='light-content' />
            <View style={styles.header}>
            <Image source={require('./assets/images/chapadão2.png')} style={styles.logo}
                    />
            </View>
            
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
    logo:{
width:100,
height:100
        
    }

})
export default Login; 