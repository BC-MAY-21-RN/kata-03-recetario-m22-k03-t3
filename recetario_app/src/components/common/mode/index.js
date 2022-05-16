import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import NightSVG from '../../../assets/icons/night.svg';
import styles from '../../../components/common/mode/styles';
// import OvalSVG from '../../../assets/icons/oval.svg';

export default function Mode({}) {
  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.oval}>
        <NightSVG />
      </View>
      <Text style={styles.text}>Normal mode</Text>
    </TouchableOpacity>
  );
}
