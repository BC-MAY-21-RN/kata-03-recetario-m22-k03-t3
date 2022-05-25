import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import NightSVG from '../../../assets/icons/night.svg';
import styles from '../../../components/common/mode/styles';

export default function Mode({changeMode, mode}) {
  return (
    <TouchableOpacity style={styles.container} onPress={changeMode}>
      <View style={styles.oval}>
        <NightSVG />
      </View>
      <Text style={mode ? styles.text : styles.text2}>
        {mode ? 'Normal Mode' : 'Night Mode'}
      </Text>
    </TouchableOpacity>
  );
}
