// index.ios.js - place code in here for android!!!

// Import a library to help create a component
import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';
//import ReactNative from 'react-native';

// Create a component
const App = () => {
  return (
    <View style={{ flex: 1 }}>
      <Header headerText={'Albums'} />
      <AlbumList />
    </View>
  );
};

// Render it to the device
AppRegistry.registerComponent('albums', () => App);
//ReactNative.AppRegistry.registerComponent('albums', () => App);
