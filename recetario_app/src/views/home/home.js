import React from 'react';
import {View} from 'react-native';
import SearchBar from '../../components/common/searchBar';
import Mode from '../../components/common/mode';
import Recent from '../../components/common/recent';
import styles from './styleshome';

export default function Home({navigation}) {
  return (
    <View style={styles.container}>
      <SearchBar />
      <Mode />
      <Recent type="TRENDING" navigation={navigation} />
      <View style={{height: 25}} />
      <Recent type="RECENT" navigation={navigation} />
    </View>
  );
}
