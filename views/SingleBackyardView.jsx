import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import BackyardArticles from '../modules/BackyardArticles';

const SingleBackyardView = ({ route }) => {
  const { article } = useSelector((state) => state);
  const { id } = route.params.article;

  useEffect(() => {
    BackyardArticles.show(id);
  }, [id]);

  return (
    <ScrollView style={styles.container}>
      <View >
        <Text style={styles.header}>{article.title}</Text>
        <Text style={styles.body}>{article.body}</Text>
        <View style={styles.articleFooter}>
          <Text style={styles.written_by}>By {article.written_by}</Text>
          <Text style={styles.date}>{article.date}</Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default SingleBackyardView;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#111518',
    flex: 1,
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
  written_by: {
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
  articleFooter: {
    flexDirection: 'row',
    paddingTop: 5,
    justifyContent: 'space-between',
  },
});
