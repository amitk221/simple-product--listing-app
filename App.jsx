// App.tsx
// import React from 'react';
// import { NavigationContainer } from 'react-navigation/native';
// import { createStackNavigator } from 'react-navigation/stack';
// import ProductList from './src/components/ProductList';
// import ProductDetails from './src/components/ProductDetails';

// const Stack = createStackNavigator();

// const App: React.FC = () => {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator initialRouteName="ProductList">
//         <Stack.Screen name="ProductList" component={ProductList} />
//         <Stack.Screen name="ProductDetails" component={ProductDetails} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// };

// export default App;

// import * as React from 'react';
// import {View, Text} from 'react-native';
// import {NavigationContainer} from '@react-navigation/native';
// import {createNativeStackNavigator} from '@react-navigation/native-stack';

// function HomeScreen() {
//   return (
//     <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
//       <Text>Home Screen</Text>
//     </View>
//   );
// }

// const Stack = createNativeStackNavigator();

// function App() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator>
//         <Stack.Screen name="Home" component={HomeScreen} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }

// export default App;

// In App.js in a new project

import * as React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ProductList from './src/components/ProductList';
import ProductDetails from './src/components/ProductDetails';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="ProductList">
        <Stack.Screen name="ProductList" component={ProductList} />
        <Stack.Screen name="ProductDetails" component={ProductDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
