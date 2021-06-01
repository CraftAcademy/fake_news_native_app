import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { useSelector } from 'react-redux';
const Article = ({ article, navigation }) => {
  const { authenticated } = useSelector((state) => state);
  return (
    <TouchableOpacity
      testID='article'
      style={styles.row}
      onPress={() => {
        navigation.navigate(authenticated ? 'single-article' : 'logIn', {
          article: article,
        });
      }}>
      <Image source={{ uri: article.image }} style={styles.image} />
      <View style={styles.content}>
        <Text testID='title' style={styles.title}>
          {article.title}
        </Text>
        <View
          style={{
            flexDirection: 'row',
            marginTop: 5,
            justifyContent: 'space-between',
          }}>
          <Text testID='category' style={styles.attributes}>
            {article.category}
          </Text>
          <Text testID='author' style={styles.attributes}>
            By {article.author.first_name} {article.author.last_name}
          </Text>
          <Text testID='date' style={styles.attributes}>
            {article.date}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default Article;

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    padding: 15,
    flex: 1,
  },
  content: {
    flex: 1,
    paddingLeft: 15,
    justifyContent: 'space-between',
    height: '100%',
  },
  title: {
    color: 'lightgray',
    fontSize: 15,
  },
  image: {
    height: 100,
    width: 100,
  },
  attributes: {
    color: '#CEC269',
    fontSize: 10,
  },
});
