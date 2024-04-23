import React from 'react';
import ScrollViewExample from './src/ScrollViews';
import FlatLists from './src/FlatLists';
import { FlatList } from 'react-native';
import login from './src/Login';
import Login from './src/Login';
import Listagem from './src/Listagem'
import CadastroProduto from './src/screens/CadastroProduto';
import CadastroCliente from './src/screens/CadastroClientes';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import CadastroClientes from './src/screens/CadastroClientes';


const Stack = createStackNavigator();

function App(): React.ReactElement{
  return (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name='FlatLists' component={FlatLists}
      options={{headerShown:false}}/>
       <Stack.Screen name='CadastroCliente' component={CadastroCliente}
      options={{headerShown:false}}/>
      <Stack.Screen name='CadastroProduto' component={CadastroProduto}
      options={{headerShown:false}}/>
      <Stack.Screen name='Listagem' component={Listagem}
      options={{headerShown:false}}/>

    </Stack.Navigator>
    </NavigationContainer>
  );
}




export default App;
