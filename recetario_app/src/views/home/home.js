import React, {useState} from 'react';
import {View, ScrollView} from 'react-native';
import SearchBar from '../../components/common/searchBar';
import Mode from '../../components/common/mode';
import Recent from '../../components/common/recent';
import styles from './styleshome';

export default function Home({navigation}) {
  //Hook useState
  const [mode, setMode] = useState(true);
  //Cambiar Mode
  const changeMode = () => {
    setMode (!mode);
  };

  return (
    <ScrollView style={mode ? styles.container : styles.container2}>
      <SearchBar mode={mode} />
      <Mode mode={mode} changeMode={changeMode}/>
      <Recent type="TRENDING" navigation={navigation} mode={mode}/>
      <View style={{height: 25}} />
      <Recent type="RECENT" navigation={navigation} mode={mode} />
    </ScrollView>
  );
}
