import React from 'react';
import {TextInput, TouchableOpacity, View} from 'react-native';
import styles from './styles';

import SearchSVG from '../../../assets/icons/search.svg';
import DictationSVG from '../../../assets/icons/dictation.svg';

export default function SearchBar(props) {
  return (
    <View style={styles.container}>
      <SearchSVG />
      <TextInput
        style={styles.searchBar}
        placeholder="What do you want to eat?"
        placeholderTextColor={'#fff'}
        // onChangeText={text => {
        //   console.log(text);
        // }}
      />
      <TouchableOpacity style={styles.dictationButton}>
        <DictationSVG />
      </TouchableOpacity>
    </View>
  );
}
