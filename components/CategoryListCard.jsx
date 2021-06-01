import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const CategoryListCard = ({ category, navigation }) => {
  return (
    <View style={styles.content}>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('single-category-view', {
            category: category,
          });
        }}>
        <Text style={styles.title}>{category}</Text>
        <View style={styles.cardContent}>
          <Text style={styles.written_by}>
            {'Get to know latest news from the world of science'}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default CategoryListCard;

const styles = StyleSheet.create({
  content: {
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
    backgroundColor: '#CEC269',
  },
  title: {
    color: '#000',
    fontSize: 14,
    fontWeight: 'bold',
  },
  written_by: {
    color: '#000',
    fontSize: 10,
    paddingLeft: 15,
  },
  cardContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
});
