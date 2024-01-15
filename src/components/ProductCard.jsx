// ProductCard.jsx
import React from 'react';
import {View, Text, StyleSheet, Pressable} from 'react-native';

const ProductCard = ({product, onPress, onDelete}) => {
  return (
    <Pressable onPress={onPress} style={styles.card}>
      <Text style={styles.name}>{product.name}</Text>
      <Text>{product.description}</Text>
      <Text style={styles.price}>${product.price}</Text>
      <Pressable onPress={onDelete} style={styles.deleteButton}>
        <Text style={{color: 'white'}}>Delete</Text>
      </Pressable>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  card: {
    padding: 16,
    margin: 8,
    borderRadius: 8,
    backgroundColor: '#fff',
    elevation: 2,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  price: {
    marginTop: 8,
    color: 'green',
    fontWeight: 'bold',
  },
  deleteButton: {
    marginTop: 8,
    backgroundColor: 'red',
    padding: 8,
    borderRadius: 4,
    alignItems: 'center',
  },
});

export default ProductCard;
