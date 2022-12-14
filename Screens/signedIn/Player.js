import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';
import {WebView} from 'react-native-webview';

const Player = ({navigation, route}) => {
  const {width, height} = Dimensions.get('screen');
  const [postData, setPostData] = useState(route.params.data);

  return (
    <View style={styles.mainPlayerView}>
      <View
        style={{
          height: height / 3,
          backgroundColor: 'gray',
          width: '100%',
        }}>
        <WebView
          source={{
            uri: postData.video_url,
          }}
          style={styles.video}
          allowsFullscreenVideo={true}
          /* setDisplayZoomControls={true} */
        />
      </View>
      <Text style={styles.postTitle}>{postData.post_title}</Text>
      <Text style={styles.postArtist}>{postData.post_artist}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  mainPlayerView: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#FAFAFA',
  },

  postTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
    color: '#646464',
  },
  postArtist: {
    fontSize: 16,
    color: '#646464',
    marginTop: 10,
  },
  video: {
    width: '100%',
    height: '100%',
  },
});
export default Player;
