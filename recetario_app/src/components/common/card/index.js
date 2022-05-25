import React from 'react';
import {Text, Image, TouchableOpacity} from 'react-native';
import styles from './styles';
import functions from './functions';

/*const textStyle = (valbool, valbool2) => {
  if (valbool) {
    if (valbool2) {
      return styles.textlistnight;
    } else {
      return styles.textlist2night;
    }
  } else {
    if (valbool2) {
      return styles.textlistnormal;
    } else {
      return styles.textlist2normal;
    }
  }
};

const isLastStyle = (valbool, valbool2) => {
  if (valbool) {
    if (valbool2) {
      return styles.containertrending;
    } else {
      return styles.containerrecent;
    }
  } else {
    if (valbool2) {
      return styles.containertrendinglast;
    } else {
      return styles.containerrecentlast;
    }
  }
};*/

export default function Card({isLast, type, onPress, mode}) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={functions.isLastStyle(!isLast, type === 'TRENDING')}>
      <Image
        source={require('../../../assets/images/pizza.jpg')}
        style={type === 'TRENDING' ? styles.imagetrending : styles.imagerecent}
      />
      <Text style={functions.textStyle(mode, type === 'TRENDING')}>
        Pizza de Colima
      </Text>
    </TouchableOpacity>
  );
}

// {
//   uri: 'https://w6h5a5r4.rocketcdn.me/wp-content/uploads/2019/06/pizza-con-chorizo-jamon-y-queso-1080x671.jpg',
// }
