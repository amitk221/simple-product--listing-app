// ProductScreen.jsx
import React from 'react';
import {View, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ProductList from '../components/ProductList';
import ProductDetails from '../components/ProductDetails';

const Stack = createNativeStackNavigator();

const ProductScreen = () => {
  return (
    <View style={styles.container}>
      <Stack.Navigator initialRouteName="ProductList">
        <Stack.Navigator>
          <Stack.Screen name="Home" component={ProductList} />
        </Stack.Navigator>
      
      </Stack.Navigator>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default ProductScreen;
