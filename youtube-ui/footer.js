import React, {Component} from 'react'
import { StyleSheet, Text, View, Image, TouchableHighlight } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import FooterItem from './footerItem'

class Footer extends Component {
  constructor(props){
    super(props)
    this.state = {
      selected: null
    }
    this.setSelected = this.setSelected.bind(this)
  }
  setSelected(index){
    console.log(index)
    this.setState({selected: index})
  }

  render () {
    const {selected} = this.state
    const footerItems = [
      {
        icon: 'home',
        title: 'Home',
      },
      {
        icon: 'whatshot',
        title: 'Trending',
      },
      {
        icon: 'subscriptions',
        title: 'Subscriptions',
      },
      {
        icon: 'notifications',
        title: 'Activity',
      },
      {
        icon: 'folder',
        title: 'Library',
      }
    ]
    return (
      <View style={styles.footer}>
        {footerItems.map( (item, i) => (
          <FooterItem
            key = {i}
            icon={item.icon}
            title={item.title}
            selected={selected == i ? true : false}
            handleClick={() => this.setSelected(i)} />
      ))}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  footer : {
    overflow: 'hidden',
    flexDirection: "row",
    paddingHorizontal: 5,
    height:50,
    backgroundColor: 'white',
    borderTopWidth: 1,
    borderTopColor: '#eff0f1',
    justifyContent: "space-around",
    alignItems: "center",
  },
})

export default Footer;
