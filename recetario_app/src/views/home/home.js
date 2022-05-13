import React from 'react';
import {View, Text, Button} from 'react-native';
import SearchBar from '../../components/common/searchBar';

export default function Home(props) {
  return (
    <View>
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
