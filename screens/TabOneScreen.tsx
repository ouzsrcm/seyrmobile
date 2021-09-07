import React, { useState } from 'react';
import { StyleSheet, Text, Dimensions, Button } from 'react-native';

import { Video, AVPlaybackStatus } from 'expo-av';

import { View } from '../components/Themed';
import { RootTabScreenProps } from '../types';

import * as FileSystem from 'expo-file-system';

const { width, height } = Dimensions.get('window');

export default function TabOneScreen({ navigation }: RootTabScreenProps<'TabOne'>) {

  const [videoUrl, setVideoUrl] = useState('http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4')
  const [buttonTitle, setButtonTitle] = useState('Download')
  const [progressValue, setProgressValue] = useState(0)
  const [totalSize, setTotalSize] = useState(0)

  return (
    <View style={styles.container}>
      <Video
        source={{ uri: videoUrl }}
        rate={1.0}
        volume={1.0}
        isMuted={false}
        resizeMode="cover"
        shouldPlay={true}
        isLooping={false}
        useNativeControls
        style={styles.video}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  video: {
    width: '100%',
    //height: '50%',
    alignSelf: 'center'
  }
});