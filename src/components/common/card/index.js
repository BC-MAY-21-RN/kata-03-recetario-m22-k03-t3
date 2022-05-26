import React from 'react';
import {Text, Image, TouchableOpacity} from 'react-native';
import styles from './styles';
import functions from './functions';
// functions.isLastStyle(!isLast, type === 'TRENDING')
// functions.textStyle(mode, type === 'TRENDING')
export default function Card({isLast, type, onPress, mode, dish}) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        ...(type === 'TRENDING'
          ? styles.containertrending
          : styles.containerrecent),
        ...(!isLast ? styles.isnotlast : null),
      }}>
      <Image
        source={{uri: dish.image}}
        style={type === 'TRENDING' ? styles.imagetrending : styles.imagerecent}
      />
      <Text
        style={{
          ...(type === 'TRENDING'
            ? styles.textlisttrending
            : styles.textlistrecent),
          ...(mode ? styles.whitecolortext : styles.blackcolortext),
        }}>
        {dish.title}
      </Text>
    </TouchableOpacity>
  );
}

// {
//   uri: 'https://w6h5a5r4.rocketcdn.me/wp-content/uploads/2019/06/pizza-con-chorizo-jamon-y-queso-1080x671.jpg',
// }
