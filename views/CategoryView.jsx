import React from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import CategoryListCard from '../components/CategoryListCard';

const CategoryView = ({navigation}) => {
  const categories = [
    {
      id: 0,
      category: 'Science',
      description: 'Get to know latest news from the world of science',
    },
    {
      id: 1,
      category: 'Aliens',
      description: 'Read undeniable proofs that we are not alone in the Universe',
    },
    {
      id: 2,
      category: 'Illuminati',
      description: 'Get insides into a shadow government that pulls the strings',
    },
    {
      id: 3,
      category: 'Politics',
      description: 'Get to know first what amendment is going to be violated next',
    },
    {
      id: 4,
      category: 'Covid',
      description: 'All facts about the plot behind the pandemic',
    },
    {
      id: 5,
      category: 'Hollywood',
      description: 'Truthful gossips about the life of celebrities',
    },
  ];
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
