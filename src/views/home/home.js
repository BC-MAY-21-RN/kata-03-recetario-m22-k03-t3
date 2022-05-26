import React, {useState} from 'react';
import {View, ScrollView} from 'react-native';
import SearchBar from '../../components/common/searchBar';
import Mode from '../../components/common/mode';
import List from '../../components/common/list';
import styles from './styleshome';
import data from '../../database/recipes.json';

const backgroundColor = mode => {
  if (mode) {
    return styles.nightcolorcontainer;
  } else {
    return styles.normalcolorcontainer;
  }
};

export default function Home({navigation}) {
  //Hook useState
  const [mode, setMode] = useState(true);
  const [recentData, setRecentData] = useState([]);
  //Cambiar Mode
  const changeMode = () => {
    setMode(!mode);
  };

  const insertData = dataItem => {
    const newData = new Set([...dataItem, ...recentData]);
    setRecentData(Array.from(newData));
  };

  return (
    <ScrollView style={{...styles.container, ...backgroundColor(mode)}}>
      <SearchBar mode={mode} />
      <Mode mode={mode} changeMode={changeMode} />
      <List
        type="TRENDING"
        navigation={navigation}
        mode={mode}
        data={data.recent}
        insertData={insertData}
      />
      <View style={styles.br} />
      <List
        type="RECENT"
        navigation={navigation}
        mode={mode}
        data={recentData}
        insertData={insertData}
      />
    </ScrollView>
  );
}
