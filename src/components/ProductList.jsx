// ProductList.jsx
import React, {useState, useEffect} from 'react';
import {ScrollView, View, Text, StyleSheet} from 'react-native';
import ProductCard from './ProductCard';
import axios from 'axios';

const ProductList = ({navigation}) => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const fetchProducts = async () => {
    try {
      const response = await axios.get('http://192.168.1.7:3001/products');
      setProducts(response.data);
    } catch (error) {
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleProductPress = product => {
    navigation.navigate('ProductDetails', {product});
  };

  const handleDelete = async id => {
    try {
      console.log('working');
      console.log('Deleting product with ID:', id);

      await axios.delete(`http://192.168.1.7:3001/products/${id}`);
      // Assuming you want to refresh the product list after deletion
      fetchProducts();
    } catch (error) {
      console.error('Error deleting product:', error);
    }
  };

  if (isLoading) return <Text>Loading...</Text>;
  if (isError) return <Text>Error fetching products</Text>;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {products.map(item => (
        <ProductCard
          key={item.id}
          product={item}
          onPress={() => handleProductPress(item)}
          onDelete={() => handleDelete(item.id)}
        />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#f0f0f0',
  },
});

export default ProductList;
