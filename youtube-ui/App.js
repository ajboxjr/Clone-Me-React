import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import NavBar from './navBar';
import Footer from './footer'
export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <NavBar />
        <View style={styles.videos}>
          <View style={styles.vidItem}>

          </View>

        </View>
        <Footer />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between"
  },
  videos: {
    flex: 1,
  },
  vidItem: {
    height: 250,
  }

});
