import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { StyleSheet, Text, FlatList, View } from 'react-native';
import { getLocation } from '../modules/BackyardArticles';
import BackyardArticleCard from '../components/BackyardArticleCard';

const BackyardView = ({ navigation }) => {
  const { backyardArticles, location } = useSelector((state) => state);

  useEffect(() => {
    getLocation();
  }, []);

  return (
    <View style={styles.container}>
      {location ? (
        backyardArticles.length === 0 ? (
          <Text testID='no-backyard-message' style={styles.errorMessage}>
            No backyard available at this moment
          </Text>
        ) : (
          <>
            <Text testID='backyard-header' style={styles.header}>Backyard Articles from {location}</Text>
            <FlatList
              numColumns={2}
              data={backyardArticles}
              keyExtractor={(article) => article.id.toString()}
              renderItem={({ item }) => {
                return (
                  <BackyardArticleCard article={item} navigation={navigation} />
                );
              }}
            />
            <Text style={styles.footer}>
              The views and opinions expressed in the Backyard are those of the
              user's and do not necessarily reflect the official policy or
              position of Fake News. Any content provided by our patriots are of
              their opinion and are not intended to malign any religion, ethnic
              group, club, organization, company, individual or anyone or
              anything.
            </Text>
          </>
        )
      ) : (
        <Text style={styles.errorMessage} testID='no-location-message'>Please share your location to get access to your backyard</Text>
      )}
    </View>
  );
};

export default BackyardView;

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
    marginTop: '100%',
    textAlign: 'center',
    color: '#CEC269',
  },
  header: {
    fontSize: 20,
    color: 'white',
    marginVertical: 25,
    textAlign: 'center',
  },
  footer: { fontSize: 10, color: 'white', textAlign: 'center', margin: 10 },
});
