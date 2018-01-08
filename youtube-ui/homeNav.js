import React from 'react';
import { StyleSheet, Text, View, Image, TouchableWithoutFeedback  } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

class HomeNav extends React.Component {
  constructor(props){
    super(props)
  }
  render(){
    return (
      <View style={styles.navContainer}>

      <View style={styles.leftNav}>
        <Image style={styles.main_logo}   source={require('./Youtube-logo.png')}></Image>
      </View>
      <View style={styles.rightNav}>
          <Icon style={styles.navItem} name="videocam" size={26} color="#757575" />
        <TouchableWithoutFeedback onPress={this.props.handleSearch}>
        <Icon style={styles.navItem}  name="search" size={26} color="#757575" />
        </TouchableWithoutFeedback>

        <Icon style={styles.navItem}  name="account-circle" size={26} color="#757575" />
      </View>
    </View>
    )
  }
}


const styles = StyleSheet.create({
  navContainer: {
    height: 50,
    //Center Items
    paddingHorizontal: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: "space-between",
  },
  leftNav: {
  },
  main_logo: {
    height:20,
    width: 90,
  },
  rightNav: {
    flexDirection: "row",

  },
  navItem: {
    marginLeft: 20,
  },
})

export default HomeNav
