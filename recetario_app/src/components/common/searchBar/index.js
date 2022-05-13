import React from 'react';
import {TextInput} from 'react-native';
import styles from './styles';

export default function SearchBar(props) {
  return (
    <TextInput
      style={styles.searchBar}
      onChangeText={text => {
        console.log(text);
      }}
      // value={text}
    />
  );
}
