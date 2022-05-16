import React from 'react';
import {View, Text, Button} from 'react-native';
import SearchBar from '../../components/common/searchBar';
import styles from './styleshome';

export default function Home(props) {
  return (
    <View style={styles.container}>
      <SearchBar />
      <View>
        <Text>ScrollView horizontal</Text>
      </View>
      <View>
        <Text>Recientes</Text>
      </View>
      <Button
        title="detalle"
        onPress={() => props.navigation.navigate('Detail')}
      />
    </View>
  );
}
