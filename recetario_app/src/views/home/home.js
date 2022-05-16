import React from 'react';
import {View, Text, Button} from 'react-native';
import SearchBar from '../../components/common/searchBar';
import Mode from '../../components/common/mode';
import styles from './styleshome';

export default function Home(props) {
  return (
    <View style={styles.container}>
      <SearchBar />
      <Mode />
      <View>
        <Text>Recientes</Text>
      </View>
      <Button
        title="detallsdede"
        onPress={() => props.navigation.navigate('Detail')}
      />
    </View>
  );
}
