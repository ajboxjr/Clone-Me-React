import React from 'react'
import { Text, View, Image, StyleSheet} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons';

const VideoCard = ({image, icon, title, author, views, date_added}) => {
  return(
    <View style={styles.vidItem}>
      <View style={styles.vidImageContainer}>
        <Image source={{uri: image}} style={styles.vidImage} />
      </View>
      <View style={styles.vidInfo}>
        <View style={styles.vidIconContainer}>
          <Image source={{uri: icon}} style={styles.vidIcon} />
        </View>
        <View style={styles.vidDescription}>
          <Text style={styles.vidTitle}>{title.length < 55? title : title.substring(0,55) + "..."}</Text>
          <View style={styles.vidMeta}>
            <Text style={styles.vidMetaText}>{author} · {views} views ·  {date_added}</Text>
          </View>
        </View>
        <Icon style={styles.vidMore} name="more-vert" size={18} color="#757575"/>
      </View>
    </View>
  )
}


const styles = StyleSheet.create({
  vidItem :{
    height: 280,
    flexDirection: 'column',
    borderBottomWidth: 1,
    borderBottomColor: '#757575',
    paddingHorizontal: 15,

  },
  vidImageContainer: {
    paddingTop: 10,
    flex:3,
  },
  vidImage: {
    flex:1,
    resizeMode: 'stretch'
  },
  vidInfo: {
    paddingTop: 5,
    flex: 1,
    flexDirection: 'row',
  },
  vidIconContainer: {
    width:50,
    alignItems:'center'
  },
  vidIcon: {
    width: 45,
    height: 45,
    borderRadius: 22.5,
  },
  vidDescription: {
    flex:1,
    flexDirection: 'column',
  },
  vidTitle: {
    fontSize: 18,
  },
  vidMeta: {
    flexDirection: 'row',
    flexWrap:'nowrap'
  },
  vidMetaText : {
    color: "#757575",
    fontSize: 14,
  },
  vidMore: {
    marginTop: 8,
    width: 14,
    height: 16,
  }
})
export default VideoCard;
