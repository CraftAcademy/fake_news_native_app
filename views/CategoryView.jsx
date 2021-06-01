import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CategoryListCard from '../components/CategoryListCard';

const CategoryView = (navigation) => {
  return (
    <View style={styles.container}>
      <CategoryListCard navigation={navigation} category={'Science'}/>
    </View>
  );
};

export default CategoryView;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111518',
  },
  header: {
    fontSize: 20,
    color: 'white',
    marginVertical: 25,
    textAlign: 'center',
  },
});
