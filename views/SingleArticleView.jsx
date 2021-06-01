import React, { useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  ScrollView,
  Pressable,
} from 'react-native';
import { useSelector } from 'react-redux';
import Articles from '../modules/Articles';

const SingleArticleView = (props) => {
  const articleId = props.route.params.article.id;
  const { article } = useSelector((state) => state);
  const showArticlesInCategory = () => {
    props.navigation.navigate('single-category-view', {
      category: article.category,
    });
  };

  useEffect(() => {
    Articles.show(articleId);
  }, [articleId]);

  return (
    <ScrollView>
      <Image
        testID='image'
        source={{ uri: article.image }}
        style={styles.image}
      />

      <View style={styles.container}>
        <Pressable
          testID='category-button'
          style={styles.button}
          onPress={() => showArticlesInCategory()}>
          <Text>{article.category}</Text>
        </Pressable>

        <Text testID='title' style={styles.header}>
          {article.title}
        </Text>
        <Text testID='body' style={styles.body}>
          {article.body}
        </Text>
        <View style={styles.articleFooter}>
          <Text testID='author' style={styles.sub}>
            By {article.author.first_name} {article.author.last_name}
          </Text>
          <Text testID='date' style={styles.date}>
            {article.date}
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default SingleArticleView;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#111518',
    flex: 1,
  },
  image: {
    height: 250,
    width: Dimensions.get('window').width,
  },
  header: {
    padding: 15,
    color: '#CEC269',
    fontSize: 25,
    backgroundColor: '#111518',
  },
  body: {
    color: 'lightgray',
    fontSize: 20,
    padding: 15,
  },
  sub: {
    color: '#CEC269',
    paddingTop: 2,
    paddingLeft: 15,
  },
  date: {
    color: 'gray',
    paddingTop: 2,
    paddingRight: 15,
    textAlign: 'right',
  },
  button: {
    backgroundColor: '#CEC269',
    height: 30,
    textAlign: 'center',
    padding: 8,
  },
  articleFooter: {
    flexDirection: 'row',
    paddingTop: 5,
    justifyContent: 'space-between',
  },
});
