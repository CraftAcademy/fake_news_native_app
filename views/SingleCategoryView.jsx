import React, { useEffect } from 'react';
import { StyleSheet, View, FlatList, Text } from 'react-native';
import Article from '../components/Article';
import Articles from '../modules/Articles';
import { useSelector } from 'react-redux';

const SingleCategoryView = (props) => {
  let category = props.route.params.category;
  const { articlesInCategory } = useSelector((state) => state);

  useEffect(() => {
    Articles.getInCategory(category);
  }, []);

  return (
    <View style={styles.container}>
      {articlesInCategory.length === 0 ? (
        <Text testID='no-articles-message' style={styles.errorMessage}>
          No articles available at this moment
        </Text>
      ) : (
        <FlatList
          testID='view-by-category'
          data={articlesInCategory}
          keyExtractor={(article) => article.id.toString()}
          renderItem={({ item }) => {
            return (
              <Article
                article={item}
                key={item.id}
                navigation={props.navigation}
              />
            );
          }}
        />
      )}
    </View>
  );
};

export default SingleCategoryView;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111518',
  },
  header: {
    color: 'lightgrey',
    textAlign: 'left',
    textTransform: 'uppercase',
    paddingLeft: 15,
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#CEC269',
  },
  errorMessage: {
    fontSize: 18,
    marginTop: '75%',
    textAlign: 'center',
    color: '#CEC269',
  },
});
