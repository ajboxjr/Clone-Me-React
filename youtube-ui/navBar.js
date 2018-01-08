import React from 'react';
import { StyleSheet, View, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import HomeNav from './homeNav'
import SearchNav from './searchNav'
class NavBar extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      searching: false
    }
    this.changeSearch = this.changeSearch.bind(this)

  }
  //Set Searching to true if false
  changeSearch(){
    this.setState({searching: this.state.searching ? false: true})
  }
  render () {
    return (
      <View style={styles.navBar}>
        {this.state.searching ?
           <SearchNav onClose={this.changeSearch}/ > :
         <HomeNav handleSearch={this.changeSearch}/> }
      </View>
    )
  }
}

const styles = StyleSheet.create({
  navBar: {
    height: 70,
    backgroundColor: 'white',
    // Creates a border around navbar
    shadowOpacity: .3,
    shadowOffset: { width: 0, height: 0},
    justifyContent: 'flex-end'
  }
})

export default NavBar;
