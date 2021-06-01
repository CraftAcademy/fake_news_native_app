import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { AntDesign } from '@expo/vector-icons';

const CategoryListCard = ({ category, description, navigation }) => {
  return (
    <View testID={`category-${category}`} style={styles.content}>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('single-category-view', {
            category: category,
          });
        }}>
        <Text testID='title' style={styles.title}>
          {category}
        </Text>
        <View style={styles.cardContent}>
          <Text style={styles.description}>{description}</Text>
          <AntDesign
            name='arrowright'
            style={{ color: '#CEC269', paddingLeft: 15 }}
            size={24}
          />
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
    backgroundColor: '#202325',
  },
  title: {
    color: '#CEC269',
    fontSize: 18,
    fontWeight: 'bold',
  },
  description: {
    color: 'rgba(218,217,216,.9)',
    fontSize: 15,
    paddingLeft: 15,
  },
  cardContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
});
