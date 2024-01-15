// ProductDetails.jsx
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const ProductDetails = ({route}) => {
  const {product} = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.name}>{product.name}</Text>
      <Text>{product.description}</Text>
      <Text style={styles.price}>${product.price}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  price: {
    marginTop: 8,
    color: 'green',
    fontWeight: 'bold',
  },
});

export default ProductDetails;
