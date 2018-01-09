import React from 'react';
import { StyleSheet, Text, View, Image,ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import NavBar from './navBar';
import Footer from './footer'
import VideoCard from './videoCard'
export default class App extends React.Component {

  render() {
    const videos = [
      {
        title: "Christian and Colby",
        image:   "https://i.ytimg.com/vi/r7YtcFZ7ENQ/hqdefault.jpg",
        icon: "https://yt3.ggpht.com/-3Pn5ndiZ1A8/AAAAAAAAAAI/AAAAAAAAAAA/VzcgBlGhWQs/s88-c-k-no-mo-rj-c0xffffff/photo.jpg",
        views: 1.6 ,
        date_added: "2 years ago",
        author: 'Colby Thomas'
      },
      {
        title: "Nujabes - Modal Soul(Full Album)",
        image: "https://i.ytimg.com/vi/WrO9PTpuSSs/hqdefault.jpg",
        icon: "https://yt3.ggpht.com/-T8JOR3q9smw/AAAAAAAAAAI/AAAAAAAAAAA/gmZTLqoHd-Q/s288-c-k-no-mo-rj-c0xffffff/photo.jpg",
        views: "13M",
        date_added: "5 years ago",
        author: 'Aruian Music'
      },
      {
        title: "Follow Your Bliss",
        image:   "https://i.ytimg.com/vi/i8GW1sMLa7A/hqdefault.jpg",
        icon: "https://yt3.ggpht.com/-2kNCvVGuvXY/AAAAAAAAAAI/AAAAAAAAAAA/UtjK95gNvi0/s176-c-k-no-mo-rj-c0xffffff/photo.jpg",
        views: "1.9k",
        date_added: "1 month ago",
        author: 'Elisha Long'
      },
      {
        title: "Noname - Samaritan (ft. Mick Jenkins)",
        image:   "https://i.ytimg.com/vi/BqzTFDPQUP0/hqdefault.jpg",
        icon: "https://pbs.twimg.com/profile_images/898565724490289152/-70NH3H3_400x400.jpg",
        views: "901K",
        date_added: "3 years ago",
        author: 'Noname'
      },
      {
        title: "Substantial - To This Union A Sun Was Born - Executive Producer: Nujabes (Full Album) 2001",
        image:   "https://i.ytimg.com/vi/UZFxVqmjBxM/hqdefault.jpg?sqp=-oaymwEXCNACELwBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLCcglabySYqbDhC37vX3szlRW3aMg",
        icon: "https://yt3.ggpht.com/-eKSuzTuJXj4/AAAAAAAAAAI/AAAAAAAAAAA/nNtc73-u_5k/s88-c-k-no-mo-rj-c0xffffff/photo.jpg",
        views: "23K",
        date_added: "3 years ago",
        author: 'Substantial'
      }
    ]
    return (
      <View style={styles.container}>
        <NavBar />
        <ScrollView style={{flex:1}}>
          {videos.map((video, i) => (
            <VideoCard key={i} {...video} />
          ))}
        </ScrollView>
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
