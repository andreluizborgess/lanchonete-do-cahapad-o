import React, { useState } from "react";
import { Image, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { launchCamera, launchImageLibrary } from "react-native-image-picker";
import axios from 'axios';

const CadastroCliente: React.FC = () => {
    const [foto, setFoto] = useState<any>('');
    const [nome, setNome] = useState<string>('');
    const [telefone, setTelefone] = useState<string>('');
    const [endereco, setEndereco] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const cadastrarCliente = async () => {
        try {
            const formData = new FormData();
            formData.append('nome', nome);
            formData.append('telefone', telefone);
            formData.append('endereco', endereco);
            formData.append('email', email);
            formData.append('password', password);
            formData.append('foto', {
                uri: foto,
                type: 'foto/jpeg',
                name: new Date() + '.jpg'

            });

            const response = await axios.post('http://10.137.11.204:8000/api/clientes', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
        } catch (error) {
            console.log(error)
        }

    }

    const abrirCamera = () => {
        const options = {
            mediatype: 'photo',
            includeBase64: false,
            maxHeight: 2000,
            maxWidth: 2000
        };

        launchCamera(options, response => {
            if (response.didCancel) {
                console.log('cancelado pelo usuário');
            } else if (response.error) {
                console.log('erro ao abrir a camera');
            } else {
                let imageUri = response.uri || response.assets?.[0]?.uri;
                setFoto(imageUri);
                console.log(imageUri);

            }
        })
    }

    const selecionarFoto = () => {
        const options = {
            mediaType: 'photo',
            includeBase: false,
            maxHeight: 2000,
            maxWidth: 2000
        };

        launchImageLibrary(options, (response) => {
            if (response.didCancel) {
                console.log('cancelado pelo usuário');
            } else if (response.error) {
                console.log('erro ao abrir a galeria');
            } else {
                let imageUri = response.uri || response.assets?.[0]?.uri;
                setFoto(imageUri);
            }
        })
    }
    return (
        <View style={styles.container}>
            <StatusBar backgroundColor="red" barStyle="light-content" />
            <View style={styles.header}>
                <Text style={styles.headerText}>Top Food</Text>
            </View>
            <View style={styles.form}>
                <TextInput style={styles.input}
                    placeholder="Nome do  cliente"
                    value={nome}
                    onChangeText={setNome} />

               <TextInput style={styles.input}
                    placeholder="telefone"
                    value={telefone}
                    onChangeText={setTelefone}/>


                <TextInput style={styles.input}
                    placeholder="endereço"
                    value={endereco}
                    onChangeText={setEndereco} />

                <TextInput style={styles.input}
                    placeholder="email"
                    value={email}
                    onChangeText={setEmail} />

                <TextInput style={styles.input}
                    placeholder="password"
                    value={password}
                    onChangeText={setPassword} />

                <TextInput style={styles.input}
                    placeholder="foto"
                    value={foto}
                    onChangeText={setFoto} />


                <View style={styles.alinhamentoImagemSelecionada}>
                    {foto ? <Image source={{ uri: foto }} style={styles.imagemSelecionada} /> : null}

                </View>
                <TouchableOpacity style={styles.imageButton} onPress={selecionarFoto}>
                    <Text style={styles.imageButtonText}>selecionar imagem</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.imageButton} onPress={abrirCamera}>
                    <Text style={styles.imageButtonText}>tirar foto</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.imageButton} onPress={cadastrarCliente}>
                    <Text style={styles.imageButtonText}>cadastrar cliente</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.footer}>
                <TouchableOpacity>
                    <Image source={require('../assets/images/casa.png')} style={styles.footerIcon}
                    />
                </TouchableOpacity>

                <TouchableOpacity>
                    <Image source={require('../assets/images/lista-de-afazeres.png')} style={styles.footerIcon} />
                </TouchableOpacity>

                <TouchableOpacity>
                    <Image source={require('../assets/images/usuario-de-perfil.png')} style={styles.footerIcon} />
                </TouchableOpacity>

                <TouchableOpacity>
                    <Image source={require('../assets/images/barra-de-menu.png')} style={styles.footerIcon} />
                </TouchableOpacity>

            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },

    footer: {
        borderTopWidth: 0.2,
        backgroundColor: '#c32113',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingVertical: 10,
        marginVertical:-25,
        borderTopLeftRadius:5,
        borderTopRightRadius:5
    },

    footerIcon: {
        width: 30,
        height: 30
    },
    
    header: {
        backgroundColor: 'red',
        paddingVertical: 10,
        alignItems: 'center'
    },
    headerText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white'
    },
    form: {
        padding: 10,
        backgroundColor: '#f0f0f0',
        marginBottom: 10
    },
    input: {
        height: 40,
        borderColor: 'grey',
        borderWidth: 1,
        marginBottom: 10,
        paddingHorizontal: 10,
        borderRadius: 10
    },
    imageButton: {
        backgroundColor: 'red',
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
        marginBottom: 10
    },
    imageButtonText: {
        color: 'white',
        fontWeight: 'bold',

    },
    imagemSelecionada: {
        width: 200,
        height: 200,
        resizeMode: 'cover',
        borderRadius: 5,
        marginBottom: 10
    },
    alinhamentoImagemSelecionada: {
        alignItems: 'center'
    },
    button: {
        backgroundColor: 'red',
        padding: 10,
        borderRadius: 5,
        alignItems: 'center'
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold'
    }
})
export default CadastroCliente;