import React, {Component} from 'react'
import { StyleSheet, Text, View, Image, TouchableWithoutFeedback, Animated } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

class FooterItem extends Component {
  constructor(props){
    super(props)
    this.state = {
      opacity: new Animated.Value(0),
      scale: new Animated.Value(0)
    }
    this._onPressIn = this._onPressIn.bind(this)
    this._onPressOut = this._onPressOut.bind(this)
    this._click = this._click.bind(this)
  }

  //Set Selected and unanimate circle
  _click(){
    this.props.handleClick()
    this._onPressOut()
  }

  // Animate circle
  _onPressIn() {
      Animated.parallel([
          Animated.timing(this.state.opacity, {
              duration: 0,
              toValue: .15
          }),
          Animated.timing(this.state.scale, {
              duration: 20,
              toValue: 80
          })
      ]).start();
  }
  // UN Animate Circle
  _onPressOut() {
    console.log('called')
    Animated.parallel([

        Animated.timing(this.state.opacity, {
            duration: 0,
            toValue: 0
        }),
        Animated.timing(this.state.scale, {
            duration: 0,
            toValue: 0
        })
    ]).start();
  }
  render(){
    const {icon, title, selected} = this.props
    const color = selected ? 'red' : "#757575"
    return (
      <View>
        <TouchableWithoutFeedback
          onPressIn={this._onPressIn}
          delayLongPress={300}
          onLongPress={this.props.handleClick}
          onPressOut={this._click}>
          <View style={styles.footerItem}>
            <Icon name={icon} size={26} color={color} />
            <Text style={[styles.footerItemText,{color: color}]}> {title} </Text>
          </View>
        </TouchableWithoutFeedback>
        <Animated.View style={[styles.circle,{ opacity: this.state.opacity, transform:[{scale: this.state.scale}]}]}>
        </Animated.View>
    </View>
    )
  }
}
const styles = StyleSheet.create({
  footerItem : {

    borderRadius:1,
    flexDirection: "column",
    alignItems:"center",

  },
  footerItemText : {
    fontSize: 10
  },
  circle :{
    alignSelf: 'center',
    position: 'relative',
    top: -20,
     width:1,
     height:1,
     borderRadius: 50,
     backgroundColor: 'red',
   }
})
export default FooterItem;
