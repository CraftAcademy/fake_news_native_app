import React from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import CategoryListCard from '../components/CategoryListCard';
import categories from '../resources/listOfCategories';

const CategoryView = ({ navigation }) => {
  return (
    <View testID='category-view' style={styles.container}>
      <FlatList
        numColumns={1}
        data={categories}
        keyExtractor={(category) => category.id.toString()}
        renderItem={({ item }) => {
          return (
            <CategoryListCard
              navigation={navigation}
              category={item.category}
              description={item.description}
            />
          );
        }}
      />
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
