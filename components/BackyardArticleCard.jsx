import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const BackyardArticleCard = ({ article, navigation }) => {
  return (
    <View style={styles.content}>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('backyard-article', {
            article: article,
          });
        }}>
        <Text testID='backyard-title' style={styles.title}>
          {article.title}
        </Text>
        <View style={styles.cardContent}>
          <Text testID='backyard-theme' style={styles.theme}>
            {article.theme}
          </Text>
          <Text testID='backyard-written_by' style={styles.written_by}>
            {article.written_by}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default BackyardArticleCard;

const styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: 'space-between',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 2,
      height: 15,
    },
    shadowOpacity: 0.55,
    shadowRadius: 14.78,

    elevation: 22,
    padding: 10,
    margin: 10,
    backgroundColor: '#202325',
  },
  title: {
    color: 'rgba(218,217,216,.9)',
    fontSize: 14,
    fontWeight: 'bold',
  },
  theme: {
    color: '#CEC269',
    fontSize: 10,
  },
  written_by: {
    color: '#CEC269',
    fontSize: 10,
    paddingLeft: 15,
  },
  cardContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
});
