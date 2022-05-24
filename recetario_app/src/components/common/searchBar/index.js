import React from 'react';
import {TextInput, TouchableOpacity, View} from 'react-native';
import styles from './styles';

import SearchSVG from '../../../assets/icons/search.svg';
import DictationSVG from '../../../assets/icons/dictation.svg';
import Search2SVG from '../../../assets/icons/search-2.svg';
import Dictation2SVG from '../../../assets/icons/dictation-2.svg';

export default function SearchBar(props) {
  return (
    <View style={styles.container}>
      {props.mode ? <SearchSVG /> : <Search2SVG />}
      <TextInput
        style={styles.searchBar}
        placeholder="What do you want to eat?"
        placeholderTextColor={props.mode ? '#fff':'#8E8E93'}
        // onChangeText={text => {
        //   console.log(text);
        // }}
      />
      <TouchableOpacity style={styles.dictationButton}>
        {props.mode ? <DictationSVG /> : <Dictation2SVG />}
      </TouchableOpacity>
    </View>
  );
}
