import React, {Component } from 'react'
import { StyleSheet, Text, View, TextInput, TouchableWithoutFeedback } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

class SearchNav extends Component{
  constructor(props){
    super(props)
  }
  render(){
    return(
      <View style={styles.navContainer}>
        <TouchableWithoutFeedback onPress={this.props.onClose}>
          <Icon name="arrow-back" size={26} color="#757575" />
        </TouchableWithoutFeedback>
        <TextInput style={{ flex:1, fontSize: 20, color: 'grey', justifyContent: 'flex-start'}}placeholder="Search Youtube"></TextInput>
        <Icon name="mic" size={26} color="#757575"/>
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
})

export default SearchNav
